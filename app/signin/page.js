'use client';

import Image from 'next/image';
import { useAppContext } from '../context/AppContext';
import { signIn, useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import { useMessage } from '../context/MessageContext';

export default function Example() {
  const { data: session } = useSession();
  console.log(session)
  const router = useRouter();
  const { message, messageType, clearMessage } = useMessage();
  console.log(message)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");  // Add error state
  const { theme, isOpen } = useAppContext();

  const themeClass = theme === 'dark' ? 'bg-black' : 'bg-white';
  const themeClass2 = theme === 'dark' ? 'text-white' : 'text-black';
  const logoClass = theme === 'dark' ? 'https://ducaqjqbmh7lv.cloudfront.net/mysite/github_dark.png' : 'https://ducaqjqbmh7lv.cloudfront.net/mysite/github.svg';
  const logoClass2 = theme === 'dark' ? 'https://ducaqjqbmh7lv.cloudfront.net/mysite/inverted_minilogo1.png' : 'https://ducaqjqbmh7lv.cloudfront.net/mysite/minilogo1.png';
  const marginLeft = isOpen ? 'md:ml-60' : 'md:ml-10';

  useEffect(() => {
    if (session?.isAuthenticated) {
      router.push('/');
    }
  }, [session, router]);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        clearMessage();
      }, 10000); // Clear the message after 5 seconds

      return () => clearTimeout(timer); // Clear the timer if the component unmounts
    }
  }, [message, clearMessage]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");  // Clear previous errors

    const result = await signIn('google', {
      redirect: false, // Prevent automatic redirect
    });

    if (result?.error) {
      setError("GoogleSignInFailed");  // Set a custom error message
    } else {
      console.log('Google sign in successful:', result);
      router.push('/');
    }
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    setError("");  // Clear previous errors
    const result = await signIn('credentials', {
      redirect: false,
      email: email, // Use the state variables directly
      password: password,
    });

    if (result?.error) {
      setError(result.error);  // Set error message from the result
    } else {
      console.log('Sign in successful:', result);
      // Redirect to the homepage or another page
      router.push('/');
    }
  };

  useEffect(() => {
    if (session?.error === "GOOGLE_SIGNIN_FAILED") {
      setError(session.error);
      signOut({ redirect: false }); // Sign out the user after setting the error
    }
  }, [session]);

  useEffect(() => {
    if (session?.error) {
      console.log(session.error)
      setError(session.error);
      signOut({ redirect: false }); // Sign out the user after setting the error
    }
  }, [session]);


  return (
    <>
      <div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-10">
          <img
            alt="Your Company"
            src={logoClass2}
            className="mx-auto h-6 w-auto"
          />
          <h2 className={`md:mt-10 mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 ${themeClass2}`}>
            Sign in to your account
          </h2>
        </div>
        {message && (
          <p className={messageType === 'success' ? 'text-green-500 justify-center flex' : 'text-red-500 justify-center flex'}>
            {message}
          </p>
        )}

        <div className="md:mt-10 mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className={`block text-sm font-medium leading-6 text-gray-900 ${themeClass2}`}>
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className={`block text-sm font-medium leading-6 text-gray-900 ${themeClass2}`}>
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                onClick={handleSignIn}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
            <div>
              {error && (
                <div className="flex mt-4 text-red-600 text-sm justify-center">
                  {error === "CredentialsSignin"
                    ? "No active account found with the given credentials."
                    : error === "GOOGLE_SIGNIN_FAILED"
                    ? "This email is already in use with another login method. Please use the correct login method."
                    : error === "Your session has expired, please sign in again."
                    ? "No scene"
                    : error}
                </div>
              )}

              {/* Additional UI elements */}
            </div>
          </form>

          <p className="md:mt-10 mt-4  text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link href="/signin/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign-Up
            </Link>
          </p>
        </div>
        <div className="flex items-center sm:mx-auto sm:w-full sm:max-w-sm md:mt-10 mt-4">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-4 text-gray-500">Or Continue With</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>
          <div className={`flex items-center sm:mx-auto sm:w-full sm:max-w-sm md:mt-10 mt-4 mb-4 ${themeClass2}`}>
            <button
              onClick={handleSubmit}
              type="submit"
              className="border-2 mr-10 flex w-full justify-center rounded-md px-3 py-1.5 text-sm leading-6 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-100"
            >
            <Image src="https://ducaqjqbmh7lv.cloudfront.net/mysite/google.png" width={40} height={40} className='px-2' />
              Google
            </button>
            <button
              type="submit"
              className="border-2 flex w-full justify-center rounded-md px-3 py-1.5 text-sm leading-6 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-100"
            >
              <Image src={logoClass} width={40} height={40} className='px-2' />
              GitHub
            </button>
          </div>
        </div>

    </>
  )
}
