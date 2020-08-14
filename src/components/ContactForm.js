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
    // state={
    //     name:'',
    //     email:'',
    //     message:'',

    //     nameError:false,
    //     emailError:false,
    //     idError: false,
    //     messageError:false,

    //     messageSend:false,
    //     fetchError:false

    // };
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
            errors: errors
        })
    };

    sendForm = (name, email, message) => {
        fetch(`https://${window.location.host}/index.php`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, message
            })
        })
            .then((data)=> {
                console.log(data);
                this.setState({messageSend:true,fetchError:false})
            })
            .catch((error)=> {
                console.log(error);
                this.setState({messageSend:false,fetchError:true});
            })
    };

    handleSubmit = (e) => {
        e.preventDefault();

        let errors = {name:false, email:false, message:false};
        let hasErrors = false;

        // this.setState({messageSend:false});
        // let name = this.state.name;
        // let email = this.state.email;
        // let message = this.state.message;
        // let correctMessage = true;

        //RegEx cases//
        let nameRegex=/^.{1,200}$/;
        let emailRegex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let messageRegex=/^.{5,1000}$/;
        //===========//

        // if (!nameRegex.test(name)){
        //     this.setState({nameError:true});
        //     correctMessage=false;
        // }else{
        //     this.setState({nameError:false});
        // }

        // if (!emailRegex.test(email)){
        //     this.setState({emailError:true});
        //     correctMessage=false;
        // }else{
        //     this.setState({emailError:false});
        // }

        // if (!messageRegex.test(message)){
        //     this.setState({messageError:true});
        //     correctMessage=false;
        // }else{
        //     this.setState({messageError:false});
        // }

        // if (correctMessage){
        //     this.sendForm(name, email, message);
        // }

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

            fetch(`https://${window.location.host}/index.php`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then((resp)=> {
                return resp.json();
            })
            .then (data => {
                this.setState({
                    successFlag: true,
                    name: '',
                    email: '',
                    message: ''
                });
            })
            .catch((err)=> {
                console.log(err);
            })
        }
    };

    render() {
        return (
            <div className="contactForm-wrapper" id="contact">

                <div className="contactForm">
                    <h3>...Or try this form I built!</h3>
                    <div className='messageSend'>
                        {this.state.successFlag && <p className='send'>Thank you! Message sent.<br/>We'll get back to you soon.</p>}
                        {this.state.fetchError && <p className='error'>Message not sent!</p>}
                        {(!this.state.messageSend && !this.state.fetchError) && <p/>}
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="formBox">
                            <div className="formLeft">
                                <label>
                                    <p className="title">Name:</p>
                                    <input className={this.state.errors.name ? 'formUp input-error' : 'formUp'}
                                            type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                                    {(this.state.errors.name) && <span className='input-error-txt'>Incorrect name!</span>}
                                </label>
                                <label>
                                    <p className="title">Email:</p>
                                    <input className="formUp" type="text" name="email" placeholder onChange={this.handleChange} />
                                    {(this.state.emailError)?<span>Incorrect email!</span>:<span className='correct'/>}
                                </label>
                                <div className='sendButton-container'>
                                    <input className="sendButton" type="submit" value="Send" />
                                </div>
                            </div>
                            <div className="formRight">
                                <label className="formBottom">
                                    <p className="title"> Your message:</p>
                                    <textarea className="formMessage" name="message" placeholder onChange={this.handleChange} />
                                    {(this.state.messageError)?<span>Message too short!</span>:<span className='correct'/>}
                                </label>
                            </div>                            
                        </div>
                        
                    </form>
                </div>

            </div>
        )

    }
}

