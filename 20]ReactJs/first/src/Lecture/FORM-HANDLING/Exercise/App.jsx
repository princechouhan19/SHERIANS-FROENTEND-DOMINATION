// How does a React application use component-based architecture and state management to build a dynamic user card interface with a data entry form?


import React, {useState} from 'react'
import Cards from './Components/Cards'
import Form from './Components/Form'

function App() {

  // useState is a React hook that lets you add state to functional components.
  // 'users' is the state variable that holds an array of user objects.
  // 'setUsers' is the function used to update the 'users' state.
  const [users, setUsers] = useState([]);

  // 'handelFormSubmitData' is a function passed as a prop to the 'Form' component.
  // When the form is submitted, it receives the 'data' (name, email, image URL) from the 'Form' component.
  // It then updates the 'users' state by creating a new array that includes all the existing users plus the new 'data'.
  const handelFormSubmitData = (data)=>{
    setUsers([...users, data]);
  }

  // 'handelRemove' is a function passed as a prop to the 'Cards' component.
  // It receives the 'id' (index) of the user to be removed from the 'Card' component (via 'Cards').
  // It uses the 'filter' method to create a new array that excludes the user at the specified index,
  // and then updates the 'users' state with this new, filtered array.
  const handelRemove = (id)=>{
    setUsers(()=> users.filter((item, index)=> index!==id));
  }

  return (
    <div className='Appw-full h-screen flex justify-center items-center bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600'>
        <div className='container m-10'>
            {/* The 'Cards' component receives the 'users' array and the 'handelRemove' function as props from the 'App' component. */}
            <Cards handelRemove={handelRemove} users={users}/>
            {/* The 'Form' component receives the 'handelFormSubmitData' function as a prop from the 'App' component. */}
            <Form handelFormSubmitData={handelFormSubmitData}/>
        </div>
    </div>
  )
}

export default App