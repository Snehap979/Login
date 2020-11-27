
import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {ListItem,Typography,ListItemText} from '@material-ui/core';
import {routes} from '../navigation'
import Container from '@material-ui/core/Container';
import { Redirect } from 'react-router-dom';
export default class LoginComponent extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             password:'',
             navigateToEmployeeList:false,
             errors:{
               username:'',
               password:''
             }
        }
        
    }
    
    handleEmailChange=(event)=>{
this.setState({username:event.target.value})

    }
    handlePasswordChange=(event)=>{
this.setState({password:event.target.value})
    }
    user=[{
        "id":1,
        "name":"test1",
        "age" : "11",
        "gender":"male",
        "email" : "test1@gmail.com",
        "phoneNo" : "9415346313"
        },
        {
        "id" : 2,
        "name":"test2",
        "age" : "12",
        "gender":"male",
        "email" : "test2@gmail.com",
        "phoneNo" : "9415346314"
        },
        {
        "id":3,
        "name":"test3",
        
        "age" : "13",
        "gender":"male",
        "email" : "test3@gmail.com",
        "phoneNo" : "9415346315"
        },
        {
        "id":4,
        "name":"test4",
        "age" : "14",
        "gender":"male",
        "email" : "test4@gmail.com",
        "phoneNo" : "9415346316"
        },
        {
        "id":5,
        "name":"test5",
        "age" : "15",
        "gender":"male",
        "email" : "test5@gmail.com",
        "phoneNo" : "9415346317"
        },
        {
        "id":6,
        "name":"test6",
        "age" : "16",
        "gender":"male",
        "email" : "test6@gmail.com",
        "phoneNo" : "9415346318"
        }
        ]
       validate=()=>{  
         let formValid=true 
         let tempErrors=this.state.errors
        if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.username)))
        {
          tempErrors['username'] = 'your mail id shd be of form a@gmail.com'
          this.setState({ errors: tempErrors });
          formValid=false 
        }
     if(this.state.password.length<8 || (!(/^[0-9a-zA-Z]+$/.test(this.state.password))))
        {
         
          tempErrors['password'] = 'your password should be of minimum 8 charachers with alteast a number and letter'
          this.setState({ errors: tempErrors });
          formValid=false 
        }
        return formValid
       } 
    handleSubmit=()=>{
     let isformValidated= this.validate()
    
     if(isformValidated==true)
     {
      this.props.setEmployees(this.user)
      let user={}
      user.username=this.state.username
      user.password=this.state.password
      this.props.setUser(user)
      this.setState({navigateToEmployeeList:true})
     }
            
  
    }
    render(){
    
        return(
          
          
            <Container component="main" maxWidth="xs">
       {this.state.navigateToEmployeeList ? (
            <Redirect
              to={{
                pathname: routes.employeeList,
                
              }}
            />
          ) : null}
            <div style={styles.paper}>
              <Avatar style={styles.avatar}>
               
              </Avatar>
              <Typography component="h1" variant="h5">
                Login 
              </Typography>
            
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Username"
                 
                  onChange={(event)=>{this.handleEmailChange(event)}}
                />
                <Typography style={styles.typographyStyle}>
                  {this.state.errors.username}
                </Typography>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                
                  label="Password"
                  type="password"
                  id="password"
                 
                  onChange={(event)=>{this.handlePasswordChange(event)}}
                />
                <Typography style={styles.typographyStyle}>
                  {this.state.errors.password}
                </Typography>
                   <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={styles.submit}
                  onClick={()=>{this.handleSubmit()}}
                >
                  Login
                </Button>
             
                  
               
             
          
            </div>
           
          </Container>
    
         
    )
        }
 
    
      
}
const styles={
    paper: {
      marginTop: 64,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: 8,
      backgroundColor: 'grey',
    },
    form: {
      width: '100%', 
      marginTop: 16,
    },
    submit: {
    marginTop:16
    },
    linkStyle:{
        textDecoration: 'none',color: 'inherit'
    },
    typographyStyle:{
      color:'red'
    }
  }
  