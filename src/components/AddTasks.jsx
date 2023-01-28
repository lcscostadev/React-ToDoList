import React, { useState } from 'react';
import './AddTasks.css';

const AddTasks = ({ handleTaskAddition }) => {

    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        const data = e.target.value;
        setInputData(data);
    }

    const handleAddTask = () => {
        if (inputData !== '') {
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
                <p>Tasks:</p>
            </div>
            <div className='warning'>
                <p>When a task is <span className='complete'>completed</span> you can <span className='delete'>delete</span> it.</p>
            </div>
        </>
    );
}

export default AddTasks;