
import {useState} from 'react';

export const useHandleUsers = () => {

    const [allUsers, setAllUsers] = useState([])
    const [loggedInUser, setLoggedInUser] = useState()

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://panorbit.in/api/users.json');
            const data = await response.json();
            setAllUsers(data.users)
        } catch (error) {
            console.log(error + "fetchUsers");
        }
    }

    const fetchUserById = async (id)=>{
        try {
            const response = await fetch('https://panorbit.in/api/users.json');
            const data = await response.json();
            setAllUsers(data.users)
            const result = data.users.find(user => user.id == id)
            setLoggedInUser(result);
        } catch (error) {
            console.log(error + "fetchUserById")
        }
    }

    return {fetchUsers, allUsers, fetchUserById, loggedInUser}
}