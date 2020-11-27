import React from 'react'
import LoginContainer from '../login/LoginContainer'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import DashboardContainer from '../dashboard/DashboardContainer'
import routes from "./Routes";
class AppRouter extends React.Component {
	render=()=>{
  
		return (
      <Router>
        <Switch>
        <Route
              exact
              path={routes.home}
              render={(props) => <LoginContainer{...props}/>}
            />
             <Route
              exact
              path={routes.employeeList}
              render = {(props) => 
                <DashboardContainer{...props}/>
              }   
            />
            
          

        </Switch>
      </Router>
    );
	};
}

export default AppRouter;