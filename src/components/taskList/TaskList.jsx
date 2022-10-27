import axios from "axios";
import React from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";

const TaskList = ({ task,getTask }) => {
  
  const deleteTask = async (id) => {
    const url = `https://635521fb483f5d2df3adbce9.mockapi.io/api/tasks/`
    try{
      await axios.delete(`${url}/${id}`)
      getTask()
    }catch (error){
      console.log(error);
    }
  }

  return (
    <div>
      {task?.map((item) => {
        const { id, task, date } = item;
        return (
          <div
            className="mt-2 d-flex justify-content-between bg-danger p-3 text-light"
            key={id}
          >
            <div>
              <h6>{task}</h6>
              <p>{date}</p>
            </div>
            <div>
              <RiDeleteBack2Fill 
              style={{
                cursor:"pointer",
                marginRight:"1.5rem",
                fontSize:"1.5rem",
                boxShadow:"2px 2px 2px white"
              }}
              onClick={() => deleteTask(id)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
