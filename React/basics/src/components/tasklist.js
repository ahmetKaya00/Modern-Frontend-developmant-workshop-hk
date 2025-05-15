import React, { useContext, useState } from "react";
import {Link} from 'react-router-dom'
import { TaskContext } from "../TaskContext";
import alertify from 'alertifyjs';
import { Alert, ListGroup, ListGroupItem } from "reactstrap";

function TaskList(){
    const{taskList, addTask} = useContext(TaskContext)

    const[newTask, setNewTask] = useState('');

    const[error, setError] = useState('');

    const handleAddTask = () => {
        if(newTask.trim() === ''){
            setError('Görev Adı Boş Olamaz!')
            return;
        }
         addTask(newTask);
         setNewTask('');
         setError('')
         alertify.success('Görev Başarılı Bir Şekilde Eklendi!')
    };
    return(
        <div>
            <h1>Görev Listesi</h1>
            {taskList.length === 0 ? (
                <Alert color="warning">Henüz bir görev eklenmedi!</Alert>
            ):(
                <ListGroup>
                {taskList.map((task, index)=>(
                    <ListGroupItem key={index}>{task} - <Link to={`/task/${index}`}>Detaya Git</Link></ListGroupItem>
                ))}
            </ListGroup>
            )}
            <input 
            type="text"
            value={newTask}
            className="form-control"
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Yeni Görev Ekleyin"
            ></input>
            <button onClick={handleAddTask} className="mt-2 btn btn-primary">Görev Ekle</button>
            {error && <Alert style={{color: 'black'}} color="danger" className="mt-2">{error}</Alert>}
        </div>
    );
}

export default TaskList;