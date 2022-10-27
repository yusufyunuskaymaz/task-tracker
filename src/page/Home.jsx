import React, { useEffect, useState } from 'react'
import  Button  from 'react-bootstrap/Button'
import AddTask from '../components/addTask/AddTask'
import TaskList from '../components/taskList/TaskList'
import axios from 'axios'



const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState("Show Task Bar")
  const [task, setTask] = useState()
  const url = "https://635521fb483f5d2df3adbce9.mockapi.io/api/tasks";

  const toggle = () => {
    setIsOpen(!isOpen)
    const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar"
    setText(buttonText)
  
  }

  const getTask = async () => {
    const {data} = await axios(url)
     setTask(data)
  }

  useEffect(() => {
    getTask()
  }, [])

// console.log(task, "task")
  return (
    <div className='mt-4 d-flex justify-content-center flex-column'>
      
      <Button
      onClick={() => {toggle()}}
      variant="secondary"
      size="sm"
      >{text}</Button>
      {isOpen && <AddTask getTask={getTask} />}
      <TaskList task={task} getTask={getTask} />
      </div>
  )
}

export default Home