import React from "react";
import { Button, Modal } from "react-bootstrap";

const DeleteConfirmModal = ({ show, handleClose, handleConfirm, taskName }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Konfirmasi Hapus</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Apakah kamu yakin ingin menghapus tugas{" "}
        <span className="fw-bold text-danger">"{taskName}"</span>?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Tidak
        </Button>
        <Button variant="danger" onClick={handleConfirm}>
          Ya, Hapus
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteConfirmModal;
