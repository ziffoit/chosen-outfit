//------------------Outfits page added by Eric-----------------------------------

import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";

const myClosetItems = [
  {
    id: uuidv4(),
    name: "Black Cowboy Hat",
    image: "/images/black-cowboy-hat.jpg",
  },
  {
    id: uuidv4(),
    name: "Black Shirt",
    image: "/images/black-shirt.jpg",
  },
  {
    id: uuidv4(),
    name: "Fuego Socks",
    image: "/images/fuego-socks.jpg",
  },
  {
    id: uuidv4(),
    name: "Grey Tennis Shoes",
    image: "/images/grey-tennis-shoes.jpg",
  },
  {
    id: uuidv4(),
    name: "Dark Grey Boxers",
    image: "/images/dark-grey-boxers.jpg",
  },
  {
    id: uuidv4(),
    name: "Dark Grey Pants",
    image: "/images/dark-grey-pants.jpg",
  },
];

const columnsFromBackend = {
  [uuidv4()]: {
    name: "My Closet",
    items: myClosetItems,
  },
  [uuidv4()]: {
    name: "My OutFit",
    items: [],
  },
};

function App() {
  const [clothes, updateClothes] = useState(myClosetItems);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(clothes);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateClothes(items);
  }

  return (
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="clothes">
          {(provided) => (
            <ul
              className="clothes"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <h2>Items In My Closet</h2>
              {clothes.map(({ id, name, image }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="card flip-card">
                          <div className="flip-card-inner">
                            <div className="flip-card-front">
                              <div className="clothes-image">
                                <img src={image} alt={`${name} Image`} />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flip-card-back">
                          <p>{name}</p>
                        </div>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
  );
}

export default App;
