import React, {useState} from "react"; 
import Tweet from "./Tweet";



function App(){

  const [users, setUsers]= useState([ 
    {name: 'tomi', message: 'Hi there'},
    {name: 'Escanor', message: 'I am Escanor The one'},
    {name: 'google', message: 'I am awesome'}
  ]);
  

  return (

    <div className="app">
     {users.map(user =>(
       <Tweet name={user.name} message={user.message} />
     ))}

    </div>
    );

  };


export default App;