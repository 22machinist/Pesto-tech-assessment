import React from 'react';
import axios from 'axios';

const TaskItem = ({ task, fetchTasks }) => {
    const handleDelete = async () => {
        await axios.delete(`/api/tasks/${task._id}`);
        fetchTasks();
    };

    const handleStatusChange = async (e) => {
        await axios.put(`/api/tasks/${task._id}`, { ...task, status: e.target.value });
        fetchTasks();
    };

    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <select value={task.status} onChange={handleStatusChange}>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
            </select>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default TaskItem;
