import React from 'react';

export default class Skills extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {

        return(
            <div name='skills'>
                <h1>skills</h1>
                    <div className='skills-wrapper'>
                        <div className='frontend-wrapper icons-container'>
                            <div className='headers'>
                                <h3>front-end</h3>
                            </div>
                            <div className='fontend-icons'>
                                <i className="fab fa-html5"><div>html5</div></i>
                                <i className="fab fa-css3-alt"><div>css3</div></i>
                                <i className="fab fa-sass"><div>sass</div></i>
                                <i className="fab fa-js-square"><div>js es6</div></i>
                                <i className="fab fa-react"><div>react</div></i>                              
                            </div>
                        </div>
                        <div className='others-wrapper icons-container'>
                            <h3>other tools</h3>
                            <div className='others-icons'>
                                <i className="fab fa-git-alt"><div>git</div></i>
                                <i className="fab fa-npm"><div>npm</div></i>
                                <i className="fab fa-adobe"><div>photoshop</div></i>
                                <i className="fab fa-gulp"><div>gulp</div></i>
                                <i className="fab fa-slack"><div>slack</div></i>
                                <i className="fab fa-trello"><div>trello</div></i>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}