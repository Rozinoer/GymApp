import {atom} from 'recoil'

const authAtom = atom({
    key: 'authAtom',
    default: {
        auth: null,
        isAuth: false
    }
})

export default authAtom