import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import Navbar from './components/Navbar.jsx'
function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString) {
    let todos = JSON.parse(localStorage.getItem("todos"))
    setTodos(todos)
    }
    
  }, [])
  
  const saveLs = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  
  const handleAdd = ()=>{
setTodos([...todos,{id:uuidv4(), todo , isComplete:false}])
setTodo("")
console.log(todos)
saveLs()
  }
  const handleDelete = (e, id)=>{
    let index = todos.findIndex(item =>{
      return item.id === id; })
      let newTodos = todos.filter(item=>{
        return item.id!==id 
      })
      setTodos(newTodos)
      saveLs()
  }
  const handleEdit = (e , id)=>{
    let t = todos.filter(i=> i.id === id)
    setTodo(t[0].todo);
    let index = todos.findIndex(item =>{
      return item.id === id; })
      let newTodos = todos.filter(item=>{
        return item.id!==id 
      })
      setTodos(newTodos)
      saveLs()

  }
  const handleChange = (e)=>{
setTodo(e.target.value)
  }
  const handleComplete = (e)=>{
let id = e.target.name;
let index = todos.findIndex(item =>{
  return item.id === id; })
  let newTodos = [...todos];
newTodos[index].isComplete = !newTodos[index].isComplete
setTodos(newTodos);
saveLs()
  }

  return (
    <>
      <Navbar />
      <div className='container bg-green-500 w-[90vw] md:w-[75vw] lg:w-[60vw] xl:w-[50vw] 2xl:w-[40vw] h-[80vh] mt-3 mx-auto flex flex-col'>
        <h1 className='List text-4xl font-bold m-1 self-center'>To Do List</h1>
        <div className="line bg-black h-0.5 w-full"></div>
        <div className="addTodo flex flex-col self-center">
          <input type="text" name='toDo' value={todo} onChange={handleChange} className='w-[39vw] border-2 border-amber-400 my-3 mx-[10px] rounded-2xl p-4 bg-green-200 hover:border-blue-400 hover:bg-green-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300' placeholder='Add Items' />
          <button className='border border-amber-400 active:bg-blue-400 bg-green-950 text-white 
    px-6 py-2 rounded-lg transition-transform duration-300 active:scale-110 ml-3 w-24 
    hover:border-blue-300 hover:bg-green-800 cursor-pointer' disabled={todo.length<1} onClick={handleAdd}>Add</button>
        </div>
        <div className="maintodo overflow-y-scroll">
          {todos.length ===0 && <div className='m-5 mt-3 text-3xl self-center'> no todos to display </div>}
        {todos.map((item, index) => {

        return <div  key={item.id} className="todoNames mt-2.5">
          <div className="task1 bg-green-700 border border-black rounded-2xl flex items-center justify-between p-3 w-40vw mr-2">
            <div className={`taskName text-wrap text-cyan-200 ${item.isComplete ? "line-through" : ""}`}>{item.todo}</div>
            <div className="taskbutton gap-2 flex items-center">
              <button className='border cursor-pointer text-cyan-200' onClick={(e)=>{handleDelete(e, item.id)}}><span class="material-symbols-outlined">
                delete
              </span></button>
              <button className='border cursor-pointer text-cyan-200' onClick={(e)=>{handleEdit(e, item.id)}}><span class="material-symbols-outlined">
                edit
              </span></button>
           <input type="checkbox" name={item.id} id="" value={item.isComplete} className='border cursor-pointer text-cyan-200' onChange={handleComplete}/>
            </div>
          </div>
        </div> })}
        </div>
      </div>
    </>
  )
}

export default App
