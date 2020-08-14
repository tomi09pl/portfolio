import React from 'react';

export default class AboutMe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render(){
        return(
            <div name='aboutMe'>
                <h1>about me</h1>
                <section className='about-me-txt'>
                    <p>
                        Hi, I'm Tom - Front-end developer. Currently I do freelance based work helping artists and entrepreneurs establish their online presence. 
                        I love the process of creation and that's what inspired me to become a developer - the influence to shape our online reality.
                    </p>
                    <p>
                        I'm at the beginning of developer's learning curve with established grounds in HTML, CSS, JS and React. 
                        I'm looking for opportunity to work with JavaScript frameworks and as long term goal I would like to focus more on mobile applications.
                    </p>
                    <p>
                        If you're still reading this - thank you! ...And I won't bore you with my hobbies :) 
                    </p>
                    <p>
                        If you'd like to get in touch please see my <span>contact</span> section.
                    </p>
                </section>
            </div>
        )
    }
}