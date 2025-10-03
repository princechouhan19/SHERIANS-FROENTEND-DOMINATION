// This file sets up the React Context API to provide global state.
// createContext is a function from React used to create a Context object.
import { createContext, useState } from "react";

// The 'userContext' is created here. This is the object that will be imported and used by components to access the shared data.
export const userContext = createContext();

// This component is the 'Provider'. It holds the state and provides it to all its children.
// The 'props' object is used to access 'props.children', which represents the components wrapped by this provider.
const Context = (props) => {
    // useState is a React Hook that creates a state variable 'users' and a function 'setUsers' to update it.
    // The initial state is a hardcoded array of user objects. This data is the global state.
    const [users, setUsers] = useState([
        { id: 1, name: "Sherina", email: "Sherina@gmail.com" , title:"CEO" , description:"Sherina is the CEO of our company, leading with vision and dedication."},
        { id: 2, name: "Akhila", email: "Akhila@gmail.com" , title:"CTO" , description:"Akhila is the CTO, driving technological innovation and excellence."},
        { id: 3, name: "Pooja", email: "Pooja@gmail.com" , title:"CFO" , description:"Pooja is the CFO, managing our financial strategies and growth."},
        { id: 4, name: "Aiswarya", email: "Aiswarya@gmail.com" , title:"COO" , description:"Aiswarya is the COO, ensuring operational efficiency and effectiveness."},
        { id: 5, name: "Anju", email: "Anju@gmail.com" , title:"CMO" , description:"Anju is the CMO, leading our marketing efforts and brand strategy."},
    ]);

    // The Provider component is the core of the Context API.
    // The 'value' prop is where we pass the state ('users') and the state updater function ('setUsers').
    // Any component wrapped by this Provider (its children) can now access this 'value' using useContext.
    return <userContext.Provider value={{ users, setUsers }}>
        {props.children}
    </userContext.Provider>;
};


export default Context;