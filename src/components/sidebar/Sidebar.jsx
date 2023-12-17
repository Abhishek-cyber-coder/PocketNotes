import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./Sidebar.module.css";
import GroupItem from "../GroupItem/GroupItem";
import { getInitials } from "../../utils/helper";
import MyContext from "../contextApi/MyContext";

function Sidebar({ openModal }) {
  const [isGroupAvailable, setIsGroupAvailable] = useState();
  const { groups, setSelectedGroup, setIsGroupSelected } =
    useContext(MyContext);
  const [activeGrp, setActiveGrp] = useState("");
  const groupData = groups;

  useEffect(() => {
    if (groupData.length > 0) {
      return setIsGroupAvailable(true);
    } else {
      setIsGroupSelected(false);
      return setIsGroupAvailable(false);
    }
  });

  const fetchInitials = (str) => {
    return getInitials(str);
  };

  const handleGroups = (passedRef) => {
    if (passedRef.current) {
      let secondChildText = passedRef.current.children[1].innerText;
      setSelectedGroup(secondChildText);
      console.log(passedRef.current);
    }
  };

  const getActiveGroupName = (grpName) => {
    return setActiveGrp(grpName);
  };

  return (
    <>
      <div className={styles.sideBar}>
        <div className={styles.heading}>Pocket Notes</div>
        <div className={styles.groupArea}>
          {isGroupAvailable ? (
            groupData.map((data, index) => {
              return (
                <GroupItem
                  key={index}
                  initials={fetchInitials(data.name)}
                  iconColor={data.iconColor}
                  groupName={data.name}
                  activeGroupName={getActiveGroupName}
                  clickedFunc={handleGroups}
                  isActive={data.name === activeGrp}
                />
              );
            })
          ) : (
            <div className={styles.unavailableDiv}>
              No groups are there!
              <br /> Click on '+' to make new group...
            </div>
          )}
          <div className={styles.addGroup} onClick={() => openModal(true)}>
            +
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
