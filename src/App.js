import React, {useState} from "react"; 
import Tweet from "./Tweet";




function App(){

  const [users, setUsers]= useState([ 
    {name: 'tomi', message: 'Hi there'},
    {name: 'Escanor', message: 'I am Escanor The one'},
    {name: 'google', message: 'I am awesome'}
  ]);

    const [count, setCount] = useState(0);

  
    
  return (

    <div className="app" >
     {users.map(user =>(
       <Tweet name={user.name} message={user.message} />
     ))}
      <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        
        <form onSubmit={setUsers}>
          <label >
            setUsers:
            
            <Tweet name="John" message ="Im a developer"/>
          
     
          </label>
          
        </form>
      
    </div>
    );

  };
  


export default App;
