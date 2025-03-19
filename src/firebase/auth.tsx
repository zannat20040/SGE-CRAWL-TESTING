import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import auth from '../../firebase.config';

export const useAuth = () => {
  // Allow `user` to be either `null` or a Firebase `User`
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Current user can be `null` or a `User` object
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup subscription
  }, []);

  return { user, loading };
};
