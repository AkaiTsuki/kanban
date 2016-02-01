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

//
// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       notes: [
//         {
//           id: uuid.v4(),
//           task: 'Learn Webpack'
//         },
//         {
//           id: uuid.v4(),
//           task: 'Learn React'
//         },
//         {
//           id: uuid.v4(),
//           task: 'Do laundry'
//         }
//       ]
//     };
//   }
//
//   render() {
//     const notes = this.state.notes;
//
//     return (
//       <div>
//         <button onClick={this.addNote}>+</button>
//         <Notes notes={notes} onEdit={this.editNote} onDelete={this.deleteNote}></Notes>
//       </div>
//     );
//   }
//

//

//
//   deleteNote = (id) => {
//     const notes = this.state.notes.filter((note) => note.id !== id);
//
//     this.setState({notes});
//   };
// }
