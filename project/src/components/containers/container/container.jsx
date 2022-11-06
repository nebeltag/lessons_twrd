import React, { Component } from 'react';
import './style.css';

import ListItem from '../../component/component.jsx';

export default class TestContainer extends Component {
  constructor(props) {
    super(props)

    //props.nameProp >> ['Имя1', 'Имя2']
  }

  render() {
    let { names } = this.props;//props = {nameProp:[]}
    let ListItems = names.map(el => <ListItem nameProp={el} />)//ListItem ===<li>prop</li>
    return (
      <ul>
        {ListItems}
      </ul>
    )
  }
}