import React, { Component, PropTypes } from 'react';
import Lane from './Lane.jsx'

class Board extends Component{
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { board, actions } = this.props;
    return (
      <section className="board fill">
        <div className="row">
          <Lane laneId="backlog" title={board.backlog.title} titleBgColor="bg-wet-asphalt" tasks={board.backlog.tasks} actions={actions} />
          <Lane laneId="open" title={board.open.title} titleBgColor="bg-turquoise" tasks={board.open.tasks} actions={actions} />
          <Lane laneId="inProcess" title={board.inProcess.title} titleBgColor="bg-peter-river" tasks={board.inProcess.tasks} actions={actions} />
          <Lane laneId="done" title={board.done.title} titleBgColor="bg-emerald" tasks={board.done.tasks} actions={actions} />
        </div>
      </section>
    );
  }
}

export default Board;
