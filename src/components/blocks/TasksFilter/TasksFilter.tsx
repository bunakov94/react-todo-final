import React from 'react';
import { TaskFilterProps } from '../../types/interfaces';
import FilterTypes from '../../types/filterTypes';

import './TasksFilter.scss';

const TaskFilter: React.FC<TaskFilterProps> = ({ filter, changeFilter }: TaskFilterProps) => {
  const buttons = [
    { filterName: FilterTypes.ALL, label: 'ALL' },
    { filterName: FilterTypes.UNCOMPLETED, label: 'Active' },
    { filterName: FilterTypes.COMPLETED, label: 'Completed' },
  ];

  return (
    <ul className="filters">
      {buttons.map(({ filterName, label }) => (
        <li key={filterName}>
          <button
            onClick={() => changeFilter(filterName)}
            type="button"
            className={filter === filterName ? 'selected' : ''}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskFilter;
