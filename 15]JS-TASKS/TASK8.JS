// CREATE A SEARCH BAR THAT DISPLAYS LIVE SEARCH RESULTS AS USER TYPE, UPDATING THE RESULTS WITHOUT REQUIRING A FULL PAGE RELOAD. 

var data = [
    { name: "Prince ", src: "https://images.unsplash.com/photo-1662659511971-bcb9d2dc6332?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1hbGUlMjBtb2RlbCUyMHBvcnRyYWl0fGVufDB8MXw0fHx8MA%3D%3D" },
    { name: "Ronak", src: "https://images.unsplash.com/photo-1655506207889-4f130f49797f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fG1hbGUlMjBtb2RlbCUyMHBvcnRyYWl0fGVufDB8MXw0fHx8MA%3D%3D" },
    { name: "Umesh", src: "https://images.unsplash.com/photo-1622519407650-3df9883f76a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D" },
    { name: "Pooja", src: "https://images.unsplash.com/photo-1636393915614-60fc2f0634f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZlbWFsZSUyMG1vZGVsJTIwcG9ydHJhaXR8ZW58MHwxfDR8fHww" },
    { name: "Abhinav", src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbGUlMjBwb3J0cmFpdHxlbnwwfDF8MHx8fDA%3D" },
    { name: "Dipesh", src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbGUlMjBwb3J0cmFpdHxlbnwwfDF8MHx8fDA%3D" },
    { name: "Mehul", src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbGUlMjBwb3J0cmFpdHxlbnwwfDF8MHx8fDA%3D" },
    { name: "Lokesh", src: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1hbGUlMjBwb3J0cmFpdHxlbnwwfDF8MHx8fDA%3D" },
    { name: "Dipak", src: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1hbGUlMjBwb3J0cmFpdHxlbnwwfDF8MHx8fDA%3D" }
];

// Function to display people
function displayPeople(people) {
    var pers = "";
    people.forEach(function(elem) {
        pers += `<div class="person">
            <img class="avatar" src="${elem.src}" alt="${elem.name}">
            <h3>${elem.name}</h3>
        </div>`;
    });
    document.querySelector(".people").innerHTML = pers;
}

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Initial display of all people
    displayPeople(data);

    // Search functionality
    document.querySelector("#searchInput").addEventListener("input", function(e) {
        var searchTerm = e.target.value.toLowerCase();
        var filteredData = data.filter(function(person) {
            return person.name.toLowerCase().includes(searchTerm);
        });
        displayPeople(filteredData);
    });
});