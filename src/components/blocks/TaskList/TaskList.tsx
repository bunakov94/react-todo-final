import React from 'react';
import classNames from 'classnames';
import Task from '../Task';
import { TaskListProps } from '../../types/interfaces';

import './TaskList.scss';

const TaskList: React.FC<TaskListProps> = ({
  filteredTasks,
  toggleComplete,
  deleteTask,
  editTask,
  updateTask,
}: TaskListProps) =>
  filteredTasks.length ? (
    <ul className="todo-list">
      {filteredTasks.map((item) => (
        <li key={item.id} className={classNames({ completed: item.isCompleted, editing: item.isEditing })}>
          <Task
            {...item}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            editTask={editTask}
            updateTask={updateTask}
          />
        </li>
      ))}
    </ul>
  ) : (
    <h2 className="nothing">There is nothing here yet</h2>
  );

export default TaskList;
