import {Dispatch} from 'redux'
import {TOGGLE_USER,toggleUserAction} from './user.types'

export const toggleUser = () => (dispatch:Dispatch) => {
    dispatch<toggleUserAction>({
        type:TOGGLE_USER
    })
}