import React from 'react';
import './Task.css';

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
    return (
        <>
            <div className='item' style={task.completed ? { borderLeft: '12px solid chartreuse', borderRight: '2px solid chartreuse', borderTop: '2px solid chartreuse', borderBottom: '2px solid chartreuse', transition: 'all ease-in .2s' } : { transition: 'all ease-out .2s' }}>
                <div onClick={() => handleTaskClick(task.id)}>
                    {task.title}
                </div>
                <div className='btn'>
                    <button onClick={() => handleTaskDeletion(task.id)}>X</button>
                </div>
            </div>
        </>
    );
}

export default Task;