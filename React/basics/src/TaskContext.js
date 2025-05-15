import React, { createContext, useState } from "react";

const TaskContext = createContext();

const TaskProvider = ({children}) => {
    const [taskList, setTaskList] = useState([]);

    const addTask = (task) => {
        setTaskList([...taskList, task]);
    };

    return(
        <TaskContext.Provider value={{taskList,addTask}}>
            {children}
        </TaskContext.Provider>
    );
}

export {TaskContext, TaskProvider}