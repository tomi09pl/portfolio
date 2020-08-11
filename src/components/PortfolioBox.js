import React from 'react';

export default class PortfolioBox extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
        }
    }



    render(){

        const { projectName, image, technologies, demo, code } = this.props;

        return(
            <div className='portfolio-box'>
                <p>{projectName}</p>

                <div className='project-img'>
                    <img src={image} alt={projectName ? projectName : 'Error while loading'}></img>
                    <div className='project-btns'>
                        <a href={demo} target='_blank' rel="noopener noreferrer">demo</a>
                        <a href={code} target='_blank' rel="noopener noreferrer">code</a>
                    </div>
                </div>

                <p>{technologies}</p>
            </div>
        )
    }



}