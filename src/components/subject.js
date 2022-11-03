import React from 'react'
import Button from 'react-bootstrap/Button';
function Subjectcom() {
  return (
      <div className='Subjectcom'>
            <h1>Subject</h1>
            <input name = 'Enter subject'  placeholder='title'/>
            <select type ='color' name ='color' /*</div>onChange = {onChangeValues}*/ >
                      <option value=''>--Select tag--</option>
                      <option value='#4285F4'>blue</option>
                      <option value='#DB4437'>red</option>
                      <option value ='#8DDD6A'>green</option>
                      <option value='#FFBD59'>orange</option>
            </select>
            <Button variant="primary" >Ok</Button>
            <ul className='list'>
              <li id='1' style={{backgroundColor :'#DB4437' , borderRadius:'5px' , width:'50%' ,margin: '4%'}}>Discrete math</li>
              <li id='2' style={{backgroundColor :'#4285F4' , borderRadius:'5px' , width:'50%',margin: '4%'} }>Statistic</li>
              <li id ='3'style={{backgroundColor :'#FFBD59' , borderRadius:'5px' , width:'50%',margin: '4%'} }>Logic</li>
            </ul>
      </div>
  )
}

export default Subjectcom
