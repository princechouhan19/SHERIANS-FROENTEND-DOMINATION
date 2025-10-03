import React from 'react'
import { useForm } from 'react-hook-form'

// The 'Form' component receives the 'handelFormSubmitData' function as a prop from 'App.jsx'.
function Form({handelFormSubmitData}) {

  // 'useForm' is a hook from the 'react-hook-form' library.
  // 'register' is used to register input fields with the hook.
  // 'handleSubmit' is a function that handles form submission.
  // 'reset' is a function that resets the form fields after submission.
  const {register, handleSubmit , reset} = useForm()

  // 'handelFormSubmit' is a function that is called by 'handleSubmit' from react-hook-form.
  // It receives the form 'data' (an object with name, email, and image).
  // It then calls the 'handelFormSubmitData' function (from 'App.jsx') to pass the data up to the parent.
  // Finally, it calls 'reset()' to clear the form fields for the next entry.
  const handelFormSubmit = (data) => {
    handelFormSubmitData(data);
    reset();
  }

  return (
    <div className="w-full flex justify-center mt-8">
        
      {/* The 'onSubmit' event is handled by 'handleSubmit' from the hook, which then calls our 'handelFormSubmit' function. */}
      <form onSubmit={handleSubmit(handelFormSubmit)} className="bg-white shadow-md rounded-xl p-6 w-80 flex flex-col gap-4 border border-gray-200">

        {/* The {...register('name')} syntax registers this input field to the form hook under the name 'name'. */}
        <input {...register('name')} type="text" placeholder="Enter your name" className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"/>

        {/* This input is registered under the name 'email'. */}
        <input {...register('email')} type="email" placeholder="Enter your email" className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" />

        {/* This input is registered under the name 'image'. */}
        <input {...register('image')} type="text" placeholder="Enter image URL" className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"/>

        <button type="submit" className="w-full mt-2 bg-sky-500 hover:bg-sky-600 text-white text-sm py-2 rounded-lg transition-all">Submit</button>

      </form>
    </div>
  )
}

export default Form