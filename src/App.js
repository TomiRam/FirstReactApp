import React, {useState } from "react"; 
import Tweet from "./Tweet";


class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li stule={{fontSize:"20px"}}>MtnDewJumpstart</li>
          <li stule={{fontSize:"20px"}}>Nocco Limon del sol</li>
          <li stule={{fontSize:"20px"}}>MtnDew</li>
        </ul>
        
      </div>
    );
  }
};


function App(){

  const [users, setUsers]= useState([ 
    {name: 'Tomi', message: 'Hi there'},
    {name: 'Escanor', message: 'I am Escanor The Lion Sin of Pride'},
    {name: 'Google', message: 'I am awesome'}
  ]);

    const [count, setCount] = useState(0);

    const GymGoals = ['200kg Deadlift','160kg Squat', '120kg Bench', '100kg Overhead Press', '100kg Barbell Curl', '2min Plank'];
    const listItems = GymGoals.map((gymgoal) =>
    <li>{gymgoal}</li>);
    
    
 

  return (

    <div className="app" >
      <ShoppingList/>
     {users.map(user =>(
       <Tweet name={user.name} message={user.message} />
     ))}
     
      <p style={{backgroundColor:"lightblue",fontSize:"25px"}}>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)} style={{backgroundColor:"lightblue"}}>
          Click me
        </button>
        
        <form onSubmit={setUsers}>
          <label >
            setUsers:
            
            <Tweet name="John" message ="Im a developer"/>
           
          </label>
          
        </form>
        <h2 style={{backgroundColor:"lightblue", alignItems: "center", fontSize: "20px"}}>It is {new Date().toLocaleTimeString()}.</h2>
      <h3 style={{backgroundColor:"lightblue",  alignItems: "center",fontSize:"20px"}}>My Gym Goals</h3>
     <ul style={{backgroundColor:"lightblue", alignItems: "center",fontSize:"20px"}}>{listItems}</ul>
  
    </div>
    );

  };
  
export default App;
