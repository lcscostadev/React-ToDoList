import React, { useState } from 'react';
import './Task.css';
import EditTaskModal from './EditTaskModal';

const Task = ({ task, handleTaskClick, handleTaskDeletion, handleTaskUpdate }) => {
    const [showModal, setShowModal] = useState(false);

    const handleDoubleClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="task-container">
                <div
                    className="item"
                    style={
                        task.completed
                            ? {
                                borderLeft: '10px solid chartreuse',
                                borderTop: '2px solid chartreuse',
                                borderBottom: '2px solid chartreuse',
                                transition: 'all ease-in .2s',
                            }
                            : { transition: 'all ease-out .2s' }
                    }
                    onClick={() => handleTaskClick(task.id)}
                    onDoubleClick={handleDoubleClick} // add double-click handler
                >
                    <div>{task.title}</div>
                </div>

                <div className="btn">
                    <button
                        style={
                            task.completed
                                ? {
                                    borderTop: '2px solid chartreuse',
                                    borderRight: '2px solid chartreuse',
                                    borderBottom: '2px solid chartreuse',
                                    color: '#d63434',
                                    backgroundColor: '#2d323d',
                                }
                                : {}
                        }
                        onClick={() => handleTaskDeletion(task.id)}
                    >
                        <ion-icon name="trash-outline"></ion-icon>
                    </button>
                </div>
            </div>

            {showModal && (
                <EditTaskModal
                    task={task}
                    showModal={showModal}
                    handleCloseModal={handleCloseModal}
                    handleTaskUpdate={handleTaskUpdate}
                />
            )}
        </>
    );
};

export default Task;
