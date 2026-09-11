import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskList from '../components/TaskList';

describe('TaskList Component', () => {
  test('renders task list', () => {
    render(<TaskList tasks={[{ id: 1, title: 'Task 1', description: 'Description 1' }]} />);
    expect(screen.getByText('Task 1 - Description 1')).toBeInTheDocument();
  });
});