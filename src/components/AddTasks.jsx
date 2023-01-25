import React, { useState } from 'react';
import './AddTasks.css';

const AddTasks = ({ handleTaskAddition }) => {

    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        const data = e.target.value;
        setInputData(data);
        console.log(data)
    }

    const handleAddTask = () => {
        if (inputData !== '') {
            handleTaskAddition(inputData);
            setInputData('');
        } else {
            return;
        }
    }

    return (
        <>
            <div className='input-section'>
                <input type="text" onChange={handleInputChange} value={inputData} />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
        </>
    );
}

export default AddTasks;