import axios from "axios";

// This creates a custom instance of the Axios library.
const instance = axios.create({
    // Sets a base URL for all requests made using this instance.
    // This avoids having to write the full URL every time.
    baseURL: "https://fakestoreapi.com",
});

// Exports the configured Axios instance for use in other files, like `Show.jsx` and `Service.jsx`.
export default instance;