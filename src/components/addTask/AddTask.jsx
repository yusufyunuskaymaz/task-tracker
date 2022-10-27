import axios from 'axios';
import React, { useState } from 'react'
import  Button  from 'react-bootstrap/Button';
import  Form  from 'react-bootstrap/Form';

const AddTask = ({getTask}) => {
  const [task, setTask] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTask = {task,date}
    console.log("task geldi mi", newTask)
    addNewTask(newTask)
  }

  const addNewTask = async (newTask) => {
    const url = "https://635521fb483f5d2df3adbce9.mockapi.io/api/tasks";
    try{
      await axios.post(url, newTask)
      getTask()
    }catch(error){
      console.log(error);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task</Form.Label>
        <Form.Control type="text" placeholder="Enter Task"
        onChange={(e) => setTask(e.target.value)}
        />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date"
        onChange={(e) => setDate(e.target.value)}
        />
      </Form.Group>

      
      <Button variant="primary w-100 " type="submit">
        Save
      </Button>
    </Form>
  )
}

export default AddTask;