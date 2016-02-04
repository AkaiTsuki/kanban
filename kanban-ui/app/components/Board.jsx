import React, { Component, PropTypes } from 'react';
import Lane from './Lane.jsx'

class Board extends Component{
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { board, isLoading, actions } = this.props;
    return (
      <section className="board fill">
        <div className="row">
          <Lane laneId="backlog" isLoading={isLoading.backlog} lane={board.backlog} titleBgColor="bg-wet-asphalt" actions={actions} />
          <Lane laneId="open" isLoading={isLoading.open} lane={board.open} titleBgColor="bg-turquoise" actions={actions} />
          <Lane laneId="inProcess" isLoading={isLoading.inProcess} lane={board.inProcess} titleBgColor="bg-peter-river" actions={actions} />
          <Lane laneId="done" isLoading={isLoading.done} lane={board.done} titleBgColor="bg-emerald" actions={actions} />
        </div>
      </section>
    );
  }
}

export default Board;
