import React from 'react';
import { HeaderProps } from '../../types/interfaces';
import NewTaskForm from '../NewTaskForm';
import './Header.scss';

const Header: React.FC<HeaderProps> = ({ addTask }: HeaderProps) => (
  <header>
    <h1>todos</h1>
    <NewTaskForm addTask={addTask} />
  </header>
);

export default Header;
