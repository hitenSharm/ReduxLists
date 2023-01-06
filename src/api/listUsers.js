import axios from 'axios';

const url="https://reqres.in/api/users?page=1";

export const listUsers = async () =>{
    try {
        var res=await axios.get(url);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}