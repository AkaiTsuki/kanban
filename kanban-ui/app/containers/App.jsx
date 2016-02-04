import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as KanbanAction from '../actions/KanbanAction';
import Board from '../components/Board.jsx';

class App extends React.Component {
  render() {
    const {isLoading, board, actions} = this.props;
    return (
        <Board board={board} isLoading={isLoading} actions={actions} />
    );
  }

  componentDidMount() {
    const { dispatch, board, actions } = this.props
    dispatch(KanbanAction.fetchData())
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
    board: state.board
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(KanbanAction, dispatch),
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
