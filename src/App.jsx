import {useState} from 'react';
import './App.css';
import axios from 'axios';
const App=()=>{ 
    const[users,setUsers]=useState([]);  
    const handleClick=()=>{
        async function fetchData() {
            try{
              const response=await axios.get("https://jsonplaceholder.typicode.com/users")
              setUsers(response.data)
            }
            catch(error){
              console.error(error);
            }
          }

          fetchData();
    }
    return(
        <>
           <h1>App Component</h1>
           <input type="button" value="Fetch data" onClick={handleClick} />
           <br />
           {
            users.map((user)=>{return(
                <div key={user.id} className='App'>
                    <h4>{user.name}</h4>
                    <p>
                        <br />
                        {user.email}
                    </p>                    
                </div>
            )})
           }
        </> 
    );    
}
export default App;