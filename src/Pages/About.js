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
                    <h1>Colors and Themes</h1>
                    <p1>We try to create a memorable color by using the complement colors.</p1>
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
                        <span style={{ color: '#4c4c4c', fontWeight: 'bold' }}>
                            <Typewriter
                                    words={["Hello I'm Apiravit", 'Mild', 'I am Backend Developer', ]}
                                    loop={Infinity}
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={3000}
                                />
                        </span>
                    </div>
            
                </div>
                <div class="polaroid2">
                    <div className='Preme'>
                        <img src={Typ}/>
                    </div>
                    <div class="container2">
                        <span style={{ color: '#4c4c4c', fontWeight: 'bold' }}>
                            <Typewriter

                                    words={["Hello I'm Thanyapat", 'Preme ', 'I am Frontend Developer', ]}
                                    loop={Infinity}
                                    typeSpeed={65}
                                    deleteSpeed={40}
                                    delaySpeed={3000}
                                />
                        </span>
                    </div>
            
                </div>



            </div>
        </div>
    );
}
export default About_page