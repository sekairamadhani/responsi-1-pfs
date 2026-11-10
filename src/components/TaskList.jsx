import React from "react";
import { Button, Card, Badge, Row, Col } from "react-bootstrap";

const TaskList = ({ tasks, deleteTask, showEditForm }) => {
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
    <Row>
      {tasks.map((task) => (
        <Col md={4} key={task.id} className="mb-3">
          <Card className="shadow-sm h-100 border-0">
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <Badge bg={getPriorityBadge(task.priority)}>
                    {task.priority}
                  </Badge>
                  <Badge bg={getStatusBadge(task.status)}>{task.status}</Badge>
                </div>
                <Card.Title className="h5 text-dark mb-3">
                  {task.name}
                </Card.Title>
              </div>
              <div className="d-flex justify-content-end mt-3">
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
                  onClick={() => deleteTask(task.id)}
                >
                  Hapus
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default TaskList;
