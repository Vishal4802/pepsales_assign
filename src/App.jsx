import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSwimlanes } from "./redux/slices/swimlanesSlice";
import { setBlocks } from "./redux/slices/blocksSlice";
import SwimlaneContainer from "./components/SwimlaneContainer";
import DataEntryModal from "./components/DataEntryModal";
import BlockDetailModal from "./components/BlockDetailModal";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const isDataEntryModalOpen = useSelector(
    (state) => state.ui.isDataEntryModalOpen,
  );
  const isBlockDetailModalOpen = useSelector(
    (state) => state.ui.isBlockPreviewModalOpen,
  );

  useEffect(() => {
    const swimlanes = [
      { id: "backlog", name: "Backlog" },
      { id: "inProgress", name: "In Progress" },
      { id: "done", name: "Done" },
    ];

    const blocks = [
      { id: "1", name: "Fix X Bug", state: "backlog", history: ["backlog"] },
      {
        id: "2",
        name: "Implement Y feature",
        state: "inProgress",
        history: ["backlog", "inProgress"],
      },
      {
        id: "3",
        name: "Implement Z feature",
        state: "backlog",
        history: ["backlog"],
      },
      {
        id: "4",
        name: "Fix K Bug",
        state: "inProgress",
        history: ["backlog", "inProgress"],
      },
      {
        id: "5",
        name: "Implement A feature",
        state: "done",
        history: ["backlog", "inProgress", "done"],
      },
    ];

    dispatch(setSwimlanes(swimlanes));
    dispatch(setBlocks(blocks));
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Swimlane UI</h1>
      <SwimlaneContainer />
      {isDataEntryModalOpen && <DataEntryModal />}
      {isBlockDetailModalOpen && <BlockDetailModal />}
    </div>
  );
};

export default App;
