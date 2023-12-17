import React, { useContext, useEffect, useState } from "react";
import styles from "./NotesArea.module.css";
import notesAreaBg from "../../assets/images/textAreaBG.png";
import lockIcon from "../../assets/icons/lockIcon.svg";
import MyContext from "../contextApi/MyContext";
import GroupIcon from "../GroupIcon/GroupIcon";
import { getInitials } from "../../utils/helper";
function NotesArea() {
  const { selectedGroup, isGroupSelected, setIsGroupSelected } =
    useContext(MyContext);
  const groups = JSON.parse(localStorage.getItem("groupNames") || "[]");

  const [selectedGroupObj, setSelectedGroupObj] = useState({});
  const [initial, setInitial] = useState("");

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

  return (
    <div className={styles.notesArea}>
      {/* Baad me true ki jgh isGroupSelected likhna hai */}
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
          <div className={styles.textContainers}>
            <div className={styles.textBox}></div>
          </div>
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
