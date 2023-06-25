const SET_NAME = 'set_name'
const SET_PHONE = 'set_phone'


const initState = {
    username: 'pokemon',
    fullName: 'Doan Gia Bao',
    email: 'doangiabao@gmail.com',
    phone: '0834002706',
    selectedCombo: [],
    selectedItems: [],
    addresses: []
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