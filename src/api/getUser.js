import axios from 'axios';

const url="https://reqres.in/api/users/";

export const getUser = async(id) =>{
    try {
        var user=await axios.get(`${url}+${id}`);
        return user.data;
    } catch (error) {
        console.log(error);
    }
}