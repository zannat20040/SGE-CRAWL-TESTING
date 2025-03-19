'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/firebase/auth'; // Custom hook for Firebase authentication

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth(); // Assume useAuth provides user and loading state
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      // Redirect to login page if no user
      router.push('/logIn');
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while checking auth state
  }

  if (!user) {
    return null; // Render nothing while redirecting
  }

  return <>{children}</>; // Render children if user is authenticated
};

export default PrivateRoute;
