'use client'

import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useAppContext } from '../../context/AppContext';
import { useState } from "react";
import axios from 'axios';

export default function SignUpComponent() {
  const router = useRouter();
  const { theme, isOpen } = useAppContext();
  const logoClass2 = theme === 'dark' ? 'https://ducaqjqbmh7lv.cloudfront.net/mysite/inverted_minilogo1.png' : 'https://ducaqjqbmh7lv.cloudfront.net/mysite/minilogo1.png';
  const themeClass2 = theme === 'dark' ? 'text-white' : 'text-black';
  const handleBackClick = () => {
    router.back(); // Navigates to the previous page
  };

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState("");  // Add error state

  const isPasswordMatch = password === confirmPassword;
  const isPasswordLengthValid = password.length > 7;
  const hasPasswordNumberAndUpper = /[A-Z]/.test(password) && /[1234567890]/.test(password);

  const handleUsernameChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
    
    // Regular expression to validate email
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    setIsUsernameValid(usernameRegex.test(newUsername));
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    
    // Regular expression to validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(newEmail));
  };

const handleRegister = async () => {
  event.preventDefault();
  try {
    const Username = username;
    const Email = email; // Replace with the actual email input state
    const Password = password;  // Replace with the actual password input state
    const response = await axios.post(
      'http://3.226.46.93:8000/accounts/user-login/',
      {
        username: Username,
        email: Email,
        password: Password
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(response)
    if (response.status === 200) {
      const data = response.data;
      console.log('Protected data:', data);
      router.push(`/signin/register/verify?email=${encodeURIComponent(email)}`);
    } else {
      console.error('Error fetching protected data:', response);
    }
  } catch (err) {
    const errorResponse = JSON.parse(err.request.response);
    const errorMessage = errorResponse.email ? errorResponse.email[0] : "An unknown error occurred";
    setError(errorMessage);
    console.error('Error:', err.request.response);
  }
};

  return (
    <div className="flex min-h-full flex-1 flex-col px-6 mt-10 lg:px-8 relative">
      {/* Back Arrow Button */}
      <button
        type="button"
        onClick={handleBackClick}
        className="absolute top-4 left-4 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        <ArrowLeftIcon className="h-6 w-6" />
        <span className="sr-only">Back</span>
      </button>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <img
          alt="Your Company"
          src={logoClass2}
          className="mx-auto h-6 w-auto"
        />
        <h2 className={`md:mt-10 mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 ${themeClass2}`}>
          Create your account
        </h2>
      </div>
      {error && (
        <div className="flex mt-4 text-red-600 text-sm justify-center">
          {error}
        </div>
      )}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" className="space-y-2">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="username"
                required
                autoComplete="username"
                className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handleUsernameChange}
              />
            </div>
            <p className="text-sm text-red-500">
            {!isUsernameValid ? 'You may only use numbers and/or letters' : '\u00A0'}
            </p>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
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
                onChange={handleEmailChange}
              />
            </div>
            <p className="text-sm text-red-500">
            {!isEmailValid ? 'Please enter a valid email address' : '\u00A0'}
            </p>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="new-password"
                className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-gray-900">
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                autoComplete="new-password"
                className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <ul class="space-y-2">
            <li class="flex items-center">
              <svg class={`h-6 w-6 flex-none fill-green-100 stroke-green-500 stroke-2 ${!isPasswordMatch ? 'fill-red-100 stroke-red-500' : ''}`} stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                {isPasswordMatch ? <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" /> : <path d="M7 7L17 17M7 17L17 7" fill="none"/>}
              </svg>
              <p className="ml-2 mt-2 text-xs text-gray-800 min-h-[1.5rem]">
                Passwords should match
              </p>
            </li>
            <li class="flex items-center">
              <svg class={`h-6 w-6 flex-none fill-green-100 stroke-green-500 stroke-2 ${!isPasswordLengthValid ? 'fill-red-100 stroke-red-500' : ''}`} stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                {isPasswordLengthValid ? <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" /> : <path d="M7 7L17 17M7 17L17 7" fill="none"/>}
              </svg>
              <p className="ml-2 mt-2 text-xs text-gray-800 min-h-[1.5rem]">
                Password must contain atleast 8 characters
              </p>
            </li>
            <li class="flex items-center">
              <svg class={`h-6 w-6 flex-none fill-green-100 stroke-green-500 stroke-2 ${!hasPasswordNumberAndUpper ? 'fill-red-100 stroke-red-500' : ''}`} stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                {hasPasswordNumberAndUpper ? <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" /> : <path d="M7 7L17 17M7 17L17 7" fill="none"/>}
              </svg>
              <p className="ml-2 mt-2 text-xs text-gray-800 min-h-[1.5rem]">
                Password must contain atleast 1 uppercase letter and 1 number
              </p>
            </li>
          </ul>
          <div>
          <button
            onClick={handleRegister}
            type="submit"
            className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
              !isPasswordMatch || !isPasswordLengthValid || !hasPasswordNumberAndUpper || !isEmailValid || !isUsernameValid
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-indigo-600'
            }`}
            disabled={!isPasswordMatch || !isPasswordLengthValid || !hasPasswordNumberAndUpper || !isEmailValid || !isUsernameValid}
          >
              Register
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
    </div>
  );
}
