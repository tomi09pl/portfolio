import React from 'react';

export default class ContactForm extends React.Component{
    state={
        name:'',
        email:'',
        message:'',

        nameError:false,
        emailError:false,
        idError: false,
        messageError:false,

        messageSend:false,
        fetchError:false

    };
    handleChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
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
        this.setState({messageSend:false});
        let name = this.state.name;
        let email = this.state.email;
        let message = this.state.message;
        let correctMessage = true;

        let nameRegex=/^.{1,200}$/;

        let emailRegex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        let messageRegex=/^.{5,1000}$/;


        if (!nameRegex.test(name)){
            this.setState({nameError:true});
            correctMessage=false;
        }else{
            this.setState({nameError:false});
        }

        if (!emailRegex.test(email)){
            this.setState({emailError:true});
            correctMessage=false;
        }else{
            this.setState({emailError:false});
        }

        if (!messageRegex.test(message)){
            this.setState({messageError:true});
            correctMessage=false;
        }else{
            this.setState({messageError:false});
        }

        if (correctMessage){
            this.sendForm(name, email, message);
        }
    };

    render() {
        return (
            <div className="home-contact-container" id="contact">

                <div className="contactForm">
                    <h3>...Or try this form I built!</h3>
                    <div className='messageSend'>
                        {this.state.messageSend && <p className='send'>Thank you! Message sent.<br/>We'll get back to you soon.</p>}
                        {this.state.fetchError && <p className='error'>Message not sent!</p>}
                        {(!this.state.messageSend && !this.state.fetchError) && <p/>}
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="formBox">
                            <div className="formLeft">
                                <label>
                                    <p className="title">Name:</p>
                                    <input className="formUp" type="text" name="name" placeholder onChange={this.handleChange} />
                                    {(this.state.nameError)?<span>Incorrect name!</span>:<span className='correct'/>}
                                </label>
                                <label>
                                    <p className="title">Email:</p>
                                    <input className="formUp" type="text" name="email" placeholder onChange={this.handleChange} />
                                    {(this.state.emailError)?<span>Incorrect email!</span>:<span className='correct'/>}
                                </label>
                            </div>
                            <div className="formRight">
                                <label className="formBottom">
                                    <p className="title"> Your message:</p>
                                    <textarea className="formMessage" name="message" placeholder onChange={this.handleChange} />
                                    {(this.state.messageError)?<span>Message too short!</span>:<span className='correct'/>}
                                </label>
                            </div>
                        </div>
                        <input className="sendButton" type="submit" value="Send" />
                    </form>
                </div>

            </div>
        )

    }
}

