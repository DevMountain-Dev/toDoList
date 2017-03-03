import React, { Component } from 'react';
import Item from './item';

export default class ListItems extends Component {
 
 constructor(props) {
   super(props);

   this.state = {
     items: ''
   }
 }
 /*renderItems() {
   return this.state.items.map(item => {
     return (
       <li 
       key={item}
       
       >{item}</li
     )
   } )
 }*/
 
  render() {
    return (
      <section className="list-items-container">
        list items section
        {this.renderItems}
      </section>
    );
  }
}