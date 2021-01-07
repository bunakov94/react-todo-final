export interface ITask {
  isCompleted: boolean;
  isEditing: boolean;
  text: string;
  timeOfCreation: Date;
  id: string;
}

export type TaskListProps = {
  filteredTasks: ITask[];
  toggleComplete: (id: string, isCompleted: boolean) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string) => void;
  updateTask: (id: string, text: string) => void;
};

export type AppState = {
  tasks: ITask[];
  filter: number;
};

export type AppProps = {};

export interface ITaskListProps {
  isCompleted: boolean;
  isEditing: boolean;
  text: string;
  timeOfCreation: Date;
  id: string;
  toggleComplete: (id: string, isCompleted: boolean) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string) => void;
  updateTask: (id: string, text: string) => void;
}
export type TaskListState = {
  distanceFromCreation: string;
  editText: string;
};

export type FooterProps = {
  tasksLeft: number;
  deleteCompletedTasks: () => void;
  filter: number;
  changeFilter: (filter: number) => void;
};

export type HeaderProps = {
  addTask: (text: string) => void;
};

export type NewTaskFormProps = {
  addTask: (text: string) => void;
};

export type TaskFilterProps = {
  filter: number;
  changeFilter: (filter: number) => void;
};

export type Keys = keyof ITask;
