import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

  state = {
    term: ''
  }

  onSearchChange = (e) => {
    const {onSearchChange} = this.props;
    const {term} = this.state
    this.setState({term: e.target.value.toLowerCase()})
    onSearchChange(term);
  }
  render(){
    return (
      <input type="text"
                className="form-control search-input"
                placeholder="type to search"
                onChange={this.onSearchChange}
                value={this.state.term} />
                
    );
  }
};


