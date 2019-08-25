export const TOGGLE_USER="TOGGLE_USER"
export interface toggleUserAction{
    type:typeof TOGGLE_USER,
}

export interface UserInterface{
    isLoggedIn:boolean;
}


export type UserActionTypes= toggleUserAction
