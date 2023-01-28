import React from 'react';
import './Task.css';

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
    return (
        <>
            <div className='task-container'>
                <div className='item' style={task.completed ? { borderLeft: '10px solid chartreuse', borderTop: '2px solid chartreuse', borderBottom: '2px solid chartreuse', transition: 'all ease-in .2s' } : { transition: 'all ease-out .2s' }} onClick={() => handleTaskClick(task.id)}>
                    <div>
                        {task.title}
                    </div>
                </div>
                <div className='btn'>
                    <button style={task.completed ? { borderTop: '2px solid chartreuse', borderRight: '2px solid chartreuse', borderBottom: '2px solid chartreuse', color: '#d63434', backgroundColor: '#2d323d' } : {}} onClick={() => handleTaskDeletion(task.id)}><ion-icon name="trash-outline"></ion-icon></button>
                </div>
            </div>
        </>
    );
}

export default Task;