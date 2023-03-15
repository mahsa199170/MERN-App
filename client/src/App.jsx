import React, {useEffect,useState} from 'react';
import axios from "axios";

const App = () => {

  const [listOfUsers,setlistOfUsers] = useState([{}]);
  const [name,setName] = useState("")
  const [age,setAge] = useState(0)
  const [username, setUsername] = useState("")

  useEffect(()=>{
    axios.get("http://localhost:5000/api/ret").then((response)=>{
      setlistOfUsers(response.data)
    })


  },[])

  const createUser = () =>{
    axios.post("http://localhost:5000/api/add", {name:name, age:age,username:username}).then((response)=>{

      setlistOfUsers([...listOfUsers,{name:name, age:age,username:username}])
    });

  }

  return (
    <div>
        <div className='userDisplay'>
          {listOfUsers.map((user)=>{
            return (<div key={user.id}>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Username: {user.username}</h1>
            </div>);
        
          })}

        </div>
        <div>
          <input type="text" placeholder="name..." onChange={(event)=>{setName(event.target.value)}}/>
          <input type="number" placeholder="age..." onChange={(event)=>{setAge(event.target.value)}}/>
          <input type="text" placeholder="username..." onChange={(event)=>{setUsername(event.target.value)}}/>
          <button onClick={createUser}>create user</button>
        </div>
    </div>
  )
}

export default App