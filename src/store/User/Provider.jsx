import { useEffect, useReducer} from "react";
import Context from "./Context";
import reducer, {setInitState} from "./Reducer";
import jwtDecode from 'jwt-decode';
import axios from 'axios';

const USER_API = 'http://localhost:8080/user'

const defaultUser = {
    username: 'username',
    fullName: 'User Full Name',
    email: 'username@gmail.com',
    phone: '0123456789',
    selectedCombo: [],
    selectedItems: [],
    addresses: []
}

function Provider({children}) {
    const [state, dispatch] = useReducer(reducer, {})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');

                if(!token) dispatch(setInitState(defaultUser))
            
                const decodedToken = jwtDecode(token);
            
                await axios.get(`${USER_API}/${decodedToken.username}`)
                                    .then(res => res.data)
                                    .then(data => dispatch(setInitState(data.user)))
                                    .catch(error => {throw new Error(error)})
            }
            catch(error)
            {
                console.error("Error when fetching: " + error);
            }
        }

        fetchData()
    }, [])

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider

