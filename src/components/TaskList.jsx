import React from "react";
import { Button, Table, Badge } from "react-bootstrap";

const TaskList = ({ tasks, confirmDelete, showEditForm }) => {
  if (tasks.length === 0) {
    return (
      <p className="text-muted text-center mt-4">
        Belum ada tugas tim yang ditambahkan.
      </p>
    );
  }

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "High":
        return "danger";
      case "Medium":
        return "warning";
      case "Low":
        return "success";
      default:
        return "secondary";
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "Done":
        return "success";
      case "In Progress":
        return "primary";
      case "To Do":
        return "secondary";
      default:
        return "dark";
    }
  };

  return (
    <div className="table-responsive shadow-sm bg-white rounded p-3">
      <Table striped bordered hover align="middle">
        <thead className="table-dark">
          <tr>
            <th style={{ width: "5%" }}>No</th>
            <th style={{ width: "45%" }}>Nama Tugas</th>
            <th style={{ width: "15%" }}>Prioritas</th>
            <th style={{ width: "15%" }}>Status</th>
            <th style={{ width: "20%" }} className="text-center">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.id}>
              <td>{index + 1}</td>
              <td className="fw-semibold">{task.name}</td>
              <td>
                <Badge bg={getPriorityBadge(task.priority)}>
                  {task.priority}
                </Badge>
              </td>
              <td>
                <Badge bg={getStatusBadge(task.status)}>{task.status}</Badge>
              </td>
              <td className="text-center">
                <Button
                  variant="outline-primary"
                  size="sm"
                  className="me-2"
                  onClick={() => showEditForm(task)}
                >
                  Edit
                </Button>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => confirmDelete(task)}
                >
                  Hapus
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TaskList;
