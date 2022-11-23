import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
const ToDo = ({ toDo, markDone, setUpdateData, deleteTask }) => {
  return (
    <div>
      {toDo
        .sort((a, b) => {
          return a.id > b.id ? 1 : -1;
        })
        .map((task, index) => {
          return (
            <React.Fragment key={task.id}>
              <div className="col taskBg">
                <div className={task.status ? "done" : ""}>
                  <span className="taskNumber">{index + 1}</span>
                  <span className="taskText">{task.title}</span>
                  <span className="tasktime">{task.day}</span>
                </div>

                <div className="iconsWrap">
                  <span
                    onClick={(e) => markDone(task.id)}
                    title="Completed / Not Completed"
                  >
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>

                  {task.status ? (
                    ""
                  ) : (
                    <span
                      onClick={() =>
                        setUpdateData({
                          id: task.id,
                          title: task.title,
                          day: task.day,
                          status: task.status ? true : false,
                        })
                      }
                      title="Edit"
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                  )}

                  <span title="Delete" onClick={() => deleteTask(task.id)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default ToDo;
