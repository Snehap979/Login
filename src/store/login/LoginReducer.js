import * as LoginActionConstants from './LoginActionConstants'

const initialState = {
   user:{},
}

const LoginReducer = (state=initialState,action)=>{
   switch(action.type){
     
       case LoginActionConstants.SET_USER:
        console.log("action.data",action.data)
           return {...state,user:action.data}
      
       default :
            return state
    }
}

export default LoginReducer;