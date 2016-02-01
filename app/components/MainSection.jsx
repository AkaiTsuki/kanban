import React, { Component, PropTypes } from 'react';
import TaskItem from './TaskItem.jsx';

class MainSection extends Component{
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { notes, actions } = this.props;
    return (
      <section className="main container">
        <ul className="task-list">
            {notes.map(note=> <TaskItem key={note.id} note={note} {...actions} />)}
        </ul>
      </section>
    )
  }
}

export default MainSection;
