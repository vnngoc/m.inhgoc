import React from "react";
import AddTaskForm from "./AddTaskForm";
import ToDo from "./ToDo";
import UpdateForm from "./UpdateForm";
function HomePage({
  updateData,
  changeTask,
  updateTask,
  cancelUpdate,
  newTask,
  setNewTask,
  addTask,
  toDo,
  markDone,
  setUpdateData,
  deleteTask,
}) {
  return (
    <div>
      <h2 className="animation-text">XIN CHÈO THẢO NHÓ</h2>

      {updateData ? (
        <>
          {/* Update Task */}
          <UpdateForm
            updateData={updateData}
            changeTask={changeTask}
            updateTask={updateTask}
            cancelUpdate={cancelUpdate}
          />
        </>
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {toDo && toDo.length ? "" : "No Task..."}
      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default HomePage;
