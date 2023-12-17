import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
function Provider({ children }) {
  const [selectedGroup, setSelectedGroup] = useState("");
  const [isGroupSelected, setIsGroupSelected] = useState(false);
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    setGroups(JSON.parse(localStorage.getItem("groupNames") || "[]"));
  }, []);
  //   const update = (newValue) => {
  //     setMyValue(newValue);
  //   };
  return (
    <MyContext.Provider
      value={{
        groups,
        setGroups,
        selectedGroup,
        setSelectedGroup,
        isGroupSelected,
        setIsGroupSelected,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default Provider;
