import React from 'react'

import { connect } from 'react-redux'
import * as LoginActions from '../actions/LoginAction'
import * as EmployeeAction from '../actions/EmployeeAction'
import LoginComponent from '../login/LoginComponent'
 class LoginContainer extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    // componentDidMount
render(){
    return(
        <LoginComponent {...this.props}>

        </LoginComponent>
    )
}
}


const mapStateToProps = (state, ownProps) => ({   
   user :state.login.user,
    employeeList : state.employee.employeeList,
   
  });
  
  
  const mapDispatchToProps = (dispatch) => ({
     
    setEmployees: (employees) => dispatch(EmployeeAction.setEmployees(employees)),
    setUser:(user)=>dispatch(LoginActions.setUser(user))
    
  })
  
  export default connect (mapStateToProps, mapDispatchToProps) (LoginContainer)
  