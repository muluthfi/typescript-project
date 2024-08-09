import React from "react";
import { Task } from "../types/task";
import { FiCheck } from 'react-icons/fi';

const getHumanizedCreatedDate = (createdAt: Date): string => {
    const now = new Date();
    const diffMs = now.getTime() - createdAt.getTime();
    const diffDays = Math.floor(diffMs / (1000*60*60*24));

    if(diffDays === 0){
        const diffHours = Math.floor(diffMs / (1000*60*60));
        return `${diffHours} hour${diffHours !== 1 ? 's':''} ago`;
    } else {
        return `${diffDays} day${diffDays !== 1 ? 's':''} ago`;
    }
};

interface TaskItemProps {
    task: Task;
    toggleComplete: (id: string) => void;
    deleteTask: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleComplete, deleteTask}) => (
    <div className="flex items-center justify-between p-4 border border-gray-300 bg-gray-800 hover:bg-purple-900 transition duration-300 rounded">
        <div className="flex items-center space-x-4">
            <button onClick={() => toggleComplete(task.id)} className={`w-6 h-6 `}>

            </button>
        </div>
    </div>
)
