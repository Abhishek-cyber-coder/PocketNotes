import Sidebar from "./components/sidebar/Sidebar";
import NotesArea from "./components/notesArea/NotesArea";
import MyModal from "./components/MyModal/MyModal";
import { useContext, useEffect, useState } from "react";
import MyContext from "./components/contextApi/MyContext";

function App() {
  const [showModal, setShowModal] = useState(false);
  const { groups, setGroups } = useContext(MyContext);

  const isbtnClicked = (boolVal) => {
    return setShowModal(boolVal);
  };

  const isModalClosed = (boolVal) => {
    return setShowModal(boolVal);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar openModal={isbtnClicked} />
        <NotesArea />
      </div>
      {showModal && (
        <MyModal
          closeModal={isModalClosed}
          groups={groups}
          setGroups={setGroups}
        />
      )}
    </>
  );
}

export default App;
