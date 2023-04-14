import React from 'react';
import { Task } from './index'

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion, handleTaskUpdate }) => {


    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} handleTaskUpdate={handleTaskUpdate} />
            ))}

        </>
    );
}

export default Tasks;