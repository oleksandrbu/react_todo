import React, { Component } from 'react';

class Form extends Component {
    state = { 
        body: ''
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state)
        this.setState({body: ''})
    }

    onChange = (event) => {
        this.setState({
          body: event.target.value
        })
    }    
    
    render (){
        const {id, nameInput, nameButton, placeholder} = this.props;
        return (
            <form id={id} onSubmit={this.onSubmitHandler}>
				<input type="text" name={nameInput} value={this.state.body} placeholder={placeholder} onChange={this.onChange}/>
				<button>{nameButton}</button>
			</form>
        )
    }
}

export default Form