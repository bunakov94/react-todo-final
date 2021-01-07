import React, { Component } from 'react';
import { NewTaskFormProps } from '../../types/interfaces';
import './NewTaskForm.scss';

export default class NewTaskForm extends Component<NewTaskFormProps> {
  state = {
    text: '',
  };

  onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      text: event.target.value,
    });
  };

  onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { addTask } = this.props;
    const { text } = this.state;
    addTask(text);
    this.setState({
      text: '',
    });
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input className="new-todo" value={text} placeholder="What needs to be done?" onChange={this.onChangeInput} />
      </form>
    );
  }
}
