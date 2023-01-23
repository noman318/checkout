import axios from "axios";
export const evnethttp=axios.create({
    baseURL:"http://localhost:5000/event/",
    headers:{
        "Content-type":"application/json"
    }
})
export const loginhttp=axios.create({
    baseURL:"http://localhost:7899/api/",
    headers:{
        "Content-type":"application/json"
    }
})
