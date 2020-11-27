export const routesObject ={
    'home': {id:'home', name:'/'},
   'employeeList':{name:'/employeeList'},
  
}

const getRoute=(route)=>{
    return `${routesObject[route].name}`;
 }
 
 
 const routes = {
 
   'home': "/",
   'employeeList': getRoute('employeeList'),
   
 }

 export default routes;