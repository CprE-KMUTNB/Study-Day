import React ,{useEffect}from 'react'
import colorsthemes from '../img/Group 40.svg';
import '../Styles/About.css'
import Someimage from '../img/Group 35.svg';
import { Typewriter } from 'react-simple-typewriter'
import Api from'../img/Api.png'
import Typ from'../img/Typ.png'

function About_page(){


    return (
        <div className='About'>
            <div className='leftside'>
                <div className='Created'>
                    <img src={Someimage} />
                </div>
                <div className='Colors'>
                    <h1>Color and Themes</h1>
                    <p1>We try to create  a memoable color by using the opposite colors.</p1>
                </div>
                <div className='btm'>
                    <img src={colorsthemes}></img>
                </div>
            </div>
            <div className='rightside'>
                <div class="polaroid">
                    <div className='Mile'>
                        <img src={Api}/>
                    </div>
                    <div class="container">
                        <Typewriter
                                words={["Hello I'm Apiravit", 'AKA Mild', 'Backend Developer', ]}
                                loop={Infinity}
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={3000}
                            />
                    </div>
            
                </div>
                <div class="polaroid2">
                    <div className='Preme'>
                        <img src={Typ}/>
                    </div>
                    <div class="container2">
                        <Typewriter
                                words={["Hello I'm Thanyapat", 'AKA Preme ', 'Frontend Developer', ]}
                                loop={Infinity}
                                typeSpeed={65}
                                deleteSpeed={40}
                                delaySpeed={3000}
                            />
                    </div>
            
                </div>



            </div>
        </div>
    );
}
export default About_page