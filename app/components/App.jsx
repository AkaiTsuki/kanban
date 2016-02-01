import React from 'react';
import MainSection from './MainSection.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as NoteAction from '../actions/NoteAction';

class App extends React.Component {
  render() {
    const {notes, actions} = this.props;
    return (
      <div>
        <MainSection notes={notes} actions={actions} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notes: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(NoteAction, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
