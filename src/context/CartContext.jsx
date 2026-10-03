import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';

const CartContext = createContext(null);

const CART_KEY = 'bytespace_cart';
const ORDERS_KEY = 'bytespace_orders';

const read = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [cartIds, setCartIds] = useState(() => read(CART_KEY));
  const [orders, setOrders] = useState(() => read(ORDERS_KEY));
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthReady(true);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cartIds));
  }, [cartIds]);

  useEffect(() => {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  }, [orders]);

  const addToCart = useCallback((id) => {
    setCartIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  const removeFromCart = useCallback((id) => {
    setCartIds((prev) => prev.filter((x) => x !== id));
  }, []);

  const clearCart = useCallback(() => setCartIds([]), []);

  // updateProfile mutates the same user object, so bump a counter to re-render consumers
  const [profileVersion, setProfileVersion] = useState(0);
  const refreshUser = useCallback(() => setProfileVersion((v) => v + 1), []);

  const placeOrder = useCallback((order) => {
    setOrders((prev) => [order, ...prev]);
    setCartIds([]);
  }, []);

  return (
    <CartContext.Provider
      value={{ cartIds, orders, user, authReady, profileVersion, refreshUser, addToCart, removeFromCart, clearCart, placeOrder }}
    >
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
