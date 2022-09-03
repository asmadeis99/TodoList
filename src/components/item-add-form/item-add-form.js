import React, {Component} from 'react';
import './item-add-form.css'
export default class ItemAddForm extends Component {

    state = {
        label: ''
    }

    setLabel = (e) => {
        this.setState({label: e.target.value});
    }

    onSubmit = (e) => {
        const {label} = this.state;
        const {addItem} = this.props;
        e.preventDefault()
        addItem(label)
        this.setState({label: ''})
    }

    render() {
        return(
            <form className='item-add-form d-flex'
                  onSubmit={this.onSubmit}>
                <input onChange={this.setLabel} 
                    type="text" 
                    className="form-control"
                    placeholder="Add Task"
                    value={this.state.value}/>
                <button 
                    className="btn btn-oulline-secondary">
                    Add Item</button>
            </form>
        )
    }
};