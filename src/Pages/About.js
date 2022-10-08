import React from 'react'
import colorsthemes from '../img/Group 40.svg';
import '../Styles/About.css'
import Someimage from '../img/Group 35.svg';
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
            </div>
        </div>
    );
}
export default About_page