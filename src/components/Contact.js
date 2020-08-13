import React from 'react';
import ContactForm from './ContactForm';

export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <h1>contact</h1>
                <div className='section-wrapper'>
                    
                    <section className='contact-direct'>
                        <h3>Get in touch with me directly...</h3>

                        <div className='icon-wrapper'>
                            <div>
                                <a href='https://github.com/tomi09pl' target='_blank' rel="noopener noreferrer">
                                    <i class="fas fa-at"></i>
                                </a>
                                <span>tomasz.kawalek@gmail.com</span>
                            </div>
                            <div>
                                <a href='https://github.com/tomi09pl' target='_blank' rel="noopener noreferrer">
                                    <i class="fab fa-github"></i>
                                </a>
                                <span>Github</span>
                            </div>
                            <div>
                                <a href='https://www.linkedin.com/in/tomasz-kawalek/' target='_blank' rel="noopener noreferrer">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <span>LinkedIn</span>
                            </div>
                        </div>
                    </section>

                    <section className='contact-form'>
                        <ContactForm/>
                    </section>

                </div>
            </div>
        )
    }
}