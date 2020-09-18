import React, { Component } from 'react';

class Form extends Component {
    state = { 
        body: '',
        selectedId: 0
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state)
        this.setState({body: '', selectedId: 0})
    }

    onChange = (event) => {
        this.setState({
          body: event.target.value
        })
    }    
    
    render (){
        const {id, nameInput, nameButton, placeholder} = this.props;
        let value = (this.state.selectedId > 0) ? this.state.selectedId : this.state.body;
        return (
            <form id={id} onSubmit={this.onSubmitHandler}>
				<input type="text" name={nameInput} value={this.state.body} placeholder={placeholder} onChange={this.onChange}/>
				<button>{nameButton}</button>
			</form>
        )
    }
}

export default Form