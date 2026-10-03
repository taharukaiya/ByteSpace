import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { auth } from '../services/firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  updateProfile,
  updatePassword,
  onAuthStateChanged
} from 'firebase/auth';

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
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName || 'My Account',
          photoURL: firebaseUser.photoURL,
          providerData: firebaseUser.providerData
        });
        setAuthReady(true);
      } else {
        // Fallback to check mock session if Firebase has no user
        const sessionUid = localStorage.getItem(SESSION_KEY);
        if (sessionUid) {
          const found = users.find((u) => u.uid === sessionUid);
          if (found) setUser(found);
          else setUser(null);
        } else {
          setUser(null);
        }
        setAuthReady(true);
      }
    });

    return () => unsubscribe();
  }, [users]); // Re-run if users change to keep current user up to date

  // Persist storage
  useEffect(() => localStorage.setItem(CART_KEY, JSON.stringify(cartIds)), [cartIds]);
  useEffect(() => localStorage.setItem(ORDERS_KEY, JSON.stringify(orders)), [orders]);
  useEffect(() => localStorage.setItem(USERS_KEY, JSON.stringify(users)), [users]);

  // Auth Methods
  const register = useCallback(async (name, email, password) => {
    try {
      // Try Firebase first
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      // The onAuthStateChanged listener will handle setUser
    } catch (error) {
      console.warn("Firebase register failed, using mock auth fallback.", error);
      // Fallback to Mock Auth
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
    }
  }, [users]);

  const login = useCallback(async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // onAuthStateChanged will handle setUser
    } catch (error) {
      console.warn("Firebase login failed, using mock auth fallback.", error);
      const found = users.find((u) => u.email === email && u.password === password);
      if (!found) throw new Error('Invalid email or password.');
      localStorage.setItem(SESSION_KEY, found.uid);
      setUser(found);
    }
  }, [users]);

  const logout = useCallback(async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.warn("Firebase logout error:", e);
    }
    // Always clear mock session just in case
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  }, []);

  const updateProfileMock = useCallback(async (updates) => {
    if (!user) return;
    try {
      if (auth.currentUser && auth.currentUser.uid === user.uid) {
        await updateProfile(auth.currentUser, updates);
        setUser((prev) => ({ ...prev, ...updates }));
      }
    } catch (e) {
      console.warn("Firebase profile update failed:", e);
    }
    
    // Apply to mock state if it's a mock user
    if (user.uid.startsWith('u_')) {
      setUsers((prev) =>
        prev.map((u) => (u.uid === user.uid ? { ...u, ...updates } : u))
      );
      setUser((prev) => ({ ...prev, ...updates }));
    }
    setProfileVersion((v) => v + 1);
  }, [user]);

  const updatePasswordMock = useCallback(async (currentPass, newPass) => {
    if (!user) return;
    try {
      if (auth.currentUser && auth.currentUser.uid === user.uid) {
        await updatePassword(auth.currentUser, newPass);
        return; // Firebase success
      }
    } catch (e) {
      console.warn("Firebase password update failed:", e);
      throw e; 
    }
    
    // Mock user logic
    if (user.uid.startsWith('u_')) {
      if (user.password !== currentPass) throw new Error('Current password is incorrect.');
      setUsers((prev) =>
        prev.map((u) => (u.uid === user.uid ? { ...u, password: newPass } : u))
      );
    }
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
