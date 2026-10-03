import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { auth } from '../services/firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile,
  updatePassword,
  onAuthStateChanged
} from 'firebase/auth';

const CartContext = createContext(null);

const CART_KEY = 'bytespace_cart';
const ORDERS_KEY = 'bytespace_orders';

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
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [profileVersion, setProfileVersion] = useState(0);

  // Initialize Firebase Auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName || 'My Account',
          photoURL: firebaseUser.photoURL,
          providerData: firebaseUser.providerData
        });
      } else {
        setUser(null);
      }
      setAuthReady(true);
    });

    return () => unsubscribe();
  }, []);

  // Persist cart and orders to local storage
  useEffect(() => localStorage.setItem(CART_KEY, JSON.stringify(cartIds)), [cartIds]);
  useEffect(() => localStorage.setItem(ORDERS_KEY, JSON.stringify(orders)), [orders]);

  // Auth Methods (Pure Firebase)
  const register = useCallback(async (name, email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName: name });
    // Force a local update to immediately reflect the new name before the next auth state change fires
    setUser((prev) => prev ? { ...prev, displayName: name } : null);
  }, []);

  const login = useCallback(async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  }, []);

  const loginWithGoogle = useCallback(async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  }, []);

  const logout = useCallback(async () => {
    await signOut(auth);
  }, []);

  const updateProfileMock = useCallback(async (updates) => {
    if (!auth.currentUser) throw new Error("No authenticated user.");
    await updateProfile(auth.currentUser, updates);
    setUser((prev) => ({ ...prev, ...updates }));
    setProfileVersion((v) => v + 1);
  }, []);

  const updatePasswordMock = useCallback(async (currentPass, newPass) => {
    if (!auth.currentUser) throw new Error("No authenticated user.");
    // In a real app, you would need to re-authenticate the user with their current password
    // before updating it, but for simplicity here we just call updatePassword.
    // If the user's login session is too old, Firebase will throw an error requiring re-authentication.
    await updatePassword(auth.currentUser, newPass);
  }, []);

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
        register, login, loginWithGoogle, logout, updateProfileMock, updatePasswordMock
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
