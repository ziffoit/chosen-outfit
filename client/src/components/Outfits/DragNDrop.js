//------------------Outfits page added by Eric-----------------------------------
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from 'uuid';

const itemsFromBackend = [
  {
id: uuidv4(),
name: 'name',
image: '/images/black-shirt.jpg'
},
  {
id: uuidv4(),
name: 'name',
image: "/images/black-shirt.jpg"
},
  {
id: uuidv4(),
name: 'name',
image: "/images/black-shirt.jpg"
},
{
id: uuidv4(),
name: 'name',
image: "/images/black-shirt.jpg"
},
{
  id: uuidv4(),
  name: 'name',
  image: "/images/black-shirt.jpg"
  },
  {
    id: uuidv4(),
    name: 'name',
    image: "/images/black-shirt.jpg"
    },
    {
      id: uuidv4(),
      name: 'name',
      image: "/images/black-shirt.jpg"
    },  
    {
        id: uuidv4(),
        name: 'name',
        image: "/images/black-shirt.jpg"
    },
        {
          id: uuidv4(),
          name: 'name',
          image: "/images/black-shirt.jpg"
          },
    {
      id: uuidv4(),
      name: 'name',
      image: "/images/black-shirt.jpg"
    },
  {
id: uuidv4(),
name: 'name',
image: "/images/black-shirt.jpg"
}
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
                                      userSelect: "none",
                                      margin: "0 0 8px 0",
                                      minHeight: "100px",
                                      backgroundColor: snapshot.isDragging
                                        ? "#263B4A"
                                        : "#456C86",
                                      color: "white",
                                      ...provided.draggableProps.style
                                    }}
                                  >
                                    {item.image}
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








// import React, { useState, useRef, useEffect } from "react";

// function DragNDrop({ data }) {
//   const [list, setList] = useState(data);
//   const [dragging, setDragging] = useState(false);

//   useEffect(() => {
//     setList(data);
//   }, [setList, data]);

//   const dragItem = useRef();
//   const dragItemNode = useRef();

//   const handletDragStart = (e, item) => {
//     console.log("Starting to drag", item);

//     dragItemNode.current = e.target;
//     dragItemNode.current.addEventListener("dragend", handleDragEnd);
//     dragItem.current = item;

//     setTimeout(() => {
//       setDragging(true);
//     }, 0);
//   };
//   const handleDragEnter = (e, targetItem) => {
//     console.log("Entering a drag target", targetItem);

//     const currentItem = dragItem.current;

//     if (dragItemNode.current !== e.target) {
//       console.log("Target is NOT the same as dragged item");
//       setList((oldList) => {
//         let newList = JSON.parse(JSON.stringify(oldList));
//         newList[targetItem.grpI].items.splice(targetItem.itemI, 0, newList[currentItem
//           .grpI].items.splice(currentItem.itemI,1)[0])
//         // newList[targetItem.grpI].items.splice(targetItem.itemI, 0,newList[dragItem.
//         //   current.grpI].items.splice(dragItem.current.itemI,1)[0]);
//         dragItem.current = targetItem;
//         // localStorage.setItem("List", JSON.stringify(newList));
//         return newList;
//       });
//     }
//   };
//   const handleDragEnd = (e) => {
//     setDragging(false);
//     dragItem.current = null;
//     dragItemNode.current.removeEventListener("dragend", handleDragEnd);
//     dragItemNode.current = null;
//   };
//   const getStyles = (item) => {
//     if (
//       dragItem.current.grpI === item.grpI &&
//       dragItem.current.itemI === item.itemI
//     ) {
//       return "dnd-item current";
//     }
//     return "dnd-item";
//   };

//   if (list) {
//     return (
//       <div className="drag-n-drop">
//         {list.map((grp, grpI) => (
//           <div
//             key={grp.title}
//             onDragEnter={
//               dragging && !grp.items.length
//                 ? (e) => handleDragEnter(e, { grpI, itemI: 0 })
//                 : null
//             }
//             className="dnd-group"
//           >
//             {grp.items.map((item, itemI) => (
//               <div
//                 draggable
//                 key={item}
//                 onDragStart={(e) => handletDragStart(e, { grpI, itemI })}
//                 onDragEnter={
//                   dragging
//                     ? (e) => {
//                         handleDragEnter(e, { grpI, itemI });
//                       }
//                     : null
//                 }
//                 className={dragging ? getStyles({ grpI, itemI }) : "dnd-item"}
//               >
//                 {item}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     );
//   } else {
//     return null;
//   }
// }

// export default DragNDrop;
