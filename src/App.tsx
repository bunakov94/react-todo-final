import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ITask, AppState, AppProps } from './components/types/interfaces';
import FilterTypes from './components/types/filterTypes';

import Footer from './components/blocks/Footer';
import Header from './components/blocks/Header';
import TaskList from './components/blocks/TaskList';

import './App.scss';

export default class App extends Component<AppProps, AppState> {
  state: AppState = {
    tasks: [
      {
        isCompleted: true,
        isEditing: false,
        text: 'Completed task',
        timeOfCreation: new Date(),
        id: nanoid(),
      },
      {
        isCompleted: false,
        isEditing: false,
        text: 'Editing task',
        timeOfCreation: new Date(),
        id: nanoid(),
      },
      {
        isCompleted: false,
        isEditing: false,
        text: 'Active task',
        timeOfCreation: new Date(),
        id: nanoid(),
      },
    ],
    filter: FilterTypes.ALL,
  };

  deleteTask = (id: string) => {
    this.setState(({ tasks }) => ({ tasks: tasks.filter((task) => task.id !== id) }));
  };

  deleteCompletedTasks = () => {
    this.setState(({ tasks }) => ({ tasks: tasks.filter((task) => !task.isCompleted) }));
  };

  editTask = (id: string) => {
    this.setState(({ tasks: oldTasks }) => {
      const tasks = [...oldTasks];
      const taskIndex = tasks.findIndex((task) => task.id === id);
      tasks[taskIndex].isEditing = true;
      return { tasks };
    });
  };

  toggleComplete = (id: string, isCompleted: boolean) => {
    this.setState(({ tasks: oldTasks }) => {
      const tasks = [...oldTasks];
      const taskIndex = tasks.findIndex((task) => task.id === id);
      tasks[taskIndex].isCompleted = !isCompleted;
      return { tasks };
    });
  };

  updateTask = (id: string, text: string) => {
    this.setState(({ tasks: oldTasks }) => {
      const tasks = [...oldTasks];
      const taskIndex = tasks.findIndex((task) => task.id === id);
      tasks[taskIndex].text = text;
      tasks[taskIndex].isEditing = false;
      return { tasks };
    });
  };

  addTask = (text: string) => {
    if (text !== '') {
      const newTask = {
        text,
        isCompleted: false,
        isEditing: false,
        timeOfCreation: new Date(),
        id: nanoid(),
      };

      this.setState(({ tasks: oldTasks }) => {
        const tasks = [...oldTasks, newTask];
        return { tasks };
      });
    }
  };

  changeFilter = (filter: number) => {
    this.setState({ filter });
  };

  filterTasks = (tasks: ITask[], filter: number) => {
    if (filter === FilterTypes.UNCOMPLETED) {
      return tasks.filter((item) => !item.isCompleted);
    }
    if (filter === FilterTypes.COMPLETED) {
      return tasks.filter((item) => item.isCompleted);
    }
    return tasks;
  };

  render() {
    const { tasks, filter } = this.state;
    const tasksLeft = tasks.reduce((acc, el) => (el.isCompleted ? acc : acc + 1), 0);
    const filteredTasks = this.filterTasks(tasks, filter);

    return (
      <section className="todoapp">
        <Header addTask={this.addTask} />
        <section className="main">
          <TaskList
            filteredTasks={filteredTasks}
            toggleComplete={this.toggleComplete}
            deleteTask={this.deleteTask}
            editTask={this.editTask}
            updateTask={this.updateTask}
          />
          <Footer
            tasksLeft={tasksLeft}
            deleteCompletedTasks={this.deleteCompletedTasks}
            filter={filter}
            changeFilter={this.changeFilter}
          />
        </section>
      </section>
    );
  }
}
