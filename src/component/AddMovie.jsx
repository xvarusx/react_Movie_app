import React, { useState } from "react";

import Modal from "react-modal";
import StarRating from "./StarRating";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const AddMovie = ({ add }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(1);
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handelRating = (x) => setRating(x);
  const handleSumbite = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Math.random(),
      name,
      rating,
      image,
      date,
    };
    add(newMovie);
    closeModal();
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={openModal}>
        Add Movie
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSumbite}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <StarRating handelRating={handelRating} rating={rating} />
          <label>Poster</label>
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <div>
            <button type="submit" className="btn">
              Confirm
            </button>
            <button className="btn">Cancel</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
