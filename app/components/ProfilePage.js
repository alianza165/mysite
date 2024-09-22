import { useSession, signOut } from 'next-auth/react';
import { useEffect } from 'react';

export default function Profile() {
  const { data: session } = useSession();
  console.log(session);

  useEffect(() => {
    if (session?.error === "EMAIL_ALREADY_REGISTERED_GOOGLE" || session?.error === "EMAIL_ALREADY_REGISTERED_CREDENTIALS") {
      signOut();  // Sign out the user if the error is present
    }
  }, [session]);

  if (session?.error === "GOOGLE_SIGNIN_FAILED" || session?.error === "EMAIL_ALREADY_REGISTERED_CREDENTIALS") {
    return (
      <div>
        <p>This email is already in use with another login method. Please use the correct login method.</p>
      </div>
    );
  }

  if (session?.isAuthenticated) {
    return (
      <div>
        <p>Welcome, {session.user?.name}!</p>
        {/* Your authenticated user content here */}
      </div>
    );
  }

  return (
    <div>
      <p>You are not signed in.</p>
      {/* Your unauthenticated user content here */}
    </div>
  );
}






