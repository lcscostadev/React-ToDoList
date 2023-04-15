import React, { useState } from 'react';
import './AddTasks.css';

const AddTasks = ({ handleTaskAddition, tasks }) => {

    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        const data = e.target.value;
        setInputData(data);
    }

    const handleAddTask = () => {
        if (inputData.trim() !== '') {
            handleTaskAddition(inputData);
            setInputData('');
        } else {
            return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setInputData('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='input-section'>
                    <input type="text" onChange={handleInputChange} value={inputData} />
                    <button onClick={handleAddTask}>Add Task</button>
                </div>
            </form>
            <div className='text'>
                <p>Tasks: {tasks.length}</p>
            </div>
            <div className='warning' style={tasks.length > 0 ? { display: 'flex' } : {}}>
                <div className='info-container'>
                    <ion-icon name="alert-circle-outline" className="exclamation" size="large"></ion-icon>
                    <p>When a task is <span className='complete'>completed</span> you can <span className='delete'>delete</span> it, <span className='edit'>DoubleClick</span> the Task you want to <span className='edit'>Edit</span>.</p>
                </div>
            </div>
        </>
    );
}

export default AddTasks;