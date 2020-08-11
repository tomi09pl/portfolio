import React from 'react';

export default class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            active: false,
            prevScrollPos: window.pageYOffset,
            scrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const { prevScrollPos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const scrolled = prevScrollPos < currentScrollPos;

        this.setState({
            prevScrollPos: currentScrollPos,
            scrolled
        })
    }

    toggleClass = () => {
        const currentState = this.state.active;
        this.setState({
            active: !currentState,
        })
    }

    
    render(){

        const { active, scrolled } = this.state

        return(
            <div className='header-wrapper'>
                {/* <header className={scrolled ? 'scrolled' : ''}> */}
                <header className='scrolled'>
                    <div className='logo'>
                        <span>tomasz kawalek</span>
                        <span> • </span>
                        <span>front-end developer</span>
                    </div>

                    <nav className='main-nav'>
                        <ul className= {active ? 'main-nav-list nav-active' : 'main-nav-list'}>
                            <li>portfolio</li>
                            <li>skills</li>
                            <li>about me</li>
                            <li>contact</li>
                        </ul>

                        <div className={active? 'burger burger-clicked' : 'burger'} onClick={this.toggleClass}>
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
