import React from 'react';


export default class Footer extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className='footer-wrapper'>
                <i className="far fa-copyright"></i>
                <h3>2020 tomasz kawalek</h3>
            </div>
        )
    }
}