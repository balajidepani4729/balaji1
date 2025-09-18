import { useEffect } from "react";
function App(){
    const[users,setUsers]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/users")
        .then((res)=>res.json())
        .then((data)=>setUsers(data))
        .catch((err)=>console.error));
    }[]);
    return(
        <div className="App">
            <h1>My API+React FETCH</h1>
            <ul>
                {users.map((u)=>(
                    <li key={u.id}>
                        {u.name}-{u.role}
                    </li>
                ))}
            </ul>
        </div>
    );
}