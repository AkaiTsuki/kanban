import React, { Component, PropTypes } from 'react';

class Cover extends Component{
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return(
      <section className="fill cover">
        <div className="content">
            <h1 className="top text-center">Welcome to Kanban React App <br /><small>A demo application using React, Redux, ES6, Bootstrap and Webpack</small></h1>
            <div className="text-center"><i className="fa fa-spinner fa-pulse load-icon"></i></div>
            <h5 className="text-center">Loading Kanban Board</h5>
        </div>
      </section>
    )
  }

}

export default Cover
