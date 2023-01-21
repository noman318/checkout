import axios from "axios";
export default axios.create({
    // baseURL:"http://localhost:7899/api/",
    baseURL:"http://localhost:5000/event/",
    headers:{
        "Content-type":"application/json"
    }
})