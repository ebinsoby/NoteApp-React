 import React from 'react'
 import { Link } from 'react-router-dom'

 let getTime = (note)=>{
     return new Date(note.updated).toLocaleDateString();
 }

 const getTitle = (note) =>{
     const title = note.body.split("\n")[0];
     if(title.length > 45)
     return title.slice(0,45);
     return title
 }
 const getContent = (note) => {
     let title = getTitle(note);
     let content = note.body.replaceAll("\n",'');
     content = note.body.replaceAll(title,'');
     if(content.length > 45){
         return content.slice(0,45)+"..."
     } else {
        return content
     }
     
 }

 const ListItem = ({note}) => {
     return (
         <div className="notes-list-item" >
             <Link to={`/note/${note.id}`} >
             <h2>{getTitle(note)}</h2>
             <p><span>{getTime(note)}</span>{getContent(note)}</p>
             </Link>
         </div>
     )
 }
 
 export default ListItem
 