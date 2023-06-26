import jwtDecode from 'jwt-decode';
import { getUserByUserName } from '../../services/User/callers';

const SET_NAME = 'set_name'
const SET_PHONE = 'set_phone'

const defaultUser = {
    username: 'username',
    fullName: 'User Full Name',
    email: 'username@gmail.com',
    phone: '0123456789',
    selectedCombo: [],
    selectedItems: [],
    addresses: []
}

const initState =  getInitState()

function getInitState() {
    const token = localStorage.getItem('token');

    if(!token) return defaultUser

    // const decodedToken = jwtDecode(token);

    // const data = getUserByUserName(decodedToken.username)
    // console.log(data)

    // return data
    return defaultUser
}

const setName = payload => ({
    type: SET_NAME,
    payload: payload,
})

const setPhone = payload => ({
    type: SET_PHONE,
    payload: payload
})

const reducer = (state, action) => {
    switch(action.type) {
        case SET_NAME:
            return {
                ...state,
                fullName: action.payload
            }
        case SET_PHONE:
            return {
                ...state,
                phone: action.payload
            }
        default:
            throw new Error('Invalid Action')
    }
}

export {initState, setName, setPhone}
export default reducer