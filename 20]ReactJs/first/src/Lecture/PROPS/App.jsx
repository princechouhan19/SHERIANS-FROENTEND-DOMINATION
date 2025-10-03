import React from "react";
import Props from "./Lecture/PROPS/Props";

function App() {

    const data = [
        { name: "John Singh", Profession: "Engineer", image: "https://images.unsplash.com/photo-1756827739549-48dc793b53b0?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false },
        { name: "Alice Bhen", Profession: "Doctor", image: "https://images.unsplash.com/photo-1756715743347-02d8cd71c62b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false },
        { name: "Bob Chouhan", Profession: "Teacher", image: "https://plus.unsplash.com/premium_photo-1755706181022-a7136292fea7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false },
        { name: "Charlie jain", Profession: "Designer", image: "https://images.unsplash.com/photo-1753955671130-49e2a2067595?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false },
    ];

    const [realdata, setRealData] = React.useState(data);

    const handleFriendsButton = (cardindex) => {
        setRealData((previous) => {
            return previous.map((item, index) => {
                if (index === cardindex) {
                    return { ...item, friends: !item.friends };
                }
                return item; // ✅ FIX: must return item for other indices
            });
        });
    };

    return (
        <div className="w-full h-screen p-4 bg-zinc-300 flex gap-4 items-center justify-center">
            {realdata.map((item, index) => (
                <Props key={index} index={index} handleClick={handleFriendsButton} values={item} />
            ))}
        </div>
    );
}

export default App;
