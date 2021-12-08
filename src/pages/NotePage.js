import React, { useEffect, useState } from "react";
// import notes from "../assets/data";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left-chevron.svg";
import { Link } from "react-router-dom";

function NotePage({ match, history }) {
  let noteId = match.params.id;
  let [note, setNote] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line
    getNote()}, [noteId]);

  let getNote = async () => {
    if (noteId === "new") return;
    let response = await fetch(`https://my-json-server.typicode.com/ebinsoby/JSON-Server/notes/${noteId}`);
    let data = await response.json();
    setNote(data);
  };

  let createNote = async () => {
    await fetch(`https://my-json-server.typicode.com/ebinsoby/JSON-Server/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...note, updated: new Date() }),
    });
  };

  let updateNote = async () => {
    await fetch(`https://my-json-server.typicode.com/ebinsoby/JSON-Server/notes/${noteId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...note, updated: new Date() }),
    });
  };

  let deleteNode = async () => {
    await fetch(`https://my-json-server.typicode.com/ebinsoby/JSON-Server/notes${noteId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    history.push("/NoteApp-React");
  };

  let handleSubmit = () => {
    if (noteId !== "new" && !note.body) {
      deleteNode();
    } else if (noteId !== "new") {
      updateNote();
    } else if (noteId === "new" && note !== null){
      createNote();
    }
    history.push("/NoteApp-React");
  };

  // eslint-disable-next-line
  // let note = notes.find((note) => note.id == noteId);
  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to={"/NoteApp-React"}>
            <ArrowLeft onClick={handleSubmit} />
          </Link>
        </h3>
        {noteId !== "new" ? (
          <button onClick={deleteNode}>Delete</button>
        ) : (
          <button onClick ={handleSubmit} >Done</button>
        )}
      </div>
      <textarea
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        value={note?.body}
      ></textarea>
    </div>
  );
}

export default NotePage;
