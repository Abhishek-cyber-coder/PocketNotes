import React, { useEffect } from "react";
import styles from "./NoteBox.module.css";
function NoteBox({ groupSelected, notes }) {
  const filteredNotes = notes.filter((note) => note.group === groupSelected);

  return (
    <>
      {filteredNotes.map((note, index) => {
        return (
          <div key={index} className={styles.textBox}>
            <p>{note.data}</p>
            <div className={styles.dateAndTime}>
              <p>{note.currDate} </p>
              <div className={styles.elipse}></div>
              <p>{note.currTime}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default NoteBox;
