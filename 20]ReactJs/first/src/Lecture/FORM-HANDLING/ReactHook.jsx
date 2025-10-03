import React from 'react'
import { useForm } from 'react-hook-form';

function ReactHook() {
    const {register , handleSubmit} = useForm();
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">

            <form onSubmit={handleSubmit(data => console.log(data))} className="flex flex-col gap-4 w-full max-w-md p-6 rounded-md bg-white shadow-md">

                <h2 className="text-2xl font-semibold text-gray-700 text-center">React Hook Form</h2>

                <input {...register('name')} className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-lg" placeholder="Full Name" type="text" />

                <input {...register('email')} className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-lg" placeholder="Email" type="email" />

                <button className="w-full py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition">Submit</button>

            </form>

        </div>
    )
}

export default ReactHook
