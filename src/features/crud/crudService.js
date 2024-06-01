import axios from "axios";

const getData = async() =>{
    const response = await axios.get("https://mt-backend-8s1s.onrender.com/api/crud/")
    return response.data;
}

const addData = async(title) =>{
    const response = await axios.post("https://mt-backend-8s1s.onrender.com/api/crud/",title);
    return response.data;
}

const removeData = async(_id) =>{
    const response = await axios.delete("https://mt-backend-8s1s.onrender.com/api/crud/"+_id)
    return response.data;
}

const updatedData = async(updateItem) =>{
    const response = await axios.put("https://mt-backend-8s1s.onrender.com/api/crud/" + updateItem._id,updateItem)
    return response.data;
}

export const crudService = {
    addData,
    getData,
    removeData,
    updatedData,
} 