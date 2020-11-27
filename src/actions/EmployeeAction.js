import * as  EmployeeActionConstants from '../store/employee/EmployeeActionConstant'
export const setEmployees = (employees) => {
    
    return async (dispatch)=>{
      dispatch(setEmployeesCompleted(employees));
    }
    
  }
  
  export const setEmployeesCompleted = (employees) =>{
  
    return {
        type:EmployeeActionConstants.SET_EMPLOYEES,
        data:employees
    }
  }
