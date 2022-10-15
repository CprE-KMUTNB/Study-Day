import React , {useState,useEffect} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import timeGridPlugin from '@fullcalendar/timegrid'
import '../Styles/Main.css'

const Main = () => {
  const [show, setShow] = useState(false);
  const [value,setValue] = useState({
    tittle:'',
    start:'',
    end:''
  })
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <input type='text place ' placeholder='Tittle' ></input>
      </div>
      <div className='rightside'>
        <FullCalendar
            plugins={[ dayGridPlugin, timeGridPlugin,interactionPlugin ]}
            headerToolbar={{
              center:'title',
              left:'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            selectable={true}
            select={handleSelect}
          />
          

          
      </div>
      
    </div>

  )
}
export default Main

