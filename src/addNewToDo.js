import React, { Component } from 'react';
import axios from 'axios';

import ListItems from './listItems';


export default class AddNewToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makeDo: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit() {

    axios.post({
      method: "POST",
      url: '/api/tasks',
      data: {
        task: document.getElementById("makeDo").value
      }
    }).then(function() {
      axios.get({
        method: "GET",
        url: "/api/tasks"
      })
    }).then(function(res) {
      console.log(res.data);
    });
  }

  render() {
    return (
      <div className="addNew">
        <input type="textArea" id="makeDo" />
        <button type="submit" onClick={this.onSubmit}>Submit</button>
        {this.state.makeDo}
        <ListItems />
      </div>
    );
  }
}