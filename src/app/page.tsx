import { useState } from "react";

export default async function Home() {

  return (
    <>
      {/* Create a form where user will enter his username then redirect to create page */}
      <main className="flex justify-center items-center min-h-screen from-blue-500 to-green-400 bg-gradient-to-r 
      ">
        <div className="flex flex-col justify-center items-center">
          <form
            className="flex justify-center items-center border-2 bg-white border-gray-800 rounded-full focus-within:border-gray-50 gap-2"
            action={`/create`}
            method="GET"
          >
            <input
              className=" rounded-full p-2 bg-none focus:outline-none text-blue-500 text-lg font-bold"
              type="text"
              placeholder="Enter your username"
            />
            <button
              className="rounded-full p-2 bg-blue-500 text-white font-bold focus:outline-none hover:bg-blue-400 transition duration-300 ease-in-out m-1"
              type="submit"
            >
              Create
            </button>
          </form>
        </div>

      </main>

    </>
  );
}
