import React from 'react'
import colorsthemes from '../img/Group 40.svg';
function About_page(){
    return (
        <div className='leftside'>
            <div className='Created'>
                <h1>Created By</h1>
                <p1>Thanyapat J</p1>
                <p2>Apirawit T</p2>
            </div>
            <div className='Colors'>
                <h1>Color and Themes</h1>
                <p1>We try to create  a memoable color by using the opposite colors.</p1>
                <img src={colorsthemes}></img>
            </div>
        </div>
    );
}
export default About_page