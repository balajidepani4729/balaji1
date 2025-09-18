import React from 'react';
function App(){
  const fruits=['Apple','Banana','Mango','Orange','Grapes'];
return(
    <div style={{textAlign:'Center',MarginTop:'50px'}}>
      <h2>fruit List using map()</h2>
        <ul Style={{listStyleType:'name',pading:0}}>
          {fruits.map((fruit,index)=>(
            <li
            key={index}
            Style={{
              fontSize:'20px',
              margin:'10px 0',
              color:'#333',
              fontFamily:'Arial',
            }}
            >
              {fruits}
            </li>
          ))}
        </ul>
    </div>
  );}export default App;
