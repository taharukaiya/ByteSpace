import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const CartContext = createContext(null);

const CART_KEY = 'bytespace_cart';
const ORDERS_KEY = 'bytespace_orders';
const USERS_KEY = 'bytespace_users';
const SESSION_KEY = 'bytespace_session';

const read = (key, defaultVal = []) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || defaultVal;
  } catch {
    return defaultVal;
  }
};

export const CartProvider = ({ children }) => {
  const [cartIds, setCartIds] = useState(() => read(CART_KEY, []));
  const [orders, setOrders] = useState(() => read(ORDERS_KEY, []));
  const [users, setUsers] = useState(() => read(USERS_KEY, []));
  const [user, setUser] = useState(null); // The current logged-in user object
  const [authReady, setAuthReady] = useState(false);
  const [profileVersion, setProfileVersion] = useState(0);

  // Initialize session
  useEffect(() => {
    const sessionUid = localStorage.getItem(SESSION_KEY);
    if (sessionUid) {
      const found = users.find((u) => u.uid === sessionUid);
      if (found) setUser(found);
    }
    setAuthReady(true);
  }, [users]); // Re-run if users change to keep current user up to date

  // Persist storage
  useEffect(() => localStorage.setItem(CART_KEY, JSON.stringify(cartIds)), [cartIds]);
  useEffect(() => localStorage.setItem(ORDERS_KEY, JSON.stringify(orders)), [orders]);
  useEffect(() => localStorage.setItem(USERS_KEY, JSON.stringify(users)), [users]);

  // Auth Methods
  const register = useCallback((name, email, password) => {
    if (users.some((u) => u.email === email)) {
      throw new Error('Email already in use.');
    }
    const newUser = {
      uid: 'u_' + Date.now().toString(),
      displayName: name,
      email,
      password, // cleartext for mock
      photoURL: '',
      providerData: [{ providerId: 'password' }],
    };
    setUsers((prev) => [...prev, newUser]);
    localStorage.setItem(SESSION_KEY, newUser.uid);
    setUser(newUser);
  }, [users]);

  const login = useCallback((email, password) => {
    const found = users.find((u) => u.email === email && u.password === password);
    if (!found) throw new Error('Invalid email or password.');
    localStorage.setItem(SESSION_KEY, found.uid);
    setUser(found);
  }, [users]);

  const logout = useCallback(() => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  }, []);

  const updateProfileMock = useCallback((updates) => {
    if (!user) return;
    setUsers((prev) =>
      prev.map((u) => (u.uid === user.uid ? { ...u, ...updates } : u))
    );
    setProfileVersion((v) => v + 1);
  }, [user]);

  const updatePasswordMock = useCallback((currentPass, newPass) => {
    if (!user) return;
    if (user.password !== currentPass) throw new Error('Current password is incorrect.');
    setUsers((prev) =>
      prev.map((u) => (u.uid === user.uid ? { ...u, password: newPass } : u))
    );
  }, [user]);

  // Cart Methods
  const addToCart = useCallback((id) => setCartIds((prev) => (prev.includes(id) ? prev : [...prev, id])), []);
  const removeFromCart = useCallback((id) => setCartIds((prev) => prev.filter((x) => x !== id)), []);
  const clearCart = useCallback(() => setCartIds([]), []);

  const placeOrder = useCallback((order) => {
    setOrders((prev) => [order, ...prev]);
    setCartIds([]);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartIds, orders, user, authReady, profileVersion,
        addToCart, removeFromCart, clearCart, placeOrder,
        register, login, logout, updateProfileMock, updatePasswordMock
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
