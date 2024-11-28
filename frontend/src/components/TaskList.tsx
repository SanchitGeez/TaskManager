import React, { useEffect, useState } from "react";
import axios from "axios";

interface Task {
    _id: string;
    taskName: string;
    date: string;
}

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get("/api/tasks");
                setTasks(response.data);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };

        fetchTasks();
    }, []);

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task._id}>
                        {task.taskName} - {new Date(task.date).toLocaleDateString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
