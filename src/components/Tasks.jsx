import React from 'react';
import { Task } from './index'

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
    return (
        <>
            {tasks.map((task, index) => (
                <Task key={task.id} task={task} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />
            ))}
        </>
    );
}

export default Tasks;