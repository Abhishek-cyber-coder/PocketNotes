import React, { useContext, useRef } from "react";
import styles from "./GroupItem.module.css";
import GroupIcon from "../GroupIcon/GroupIcon";
import MyContext from "../contextApi/MyContext";
function GroupItem({
  clickedFunc,
  initials,
  iconColor,
  groupName,
  isActive,
  activeGroupName,
}) {
  const { isGroupSelected, setIsGroupSelected } = useContext(MyContext);
  const parentRef = useRef(null);
  return (
    <div
      style={{ backgroundColor: isActive ? "#2f2f2f2b" : "" }}
      ref={parentRef}
      onClick={() => {
        activeGroupName(groupName);
        setIsGroupSelected(true);
        clickedFunc(parentRef);
      }}
      className={styles.container}
    >
      <GroupIcon bgColor={iconColor} initial={initials} grpName={groupName} />
    </div>
  );
}

export default GroupItem;
