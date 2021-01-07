import React from 'react';
import { FooterProps } from '../../types/interfaces';
import TaskFilter from '../TasksFilter';

import './Footer.scss';

const Footer: React.FC<FooterProps> = ({ tasksLeft, deleteCompletedTasks, filter, changeFilter }: FooterProps) => (
  <footer className="footer">
    <span className="todo-count">{tasksLeft} items left</span>
    <TaskFilter filter={filter} changeFilter={changeFilter} />
    <button type="button" className="clear-completed" onClick={() => deleteCompletedTasks()}>
      Clear completed
    </button>
  </footer>
);

export default Footer;
