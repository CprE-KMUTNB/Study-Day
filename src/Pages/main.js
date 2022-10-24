import React , {useState,useEffect} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import timeGridPlugin from '@fullcalendar/timegrid'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import {createEvent , listEvent} from '../components/function/fullcalendar';

import {useNavigate} from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Main.css'



const Main = () => {
  const navigate=useNavigate()
  const [show, setShow] = useState(false);
  const [value,setValue] = useState({
    title:'',
    start:'',
    end:''
  })
  const [events, setEvents] = useState([]);

  useEffect(()=>{
    loadData()
  },[])

  const loadData=()=>{
    listEvent()
    .then(res=>{
      console.log(res)
      setEvents(res.data)
    }).catch(err=>{
      console.log(err)
    })
  }
  const subject =[
    {}
  ]
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleOk=()=>{
    //sent to API
    console.log(value) //แทน function value ={ tittle : start : end}
    createEvent(value)
    .then (res=>{
      console.log(res.data)

    }).catch(err=>{
      console.log(err)
    })
    setShow(false);
  }

  
  const handleSelect=(info)=>{
    handleShow();
    console.log(info)
    setValue({
      ...value,
      start:info.startStr,
      end:info.endStr
    })
  }
  const onChangeValues=(e)=>{
    console.log(e.target.value)
    setValue({...value,[e.target.name]:e.target.value})
  }

  return (
    <div className='componentmain'>
      <div className='leftside'>
          <h1>Welcome {localStorage.getItem('username')}</h1>
          <div className='Subject'>
            <h1>Subject</h1>
            <input placeholder='Enter subject'></input>
            <button>ok</button>
            <select type ='color' name ='color' onChange = {onChangeValues} >
                      <option value=''>blue</option>
                      <option value='#DB4437'>red</option>
                      <option value ='#8DDD6A'>green</option>
                      <option value='#FFBD59'>orange</option>
              </select>
          </div>
          <div className='Riminder'>
                <h1>Reminder</h1>
                <input placeholder='Enter reminder'></input>
                <button>Ok</button>
          </div>
            
      </div>
      <div className='rightside'>
        <FullCalendar
            plugins={[ dayGridPlugin, timeGridPlugin,interactionPlugin ]}
            headerToolbar={{
              center:'title',
              left:'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            events={[
              //events
              {title:'ส่งงาน FontEnd',start:"2022-10-21",end:"2022-10-23",color:"#8DDD6A"},
              { title: 'ส่งงาน BackEnd', start: '2022-10-28' ,end:"2022-10-30",color:'#FFBD59'},
              {title:'สอบ Discrete',start:'2022-10-11',end:'2022-10-13',color:'red'},
              { title: 'สอบ Logic', start: '2022-10-03' },

            ]}
            selectable={true}
            select={handleSelect}
          />
          <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Adding Event</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <input name = 'title' onChange = {onChangeValues} placeholder='title'/>
                    <select type ='color' name ='color' onChange = {onChangeValues} >
                      <option value=''>--Select color--</option>
                      <option value='#DB4437'>red</option>
                      <option value ='#8DDD6A'>green</option>
                      <option value='#FFBD59'>orange</option>
                    </select>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleOk}>
                      Ok
                    </Button>
                  </Modal.Footer>
            </Modal>
      </div>
      
    </div>

  )
}
export default Main