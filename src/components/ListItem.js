 import React from 'react'
 import { Link } from 'react-router-dom'

 const ListItem = ({note}) => {
     return (
         <div className="notes-list-item" >
             <Link to={`/note/${note.id}`} >
             <h2>{note.body}</h2>
             </Link>
         </div>
     )
 }
 
 export default ListItem
 