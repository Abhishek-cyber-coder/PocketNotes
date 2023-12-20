import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./NotesArea.module.css";
import MyContext from "../contextApi/MyContext";
import GroupIcon from "../GroupIcon/GroupIcon";
import NoteForm from "../NoteForm/NoteForm";
import NoteBox from "../NoteBox/NoteBox";
import notesAreaBg from "../../assets/images/textAreaBG.png";
import lockIcon from "../../assets/icons/lockIcon.svg";
import { getInitials } from "../../utils/helper";

function NotesArea() {
  const { notes, selectedGroup, isGroupSelected, setIsGroupSelected, groups } =
    useContext(MyContext);
  const [selectedGroupObj, setSelectedGroupObj] = useState({});
  const [initial, setInitial] = useState("");
  const [notesAvailable, setNotesAvailable] = useState(true);

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    setIsGroupSelected(false);
  }, []);

  useEffect(() => {
    const filterGroup = groups.filter((group) => group.name === selectedGroup);
    setSelectedGroupObj({
      iconColor: filterGroup[0]?.iconColor,
      groupName: filterGroup[0]?.name,
    });
  }, [selectedGroup]);

  useEffect(() => {
    const fetchInitials = () => {
      return getInitials(selectedGroupObj.groupName);
    };
    const val = fetchInitials();
    setInitial(val);
  }, [selectedGroupObj, setSelectedGroupObj]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight;
    }
  }, [selectedGroup, notes]);

  return (
    <div className={styles.notesArea}>
      {isGroupSelected ? (
        <>
          <div className={styles.topGroupHead}>
            <GroupIcon
              bgColor={selectedGroupObj.iconColor}
              initial={initial}
              grpName={selectedGroupObj.groupName}
              textColor="white"
            />
          </div>
          <div ref={scrollContainerRef} className={styles.textContainers}>
            <NoteBox groupSelected={selectedGroup} notes={notes} />
          </div>
          <NoteForm groupSelected={selectedGroup} />
        </>
      ) : (
        <div className={styles.container}>
          <div className={styles.centerHeadings}>
            <img src={notesAreaBg} />
            <p className={styles.heading}>Pocket Notes</p>
            <p className={styles.paraForNotesArea}>
              Send and receive messages without keeping your phone online.
              <br /> Use Pocket Notes on up to 4 linked devices and 1 mobile
              phone
            </p>
          </div>
          <div className={styles.encryptionTxt}>
            <img src={lockIcon} />
            <p>end-to-end encrypted</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default NotesArea;
