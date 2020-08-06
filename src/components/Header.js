import React from 'react';

export default class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            active: false
        }
    }

    toggleClass = () => {
        const currentState = this.state.active;
        this.setState({
            active: !currentState
        })
    }

    render(){
        return(
            <div>
                <header>
                    <div className='logo'>
                        <span>tomasz kawalek</span>
                        <span> • </span>
                        <span>front-end developer</span>
                    </div>

                    <nav className='main-nav'>
                        <ul className= {this.state.active ? 'main-nav-list nav-active' : 'main-nav-list'}>
                            <li>portfolio</li>
                            <li>skills</li>
                            <li>about me</li>
                            <li>contact</li>
                        </ul>

                        <div className={this.state.active? 'burger burger-clicked' : 'burger'} onClick={this.toggleClass}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }

}
