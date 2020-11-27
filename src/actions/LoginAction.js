import * as  LoginActionConstants from '../store/login/LoginActionConstants'
export const setUser=(user)=>{
    console.log("user",user)
    return async (dispatch) => {
        try {
           
            dispatch({ type: LoginActionConstants.SET_USER, data: user })
            
            }
         catch (error) {
            console.log(error);
        }
    }
}