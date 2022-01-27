import { DB } from '../../db'
import { LOAD_CLIENTS, ADD_CLIENT, EDIT_CLIENT, ADD_EX, LOAD_EX } from "../types"

export const loadClients = () => {
    return async dispatch => {
        const clients = await DB.getClients()
        dispatch({
            type: LOAD_CLIENTS,
            payload: clients
        })
    }
}

export const loadEx = (id) => {
    return async dispatch => {
        const ex = await DB.getEx(id)
        dispatch({
            type: LOAD_EX,
            payload: ex
        })
    }
}

export const addClient = (data) => async dispatch => {
    const id = await DB.createClient(data)
    data.id = id
    dispatch ({
        type: ADD_CLIENT,
        payload: data
    })
}
export const editClient = (data) => {
    return {
        type: EDIT_CLIENT,
        payload: data
    }
}
export const addClientEx = (data) => async dispatch => {
    const id = await DB.createEx(data)
    data.id = id
    dispatch ({
        type: ADD_EX,
        payload: data,
    })
}