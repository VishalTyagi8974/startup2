import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./UserForm.css"

function UserForm() {
    const [state, handleSubmit] = useForm("xyzeqnro");
    const [showModal, setShowModal] = useState(false); // State to control modal visibility

    // Handle opening the modal
    const openModal = () => setShowModal(true);

    // Handle closing the modal
    const closeModal = () => setShowModal(false);

    return (
        <>
            {/* Get Started Button on Home Page */}

            <button
                type="button"
                className="btn genericButtons btn-lg rounded-pill mt-2 fs-6 fw-normal px-4 mb-4"
                onClick={openModal} // Show modal when button is clicked
            >
                Get Started <i className="bi bi-chevron-right" style={{ fontSize: "0.9rem" }}></i>

            </button>


            {/* Modal */}
            {showModal && (
                <div
                    className="modal fade show  custom-modal "
                    id="contactModal"
                    tabIndex="-1"

                    aria-labelledby="contactModalLabel"
                    aria-hidden="true"
                    style={{ display: 'block' }} // Modal is visible
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content rounded-4 shadow">
                            <div className="modal-header bg-primary text-white">
                                <h5 className="modal-title" id="contactModalLabel">Get a Free Consultation</h5>
                                <button
                                    type="button"
                                    className="btn-close btn-close-white"
                                    onClick={closeModal} // Close modal when clicked
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                {state.succeeded ? (
                                    <p className="text-success text-center">Thanks! We’ll get back to you shortly.</p>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="pan" className="form-label">PAN Card Number</label>
                                            <input
                                                type="text"
                                                name="pan"
                                                id="pan"
                                                className="form-control"
                                                placeholder="ABCDE1234F"
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                className="form-control"
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email (optional)</label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="form-control"
                                            />
                                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="phone" className="form-label">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                id="phone"
                                                className="form-control"
                                                pattern="[0-9]{10}"
                                                placeholder="10-digit number"
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="service" className="form-label">Select a Service</label>
                                            <select className="form-select" name="service" id="service" required>
                                                <option value="">-- Choose a Service --</option>
                                                <option value="ISO">ISO</option>
                                                <option value="Trademark Registration">Trademark Registration</option>
                                                <option value="FSSAI Registration">FSSAI Registration</option>
                                                <option value="FSSAI Renewal">FSSAI Renewal</option>
                                                <option value="GST Registration">GST Registration</option>
                                                <option value="ITR Filing">ITR Filing</option>
                                                <option value="Tax Planning">Tax Planning</option>
                                                <option value="ITR Notice / Appeal">ITR Notice / Appeal</option>
                                                <option value="GST Return Filing">GST Return Filing</option>
                                                <option value="Trademark Renewal">Trademark Renewal</option>
                                                <option value="Copyright Registration">Copyright Registration</option>
                                            </select>
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-success w-100"
                                            disabled={state.submitting}
                                        >
                                            {state.submitting ? "Submitting..." : "Submit"}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default UserForm;
