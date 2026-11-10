import React, { useState } from "react";
import { Container, Button, Navbar } from "react-bootstrap";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Analisis Kebutuhan Sistem RME",
      priority: "High",
      status: "In Progress",
    },
    {
      id: 2,
      name: "Desain Antarmuka Dashboard",
      priority: "Medium",
      status: "To Do",
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => {
    setShowForm(false);
    setTaskToEdit(null);
  };

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const showEditForm = (task) => {
    setTaskToEdit(task);
    handleShowForm();
  };

  return (
    <div className="bg-light min-vh-100">
      <Navbar bg="dark" variant="dark" className="mb-4 shadow-sm">
        <Container>
          <Navbar.Brand href="#home">
             Dashboard Task Manager Tim
          </Navbar.Brand>
          <span className="text-white-50 small">
            Sekai Putri Ramadhani (2511501026)
          </span>
        </Container>
      </Navbar>

      <Container className="py-3">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Daftar Tugas Proyek</h2>
          <Button variant="primary" onClick={handleShowForm}>
            + Tambah Tugas Baru
          </Button>
        </div>

        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          showEditForm={showEditForm}
        />

        <TaskForm
          show={showForm}
          handleClose={handleCloseForm}
          addTask={addTask}
          editTask={editTask}
          taskToEdit={taskToEdit}
        />
      </Container>
    </div>
  );
}

export default App;
