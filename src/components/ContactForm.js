import React from 'react';

export default class ContactForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            errors: {
                name: false,
                email: false,
                message: false,
            }
        }
    }

    handleChange = e =>{

        let errors = this.state.errors;

        switch (e.target.name) {
            case 'name':
                errors.name = false;
                break;
            case 'email':
                errors.email = false;
                break;
            case 'message':
                errors.message = false;
                break;
            default:
                break;
        }

        this.setState({
            [e.target.name]:e.target.value,
            fetchError: false,
            errors: errors
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();

        let errors = {name:false, email:false, message:false};
        let hasErrors = false;

        //RegEx cases//
        let nameRegex=/^.{1,200}$/;
        let emailRegex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let messageRegex=/^.{5,1000}$/;
        //===========//

        if (!nameRegex.test(this.state.name)){
            errors.name = true;
            hasErrors = true
        }

        if (!emailRegex.test(this.state.email)){
            errors.email = true;
            hasErrors = true
        }

        if (!messageRegex.test(this.state.message)){
            errors.message = true;
            hasErrors = true
        }

        this.setState({
            errors: errors,
            successFlag: false
        });

        if (!hasErrors) {
            const data = {name: this.state.name, email:this.state.email, message:this.state.message};

            fetch(`https://www.tomaszkawalek.com/index.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
            })
            .then (() => {
                this.setState({
                    successFlag: true,
                    name: '',
                    email: '',
                    message: ''
                });
            })
            .catch((err)=> {
                console.log(err);
                this.setState({
                    fetchError: true
                });
            });
        }
    };

    render() {
        return (
            <div className="contactForm-wrapper">

                <div className="contactForm">
                    <h3>...Or try this form I built!</h3>
                    <div className='messageSend'>
                        {this.state.successFlag && <p className='send'>Thank you! Message sent.<br/>We'll get back to you soon.</p>}
                        {this.state.fetchError && <p className='error'>Message not sent!</p>}
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="formBox">
                            <div className="formLeft">
                                <label>
                                    <p className="title">Name:</p>
                                    <input className={this.state.errors.name ? 'formUp input-error' : 'formUp'}
                                            type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                                    {this.state.errors.name && <span className='input-error-txt'>Incorrect name!</span>}
                                </label>
                                <label>
                                    <p className="title">Email:</p>
                                    <input className={this.state.errors.email ? "formUp input-error" : 'formUp'}
                                            type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                                    {this.state.errors.email && <span className='input-error-txt'>Incorrect email!</span>}
                                </label>
                            </div>
                            <div className="formRight">
                                <label className="formBottom">
                                    <p className="title"> Your message:</p>
                                    <textarea className={this.state.errors.message ? 'formMessage input-error' : 'formMessage'}
                                                name="message" value={this.state.message} onChange={this.handleChange} />
                                    {this.state.errors.message && <span className='input-error-txt'>Message too short!</span>}
                                </label>
                            </div>                                            
                        </div>

                        <div className='sendButton-container'>
                            <input className="sendButton" type="submit" value="Send" />
                        </div>   
                        
                    </form>
                </div>

            </div>
        )

    }
}

