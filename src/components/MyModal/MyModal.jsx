import React, { useEffect, useState } from "react";
import styles from "./MyModal.module.css";
import { modifyText } from "../../utils/helper";
function MyModal({ closeModal, groups, setGroups }) {
  const colors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  const [error, setError] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [disable, setDisable] = useState(true);
  const [color, setColor] = useState(colors[0]);

  const groupData = JSON.parse(localStorage.getItem("groupNames") || "[]");

  const handleGroupName = (e) => {
    if (e.target.value.trim() === "") {
      return setDisable(true);
    }
    let text = "";
    text += e.target.value;
    setGroupName(text);
    setDisable(false);
  };

  const handleColor = (e, currColor) => {
    e.preventDefault();
    setColor(currColor);
  };

  useEffect(() => {
    let text = modifyText(groupName);
    let check = groupData.find((item) => item.name === text);
    setError(check);
  }, [groupName]);

  const setGroupInfo = (txt, clr) => {
    let data = JSON.parse(localStorage.getItem("groupNames") || "[]");
    data.push({ name: txt, iconColor: clr });
    localStorage.setItem("groupNames", JSON.stringify(data));
  };

  const closeModalBox = () => {
    if (!error) {
      const str = modifyText(groupName);
      const tempGroupArray = [...groups, { name: str, iconColor: color }];
      setGroupInfo(str, color);
      setGroups(tempGroupArray);
      closeModal(false);
      setGroupName("");
    }
  };

  const closeFromOutside = () => {
    closeModal(false);
  };

  return (
    <>
      <div onClick={closeFromOutside} className={styles.modalWrapper}></div>
      <div className={styles.modalContainer}>
        <form className={styles.formContainer}>
          <div className={styles.heading}>Create New group</div>
          <div className={styles.inputBoxContainer}>
            <label htmlFor="gName">Group Name</label>
            <input
              type="text"
              id="gName"
              placeholder="Enter group name"
              onChange={(e) => handleGroupName(e)}
            />
          </div>
          {error ? (
            <p className={styles.showError}>Group already exists!</p>
          ) : (
            <></>
          )}

          <p className={styles.chooseColor}>
            <span>Choose colour</span>
            {colors.map((currColor, index) => {
              return (
                <button
                  onClick={(e) => handleColor(e, currColor)}
                  className={
                    color === currColor
                      ? `${styles.colorBtn} ${styles.selected}`
                      : styles.colorBtn
                  }
                  style={{ backgroundColor: currColor }}
                  key={index}
                ></button>
              );
            })}
          </p>
        </form>
        <div className={styles.createBtnContainer}>
          <button
            disabled={disable}
            onClick={closeModalBox}
            className={
              error || disable
                ? styles.createGrpBtn
                : `${styles.createGrpBtn} ${styles.active}`
            }
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
}

export default MyModal;
