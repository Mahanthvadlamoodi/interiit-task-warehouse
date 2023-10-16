import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Modal from 'react-modal';
import shipmentsData from './ShipmentData';
function Shipments() {
  const [shipments, setShipments] = useState([...shipmentsData]);

  const [newShipment, setNewShipment] = useState({
    status: '',
    product: '',
    destination: '',
    eta: '',
    departureDate: '',
    quantity: 0,
  });

  const [scrollIndex, setScrollIndex] = useState(0);
  const scrollSpeed = 1500; // Adjust the scroll speed in milliseconds

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setScrollIndex((prevIndex) => (prevIndex + 1) % shipments.length);
    }, scrollSpeed);

    return () => clearInterval(scrollInterval);
  }, [shipments, scrollSpeed]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleAddShipment = () => {
    // Create a new shipment with a unique ID and values from user input
    const newShipmentWithId = {
      id: uuidv4(),
      status: newShipment.status,
      product: newShipment.product,
      destination: newShipment.destination,
      eta: newShipment.eta,
      departureDate: newShipment.departureDate,
      quantity: newShipment.quantity,
    };

    // Add the new shipment to the list of shipments
    setShipments([...shipments, newShipmentWithId]);

    // Clear the input fields
    setNewShipment({
      status: '',
      product: '',
      destination: '',
      eta: '',
      departureDate: '',
      quantity: 0,
    });

    // Close the modal
    setModalIsOpen(false);
  };

  const handleDeleteShipment = (id) => {
    const updatedShipments = shipments.filter((shipment) => shipment.id !== id);
    setShipments(updatedShipments);
  };

  return (
    <div className="shipments-container">
      <div className="shipments">
        <h2>Upcoming Shipments</h2>
        <div className="shipment-form">
          <button onClick={openModal}>Add Shipment</button>
        </div>
        <div className="shipment-scroll">
          <table className="shipment-table">
            <thead>
              <tr>
                <th>Status</th>
                <th>Product Name</th>
                <th>Arrival Date</th>
                <th>Departure Date</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {shipments.map((shipment, index) => (
                <tr key={shipment.id}>
                  <td>{shipment.status}</td>
                  <td>{shipment.product}</td>
                  <td>{shipment.eta}</td>
                  <td>{shipment.departureDate}</td>
                  <td>{shipment.quantity}</td>
                  <td>
                    <button onClick={() => handleDeleteShipment(shipment.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Shipment Modal"
      >
        <h2>Add Shipment</h2>
        <div className='box'>
          <input
            type="text"
            placeholder="Status"
            value={newShipment.status}
            onChange={(e) => setNewShipment({ ...newShipment, status: e.target.value })}
          />
          <input
            type="text"
            placeholder="Product Name"
            value={newShipment.product}
            onChange={(e) => setNewShipment({ ...newShipment, product: e.target.value })}
          />
          <input
            type="text"
            placeholder="Destination"
            value={newShipment.destination}
            onChange={(e) => setNewShipment({ ...newShipment, destination: e.target.value })}
          />
          <input
            type="text"
            placeholder="ETA"
            value={newShipment.eta}
            onChange={(e) => setNewShipment({ ...newShipment, eta: e.target.value })}
          />
          <input
            type="text"
            placeholder="Departure Date"
            value={newShipment.departureDate}
            onChange={(e) => setNewShipment({ ...newShipment, departureDate: e.target.value })}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={newShipment.quantity}
            onChange={(e) => setNewShipment({ ...newShipment, quantity: e.target.value })}
          />
        </div>
        <button onClick={handleAddShipment}>Add</button>

        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default Shipments;
