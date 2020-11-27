import React from 'react'
import DashboardComponent from './DashboardComponent'
import { connect } from 'react-redux'
class DashboardContainer extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
render(){
  
    return(
        <DashboardComponent {...this.props}>

        </DashboardComponent>
    )
}
}


const mapStateToProps = (state, ownProps) => ({   

    employeeList : state.employee.employeeList,
   
  });
  
  
  
  export default connect (mapStateToProps, null) (DashboardContainer)
  