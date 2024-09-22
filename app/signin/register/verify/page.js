'use client'

import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useAppContext } from '../../../context/AppContext';
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import { useMessage } from '../../../context/MessageContext';

export default function SignUpComponent() {
  const router = useRouter();
  const { setSuccessMessage } = useMessage();
  const { theme, isOpen } = useAppContext();
  const [verified, setVerified] = useState(false)
  const [code, setCode] = useState("")
  const email = useSearchParams().get('email');
  const [error, setError] = useState("");  // Add error state

  const logoClass2 = theme === 'dark' ? 'https://ducaqjqbmh7lv.cloudfront.net/mysite/inverted_minilogo1.png' : 'https://ducaqjqbmh7lv.cloudfront.net/mysite/minilogo1.png';
  const themeClass2 = theme === 'dark' ? 'text-white' : 'text-black';
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (window.confirm("Your verification code has expired. Press OK to return to the sign-up page.")) {
        router.push('/signin/register');
      }
    }, 180000); // 5000ms = 5 seconds, adjust the timeout duration as needed

    return () => clearTimeout(timeoutId); // Cleanup the timeout if the component unmounts
  }, [router]);

  const handleVerify = async () => {
  event.preventDefault();
  try {
    const Email = email; // Replace with the actual email input state
    const Code = code;  // Replace with the actual password input state
    const response = await axios.post(
      'http://3.226.46.93:8000/accounts/verify-code/',
      {
        email: Email,
        code: Code
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    if (response.status === 201) {
      const data = response.data;
      setSuccessMessage("Your account has been created! You may sign in.");
      router.push('/signin');
    } else {
      console.error('Error fetching protected data:', response.statusText);
    }
  } catch (err) {
    const errorResponse = JSON.parse(err.request.response);
    const errorMessage = errorResponse.detail ? errorResponse.detail : "An unknown error occurred";
    setError(errorMessage);
    console.error('Error:', err);
  }
};

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col px-6 mt-10 lg:px-8 relative">
        {!verified ? (
          <>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
            <img
              alt="Your Company"
              src={logoClass2}
              className="mx-auto h-6 w-auto"
            />
            <h2 className={`md:mt-10 mt-4 text-xl text-center leading-9 tracking-tight text-gray-900 ${themeClass2}`}>
              Please enter the vefrification code sent to your Email
            </h2>
          </div>
          {error && (
            <div className="flex mt-4 text-red-600 text-sm justify-center">
              {error}
            </div>
          )}
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Verification Code
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={handleVerify}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Verify
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account?{' '}
              <Link href="/signin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Sign in here
              </Link>
            </p>
          </div>
          </>
          ) : (
          <>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm justify-center relative">
              <img
                alt="Your Company"
                src={logoClass2}
                className="mx-auto h-6 w-auto"
              />
              <h2 className={`md:mt-10 mt-4 text-xl text-center leading-9 tracking-tight text-gray-900 ${themeClass2}`}>
                Your account has been created!
              </h2>
            </div>
            <p className="mt-10 text-center text-sm text-gray-500">
              Please{' '}
              <Link href="/signin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Sign in here
              </Link>
            </p>
          </>
        )}
      </div>
    </>
  );
}
