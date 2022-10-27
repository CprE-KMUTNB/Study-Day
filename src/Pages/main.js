import React , {useState,useEffect} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import timeGridPlugin from '@fullcalendar/timegrid'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';

import CreateIcon from '@mui/icons-material/Create';

import {createEvent , listEvent ,updateEvent,deleteEvent} from '../components/function/fullcalendar';

import {useNavigate} from 'react-router-dom'

import '../Styles/Main.css'



const Main = () => {
  const navigate=useNavigate()

  const user_id = localStorage.getItem('userid')
  const [show, setShow] = useState(false);

  const [showevent,setShowevent] = useState(false);

  const handleCloseevent = () => setShowevent(false);
  const handleShowevent = () => setShowevent(true);
  const handleOkevent=()=>{
    setShowevent(false);
  }

  const [value,setValue] = useState({
    "user": user_id, // <-- Problem
    title:'',
    start:'',
    end:'',
  })
  const [events, setEvents] = useState([]);

  const hadleClick = (info)=>{
    console.log(info)
    handleShowevent()
    const eventid = info.event._def.publicId
    const titleevent = info.event._def.title
    const color = info.event._def.ui.backgroundColor
    console.log(info)
    console.log(eventid)
    console.log(titleevent)
    localStorage.setItem('title',titleevent)
    localStorage.setItem('color',color)
    localStorage.setItem('eventid',eventid)
  }

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
    console.log(value) 
    createEvent(value)
    .then (res=>{
      setValue({...value,tittle:''})
      loadData()
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
  const handdleChange=(info)=>{
    console.log(info)
    
    const value ={
      id:info.event._def.publicId,
      start:info.event.startStr,
      end:info.event.endStr,
      title:info.event._def.title,
      user:user_id, //<-- Problem !!!!!
      color:localStorage.getItem('color')
    }
    console.log(value)
    const idl=value.id
    updateEvent(value,idl)
      .then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
  }
  const handdleDelete=(info)=>{
    const ide=localStorage.getItem('eventid')
    deleteEvent(ide)
      .then(res=>{
        loadData()
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
      setShowevent(false);


  }
  return (
    <div className='componentmain'>
      <div className='leftside'>
          <h1>Welcome {localStorage.getItem('username')}</h1>
          <div className='Subject'>
            <h1>Subject</h1>
            <LibraryBooksRoundedIcon/>
            <input placeholder='Enter subject'></input>
            <button>ok</button>
            <select type ='color' name ='color' onChange = {onChangeValues} >
                      <option value=''>--Select tag--</option>
                      <option value='#4285F4'>blue</option>
                      <option value='#DB4437'>red</option>
                      <option value ='#8DDD6A'>green</option>
                      <option value='#FFBD59'>orange</option>
            </select>
            <ul>
              <li>Adele</li>
              <li>Agnes</li>
              <li>Billy</li>
              <li>Bob</li>
            </ul>
          </div>
          <div className='Riminder'>
                <h1>Reminder</h1>
                <input placeholder='Enter reminder'></input>
                <button>Ok</button>
          </div>
            
      </div>
      <div className='rightside'>
          <div className='calendar'>
          <FullCalendar
              plugins={[ dayGridPlugin, timeGridPlugin,interactionPlugin ]}
              headerToolbar={{
                center:'title',
                left:'dayGridMonth,timeGridWeek,timeGridDay'
              }}
              events={
                events
              }
              selectable={true}
              select={handleSelect}
              eventClick={hadleClick}
              editable={true}
              eventChange={handdleChange}

            />
            <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Adding Event</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <input name = 'title' onChange = {onChangeValues} placeholder='title'/>
                      <select type ='color' name ='color' onChange = {onChangeValues} >
                        <option value=''>--Select color--</option>
                        <option value='#4285F4'>blue
                        </option>
                        <option value='#DB4437'>red
                        </option>
                        <option value ='#8DDD6A'>green
                        </option>
                        <option value='#FFBD59'>orange
                        </option>
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

              <Modal show={showevent} onHide={handleCloseevent}>
                    <Modal.Header closeButton>
                      <Modal.Title>Show event</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <h1>{localStorage.getItem('title')}
                        <CreateIcon>

                        </CreateIcon>
                      </h1>

                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="danger" onClick={handdleDelete}>Delete
                        <DeleteForeverIcon fontSize='small'></DeleteForeverIcon>
                      </Button>
                      <Button variant="secondary" onClick={handleCloseevent}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleOkevent}>
                        Ok
                      </Button>
                    </Modal.Footer>
              </Modal>
          </div>
          

      </div>
      
    </div>

  )
}
export default Main