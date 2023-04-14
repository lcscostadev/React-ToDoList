import React, { useState, useEffect } from 'react';
import './EditTaskModal.css';

const EditTaskModal = ({ task, handleTaskUpdate, handleCloseModal }) => {
    const [inputData, setInputData] = useState(task.title);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setShowModal(true);
    }, []);

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

    const handleModalClose = () => {
        // add the "hide" class to the modal container to animate the slide-out effect
        const modalContainer = document.querySelector('.modal-container');
        modalContainer.classList.add('hide');

        // wait for the animation to finish before actually closing the modal
        setTimeout(() => {
            handleCloseModal();
        }, 200);
    };



    const modalClasses = showModal ? 'modal-enter modal-enter-active' : '';

    return (
        <div className="modal-container" onClick={handleModalClick}>
            <div className={`modal-content ${modalClasses}`}>
                <h2>Edit task</h2>
                <form onSubmit={handleFormSubmit}>
                    <label>
                        Task name:
                        <input type="text" value={inputData} onChange={handleInputChange} />
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
