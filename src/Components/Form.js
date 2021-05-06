import React, { Component } from "react";

class Form extends Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    state = {
        name: "",
        phone: "",
    };

    onChange(e){

        this.setState({
            
            [e.target.name] : e.target.value,
            [e.target.name] : e.target.value
        })
        
    }

    

    onSubmit(e) {
        e.preventDefault();
        this.props.addContact({
            ...this.state
        });

        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        

    }

    render() {
        return (
        <section className="inputArea">
            <form onSubmit={this.onSubmit} className="inputArea__form">
            <div className="inputArea__content">
                <input
                type="text"
                name="name"
                id="name"
                onChange = {this.onChange}
                placeholder="Enter a name"
                required
                />
                <input
                type="text"
                name="phone"
                id="phone"
                onChange = {this.onChange}
                placeholder="Enter a phone"
                required
                />
            </div>
            <div>
                <button className="submitButton">ADD</button>
            </div>
            </form>
        </section>
        );
    }
}

export default Form;
