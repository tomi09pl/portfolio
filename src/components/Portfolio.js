import React from 'react';
import PortfolioBox from './PortfolioBox';
import billycune from '../assets/billycune.png';
import giveaway from '../assets/giveaway.png';

const projects = [
    {
        name: 'Billy Cune',
        tech: ['HTML5', 'SASS', 'ReactJS', 'PHP'],
        image: billycune,
        demo: 'https://www.billycune.com',
        code: 'https://github.com'
    },
    {
        name: 'Give Away in Good Hands',
        tech: ['HTML5', 'SASS', 'ReactJS'],
        image: giveaway,
        demo: 'https://tomi09pl.github.io/give_away/#/',
        code: 'https://github.com/tomi09pl/give_away'
    },
    {
        name: 'Billy Cune',
        tech: ['HTML5', 'SASS', 'ReactJS', 'PHP'],
        image: billycune,
        demo: 'https:\\www.billycune.com',
        code: 'https:\\github.com'
    },
    {
        name: 'Billy Cune',
        tech: ['HTML5', 'SASS'],
        image: billycune,
        demo: 'https:\\www.billycune.com',
        code: 'https:\\github.com'
    },
]

export default class Portfolio extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
        }
    }


    render(){
        return(
            <div className='portfolio-wrapper' name='portfolio'>
                <h1>portfolio</h1>

                <div className='boxes-wrapper'>
                    {projects.map((el) => (
                        <PortfolioBox projectName={el.name} technologies={Array.prototype.join.call(el.tech,' \u2022 ')} image={el.image} demo={el.demo} code={el.code}/>
                    ))}
                </div>

            </div>
        )
    }



}