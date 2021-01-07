import React, { Component } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { TaskListState, ITaskListProps } from '../../types/interfaces';

export default class Task extends Component<ITaskListProps, TaskListState> {
  timerID?: number;

  constructor(props: ITaskListProps) {
    super(props);

    const { timeOfCreation, text } = this.props;
    this.state = {
      distanceFromCreation: formatDistanceToNow(timeOfCreation, { addSuffix: true, includeSeconds: true }),
      editText: text,
    };
  }

  componentDidMount() {
    this.timerID = window.setInterval(() => this.tick(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  submitEditing = (event: React.FormEvent) => {
    event.preventDefault();
    const { id, updateTask, deleteTask } = this.props;
    const { editText } = this.state;
    updateTask(id, editText);
    if (editText === '') {
      deleteTask(id);
    }
  };

  onChangeEditInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      editText: event.target.value,
    });
  };

  onToggleComplete = () => {
    const { id, isCompleted, toggleComplete } = this.props;
    toggleComplete(id, isCompleted);
  };

  tick() {
    const { timeOfCreation } = this.props;
    this.setState({
      distanceFromCreation: formatDistanceToNow(timeOfCreation, { addSuffix: true, includeSeconds: true }),
    });
  }

  render() {
    const { id, isCompleted, deleteTask, editTask }: ITaskListProps = this.props;
    const { distanceFromCreation, editText } = this.state;

    return (
      <>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            name="input"
            defaultChecked={isCompleted}
            onClick={this.onToggleComplete}
          />
          <label htmlFor="input">
            <span className="description">{editText}</span>
            <span className="created">{distanceFromCreation}</span>
          </label>
          <button type="button" aria-label="edit" className="icon icon-edit" onClick={() => editTask(id)} />
          <button type="button" aria-label="delete" className="icon icon-destroy" onClick={() => deleteTask(id)} />
        </div>
        <form onSubmit={this.submitEditing}>
          <input type="text" className="edit" value={editText} onChange={this.onChangeEditInput} />
        </form>
      </>
    );
  }
}
