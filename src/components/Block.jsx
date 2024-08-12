import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { openBlockPreviewModal } from "../redux/slices/uiSlice";

const Block = ({ block, index }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openBlockPreviewModal(block));
  };

  const blockClassName = `block block-${block.state}`;

  return (
    <Draggable draggableId={block.id} index={index}>
      {(provided) => (
        <div
          className={blockClassName}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={handleClick}
        >
          {block.name}
        </div>
      )}
    </Draggable>
  );
};

export default Block;
