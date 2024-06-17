import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('All');

    const fetchTasks = async () => {
        const response = await axios.get('/api/tasks');
        setTasks(response.data);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const filteredTasks = tasks.filter(task =>
        filter === 'All' || task.status === filter
    );

    return (
        <div>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="All">All</option>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
            </select>
            <div>
                {filteredTasks.map(task => (
                    <TaskItem key={task._id} task={task} fetchTasks={fetchTasks} />
                ))}
            </div>
        </div>
    );
};

export default TaskList;
