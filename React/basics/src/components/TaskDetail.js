import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { TaskContext } from "../TaskContext";

function TaskDetail(){
    const {taskId} = useParams();

    const {taskList} = useContext(TaskContext);

    const task = taskList[taskId]

    return(
        <div>
            <h1>Görev Detayı</h1>
            <p>Görev: {task}</p>
        </div>
    );
}
export default TaskDetail;