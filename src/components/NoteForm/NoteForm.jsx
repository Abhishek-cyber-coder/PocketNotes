import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./NoteForm.module.css";
import MyContext from "../contextApi/MyContext";
import { getDateInDDMMYYYY, getTimeInAMPM } from "../../utils/helper";

function NoteForm({ groupSelected }) {
  const { setNotes } = useContext(MyContext);
  const [newNote, setNewNote] = useState("");
  const [note, setNote] = useState();
  const [btnActive, setBtnActive] = useState(false);

  const textAreaRef = useRef(null);

  const handleText = (e) => {
    if (e.target.value.trim() === "") {
      return setBtnActive(false);
    }
    setNewNote(e.target.value);
    setBtnActive(true);
  };

  const handleSubmit = () => {
    if (btnActive) {
      setNote({
        data: newNote,
        currDate: getDateInDDMMYYYY(),
        currTime: getTimeInAMPM(),
        group: groupSelected,
      });

      textAreaRef.current.value = "";
      setBtnActive(false);
      setNewNote("");
    }
    textAreaRef?.current.focus();
  };

  useEffect(() => {
    if (note) {
      const data = JSON.parse(localStorage.getItem("notes")) || [];
      data.push(note);
      localStorage.setItem("notes", JSON.stringify(data));
      setNotes(data);
    }
  }, [note]);

  useEffect(() => {
    textAreaRef?.current.focus();
  }, [groupSelected, note]);

  return (
    <div className={styles.container}>
      <textarea
        ref={textAreaRef}
        onChange={(e) => handleText(e)}
        placeholder="Enter your text here..........."
      ></textarea>
      <svg
        onClick={handleSubmit}
        style={{ cursor: btnActive ? "pointer" : "not-allowed" }}
        width="35"
        height="29"
        viewBox="0 0 35 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 29V18.125L14.5 14.5L0 10.875V0L34.4375 14.5L0 29Z"
          fill={btnActive ? "#001F8B" : "#ABABAB"}
        />
      </svg>
    </div>
  );
}

export default NoteForm;
