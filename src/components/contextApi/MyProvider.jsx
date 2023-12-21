import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
function Provider({ children }) {
  const [selectedGroup, setSelectedGroup] = useState("");
  const [isGroupSelected, setIsGroupSelected] = useState(false);
  const [groups, setGroups] = useState([]);
  const [notes, setNotes] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [clickInMobileView, setClickInMobileView] = useState(false);
  useEffect(() => {
    setGroups(JSON.parse(localStorage.getItem("groupNames") || "[]"));
    setNotes(JSON.parse(localStorage.getItem("notes") || "[]"));
  }, []);
  //   const update = (newValue) => {
  //     setMyValue(newValue);
  //   };
  return (
    <MyContext.Provider
      value={{
        notes,
        setNotes,
        groups,
        setGroups,
        selectedGroup,
        setSelectedGroup,
        isGroupSelected,
        setIsGroupSelected,
        screenWidth,
        setScreenWidth,
        clickInMobileView,
        setClickInMobileView,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default Provider;
