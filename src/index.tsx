import React from 'react';

interface Task {
  id: number;
  title: string;
  description: string;
}

const TaskList: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.title} - {task.description}</li>
      ))}
    </ul>
  );
};

export default TaskList;