import React from "react";
import Swimlane from "./Swimlane";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import { openDataEntryModal } from "../redux/slices/uiSlice";

const SwimlaneContainer = () => {
  const swimlanes = useSelector((state) => state.swimlanes.swimlanes);
  const blocks = useSelector((state) => state.blocks.blocks);
  const dispatch = useDispatch();

  if (!swimlanes) {
    return <div>Loading swimlanes...</div>;
  }

  const stageOrder = swimlanes.map((s) => s.id);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const draggedBlock = blocks.find((block) => block.id === draggableId);

    const currentStageIndex = stageOrder.indexOf(source.droppableId);
    const newStageIndex = stageOrder.indexOf(destination.droppableId);

    if (newStageIndex < currentStageIndex) {
      console.error("Cannot move block backwards.");
      alert("Cannot move block backwards.");
      return;
    }

    const updatedBlock = { ...draggedBlock, newState: destination.droppableId };

    dispatch(openDataEntryModal(updatedBlock));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="swimlane-container">
        {swimlanes.map((swimlane) => (
          <Swimlane
            key={swimlane.id}
            swimlane={swimlane}
            blocks={blocks.filter((block) => block.state === swimlane.id)}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default SwimlaneContainer;
