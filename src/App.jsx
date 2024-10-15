import React from "react";


function useTodos () {
const [todos,setTodos] = React.useState([]);



React.useEffect( () => {
fetch("http://localhost:3000/todos", {
  method: "GET"

}).then((response)=> {
  response.json().then(data => {
    console.log(data);
    setTodos(data);
  })
});
setInterval( () => {
  fetch("http://localhost:3000/todos", {
    method: "GET"
  
  }).then((response)=> {
    response.json().then(data => {
      console.log(data);
      setTodos(data);
})
});
},1000) 
},[]);
return todos;
}
function App() {
  const todos= useTodos();
  
  
  
   
  return (
    <div>
      {todos.map(todo => {
        return <div key ={todo.id}>
           {todo.title}
           {todo.description}
           {todo.id}
           <button>Delete</button>

      </div>
        })}
        </div>
  )
}
export default App
