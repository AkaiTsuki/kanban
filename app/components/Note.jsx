import React from 'react';

export default class Note extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    }
  }

  render() {
    if(this.state.editing){
      return this.renderEditing();
    } else {
      return this.renderNote();
    }
  }

  renderEditing = () => {
    return <input type="text"
      ref={
        (e) => e ? e.selectionStart = this.props.task.length : null
      }
      autoFocus={true}
      defaultValue={this.props.task}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />;
  };

  renderNote = () => {
    // If the user clicks a normal note, trigger editing logic.
    return (
      <div >
        <span onClick={this.edit}>{this.props.task}</span>
        <button onClick={this.delete}>X</button>
      </div>
    );
  };

  edit = () => {
    this.setState({
      editing: true
    });
  };

  delete = () => {
    this.props.onDelete();
  };

  checkEnter = (e) => {
    // The user hit *enter*, let's finish up.
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  };

  finishEdit = (e) => {
    // `Note` will trigger an optional `onEdit` callback once it
    // has a new value. We will use this to communicate the change to
    // `App`.
    //
    // A smarter way to deal with the default value would be to set
    // it through `defaultProps`.
    //
    // See *Typing with React* chapter for more information.
    const value = e.target.value;

    if(this.props.onEdit && value.trim()) {
      this.props.onEdit(value);

      // Exit edit mode.
      this.setState({
        editing: false
      });
    }
  };
}
