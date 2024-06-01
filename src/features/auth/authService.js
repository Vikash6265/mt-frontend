import axios from "axios"


const registerUser = async (formData) =>{
    const response = await axios.post("https://mt-backend-8s1s.onrender.com/api/user" , formData)
    localStorage.setItem("user", JSON.stringify(response.data));
    console.log(response.data);
    return response.data;
}

const loginUser = async (formData) =>{
    const response = await axios.post("https://mt-backend-8s1s.onrender.com/api/user/login" , formData)
    localStorage.setItem("user" , JSON.stringify(response.data));
    console.log(response.data);
    return response.data;
}

const authservice = {
    registerUser,
    loginUser,
}

export default authservice;