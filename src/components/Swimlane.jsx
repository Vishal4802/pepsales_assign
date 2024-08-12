import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Block from "./Block";

const Swimlane = ({ swimlane, blocks }) => {
  return (
    <Droppable droppableId={swimlane.id}>
      {(provided) => (
        <div
          className="swimlane"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h2>{swimlane.name}</h2>
          {blocks.map((block, index) => (
            <Block key={block.id} block={block} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Swimlane;
