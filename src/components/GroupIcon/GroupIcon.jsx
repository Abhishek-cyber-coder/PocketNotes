import React from "react";
import styles from "./GroupIcon.module.css";

function GroupIcon({ bgColor, initial, grpName, textColor }) {
  return (
    <>
      <div style={{ backgroundColor: bgColor }} className={styles.icon}>
        {initial}
      </div>
      <div style={{ color: textColor }} className={styles.groupName}>
        {grpName}
      </div>
    </>
  );
}

export default GroupIcon;
