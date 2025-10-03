import React from 'react'
import Card from './Card'

// The 'Cards' component receives 'users' (an array of user objects) and 'handelRemove' (a function) as props from 'App.jsx'.
function Cards({users , handelRemove}) {
  return (
    <div className="w-full max-h-110 overflow-auto p-10 flex flex-wrap justify-center">
      {/* It maps over the 'users' array to render a 'Card' component for each user item. */}
      {users.map((item, index)=>{
        // For each 'Card', it passes the 'handelRemove' function, the 'index' of the user as 'id', and the individual 'item' (user object) as props.
        // The 'key' prop is required by React to efficiently manage the list elements.
        return <Card handelRemove={handelRemove} id={index} user={item} key={index}/>
      })}
    </div>
  )
}

export default Cards