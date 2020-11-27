import * as EmployeeActionConstants from './EmployeeActionConstant'

const initialState = {
   employeeList:[]
}

const EmployeeReducer = (state=initialState,action)=>{
  
   switch(action.type){
      
       case EmployeeActionConstants.SET_EMPLOYEES:
         
           return {...state,employeeList:action.data}
      
       default :
            return state
    }
}

export default EmployeeReducer;