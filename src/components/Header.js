import React from 'react';
import { Link } from 'react-scroll';

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

    activeFalse = () => {
        this.setState({
            active: false
        })
    }

    
    render(){

        const { active, scrolled } = this.state

        return(
            <div className='header-wrapper'>
                {/* <header className={scrolled ? 'scrolled' : ''}> */}
                <header className='scrolled'>
                    <div className='logo'>
                        <Link 
                            activeClass='active'
                            to='portfolio'  
                            spy={true}
                            smooth={true}
                            duration={600}
                            offset={-100}
                            className='main-nav-list-link'
                            onClick={this.activeFalse}
                        ><span>tomasz kawalek</span>
                         <span> &#8226; </span>
                         <span>front-end developer</span>
                        </Link>
                    </div>

                    <nav className='main-nav'>
                        <ul className= {active ? 'main-nav-list nav-active' : 'main-nav-list'}>
                            <li><Link 
                                    activeClass='active'
                                    to='portfolio'  
                                    spy={true}
                                    smooth={true}
                                    duration={600}
                                    offset={-100}
                                    className='main-nav-list-link'
                                    onClick={this.activeFalse}
                                >portfolio</Link></li>
                            <li><Link 
                                    activeClass='active'
                                    to='skills'  
                                    spy={true}
                                    smooth={true}
                                    duration={600}
                                    offset={-50}
                                    className='main-nav-list-link'
                                    onClick={this.activeFalse}
                                >skills</Link></li>
                            <li><Link 
                                    activeClass='active'
                                    to='aboutMe'  
                                    spy={true}
                                    smooth={true}
                                    duration={600}
                                    offset={-50}
                                    className='main-nav-list-link'
                                    onClick={this.activeFalse}
                                >about me</Link></li>
                            <li><Link 
                                    activeClass='active'
                                    to='contact'  
                                    spy={true}
                                    smooth={true}
                                    duration={600}
                                    offset={-50}
                                    onClick={this.activeFalse}
                                    className='main-nav-list-link'
                                >contact</Link></li>
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
