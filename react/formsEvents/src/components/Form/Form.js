import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    onchange(e) {
        
    }


    render() {
        return (
            <div>
                <form action="">
                    input <input type="text" value={this.state.value} />
                </form>
            </div>
        );
    }
}

export default Form;