import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as KanbanAction from '../actions/KanbanAction';
import Board from '../components/Board.jsx';
import Cover from '../components/Cover.jsx';

class App extends React.Component {
  render() {
    const {isLoading, initialized, board, actions} = this.props;
    return this.renderContainer(isLoading, initialized, board, actions);
  }

  componentDidMount() {
    const { dispatch, board, actions } = this.props
    dispatch(KanbanAction.loadBoard())
  }

  renderContainer = (isLoading, initialized, board, actions) => {
    if(!initialized){
      console.log("Render loading cover")
      return this.renderCover()
    } else {
      console.log("Render loading board")
      return this.renderBoard(isLoading, board, actions);
    }
  };

  renderBoard = (isLoading, board, actions) => {
    return (
      <div className="container-fluid" >
        <Board board={board} isLoading={isLoading} actions={actions} />
      </div>
    )
  };

  renderCover = () => {
    return (<Cover />);
  };
}

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
    board: state.board,
    initialized: state.initialized
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
