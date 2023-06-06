import React, { useState, useEffect, useRef } from 'react';
import './EditTaskModal.css';

const EditTaskModal = ({ task, handleTaskUpdate, handleCloseModal }) => {
    const [inputData, setInputData] = useState(task.title);
    const [showModal, setShowModal] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        setShowModal(true);
        inputRef.current.focus();
    }, []);

    const handleDoubleClick = () => {
        inputRef.current.select();
    };

    const handleFocus = (e) => {
        e.target.select();
    };

    const handleInputChange = (e) => {
        const data = e.target.value;
        setInputData(data);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        handleTaskUpdate(task.id, inputData);
        handleCloseModal();
    };

    const handleModalClick = (e) => {
        if (e.target.classList.contains('modal-container')) {
            handleCloseModal();
        }
    };

    const modalClasses = showModal ? 'modal-enter modal-enter-active' : '';

    return (
        <div className="modal-container" onClick={handleModalClick}>
            <div className={`modal-content ${modalClasses}`}>
                <h2>Edit task</h2>
                <form onSubmit={handleFormSubmit}>
                    <label>
                        Task name:
                        <input
                            type="text"
                            value={inputData}
                            onChange={handleInputChange}
                            onDoubleClick={handleDoubleClick}
                            onFocus={handleFocus}
                            ref={inputRef}
                        />
                    </label>
                    <div className="button-group">
                        <button type="button" onClick={handleCloseModal}>
                            Cancel
                        </button>
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditTaskModal;
