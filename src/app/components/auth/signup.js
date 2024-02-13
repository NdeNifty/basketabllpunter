"use client";
import React from "react";

const Signup = () => {
  const handleModalClose = () => {
    // Call the onClose prop to close the modal
    onClose();
  };
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-4 lg:px-6">
        <main className="mx-auto max-w-lg">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
              Sign up Now
            </h1>

            <p className="mx-auto mt-2 max-w-md text-center text-gray-500">
              Create an account to access basketbal betting tips for over 400
              different leagues and thousands of games
            </p>
            <form className="mt-2 grid grid-cols-6 gap-6 space-y-4 rounded-lg p-4 shadow-lg">
              <div className="col-span-6 sm:col-span-3 mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>

                <input
                  type="text"
                  id="FirstName"
                  name="first_name"
                  className="mt-1 w-full  p-2  rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  placeholder="Enter first name"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                 
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>

                <input
                  type="text"
                  id="LastName"
                  name="last_name"
                  className="mt-1 w-full  p-2  rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  placeholder="Enter last name"
                />
              </div>

              <div className="col-span-6">
                <label
                 
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Email{" "}
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-1 w-full rounded-md border-gray-200 p-2 pe-12 bg-white text-sm text-gray-700 shadow-sm"
                  placeholder="Enter email"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Password{" "}
                </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  className="mt-1 w-full rounded-md p-2 pe-12 border-gray-200 bg-white  text-gray-700 shadow-sm"
                  placeholder="Enter password"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                 
                  className="block text-sm font-medium text-gray-700"
                >
                  Password Confirmation
                </label>

                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  className="mt-1 w-full  p-2 pe-12 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  placeholder="Repeat Password"
                />
              </div>

              {/* <div className="col-span-6">
                <label for="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />

                  <span className="text-sm text-gray-700">
                    I want to receive emails about events, product updates and
                    company announcements.
                  </span>
                </label>
              </div> */}

              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  By creating an account, you agree to our
                  <a href="#" className="text-gray-700 underline">
                    {" "}
                    terms and conditions{" "}
                  </a>
                  and
                  <a href="#" className="text-gray-700 underline">
                    privacy policy
                  </a>
                  .
                </p>
              </div>

              <div className="col-span-6 sm:col-span-6">
                <div className="flex w-full">
                  <div className="flex-grow">
                    <button className="w-full shrink-0 rounded-md border border-blue-600 bg-blue-600 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                      Create an account
                    </button>
                  </div>
                  <div className="flex-grow">
                    <button
                      className="w-full rounded-md border border-red-600 bg-red-600 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-red-500"
                      onClick={handleModalClose}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
                {/* <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <a href="#" className="text-gray-700 underline">
                    Log in
                  </a>
                  .
                </p>
                 */}
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};
export default Signup;
