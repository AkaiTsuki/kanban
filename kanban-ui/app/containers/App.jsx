import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as KanbanAction from '../actions/KanbanAction';
import Board from '../components/Board.jsx';

class App extends React.Component {
  render() {
    const {board, actions} = this.props;
    return (
        <Board board={board} actions={actions} />
    );
  }
}

function mapStateToProps(state) {
  return {
    board: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(KanbanAction, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
