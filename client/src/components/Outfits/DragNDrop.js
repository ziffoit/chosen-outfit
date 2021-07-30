//------------------Outfits page added by Eric-----------------------------------
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from 'uuid'
//---------------Eric added---------------------------------
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';

const itemsFromBackend = [
  {
id: uuidv4(),
name: 'Black Shirt',
image: "/images/black-shirt.jpg"
},
  {
id: uuidv4(),
name: 'Black Cowboy Hat',
image: "/images/black-cowboy-hat.jpg"
},
{
id: uuidv4(),
name: 'Black Shorts',
image: "/images/black-shorts.jpg"
},
{
  id: uuidv4(),
  name: 'Black Van Shoes',
  image: "/images/black-van-shoes.jpg"
  },
];

const columnsFromBackend = {
  [uuidv4()]: {
    name: "Closet",
    items: itemsFromBackend
  },
  [uuidv4()]: {
    name: "Outfits",
    items: []
  }
};


const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

function Outfits() {
  const [columns, setColumns] = useState(columnsFromBackend);
  /////----------------Eric added-------------------------
  const { data } = useQuery(QUERY_USER);
  let user;
  if (data) {
    user = data.user;
  }
//---------------------------------------------------------
  return (
    <div style={{display: "flex", overflow: 'auto'}}>
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "grid",
                flexDirection: "column",
                width: "100%",
                overflow: "auto",
                justifyContent: "center",
              }}
              key={columnId}
            >
              <h2>{column.name}</h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "darkgrey"
                            : "white",
                          padding: 4,
                          width: 350,
                          minHeight: 800
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      justifyContent: "center",
                                      margin: "0 0 8px 0",
                                      minHeight: "100px",
                                      backgroundColor: "white",
                                      alignItems: "center",
                                      ...provided.draggableProps.style
                                    }}
                                  >
                                    <div className="productImg">
                            <img src={item.image} alt={`${item.name} Image`} />
                          </div>
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default Outfits;


