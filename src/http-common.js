import axios from "axios"


export default axios.create ({
    baseURL: "http://66.97.41.26:8001/",
    headers: {
        "Content-type": "application/json"
    }
});