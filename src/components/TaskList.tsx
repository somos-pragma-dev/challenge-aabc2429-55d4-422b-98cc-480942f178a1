import React from 'react';

interface Task {
  id: number;
  title: string;
  description: string;
}

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskItem;