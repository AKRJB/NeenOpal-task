import React, { useState } from 'react';

const EditForm = ({ handleEditFormClose, post, setData }) => {
  const [editName, setEditName] = useState(post.name || '');
  const [editEmail, setEditEmail] = useState(post.email || '');
  const [editNumber, setEditNumber] = useState(post.number || '');
  const [editWebsite, setEditWebsite] = useState(post.website || '');

  const handleUpdate = (id) => {
    const updateDetails = { id, name: editName, email: editEmail, number: editNumber, website: editWebsite };

    setData((prevData) =>
      prevData.map((prev) => (prev.id === id ? { ...prev, ...updateDetails } : prev))
    );

    setEditName('');
    setEditEmail('');
    setEditNumber('');
    setEditWebsite('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(post.id);
    handleEditFormClose();
  };

  return (
    <div className='editBox'>
      <div className='parent'>
        <div className='sibling'>
          <h4>Basic Modal</h4>
          <button className='closeButton' onClick={handleEditFormClose}>
            X
          </button>
        </div>
        <div className='sibling-1'>
          <form onSubmit={handleSubmit}>
            <div className='input-class'>
              <label className='label' htmlFor='name'>
                <sup style={{ color: 'red' }}>*</sup>Name:
              </label>
              <input
                className='inputBox'
                type='text'
                id='name'
                required
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
            </div>
            <div className='input-class'>
              <label className='label' htmlFor='email'>
                <sup style={{ color: 'red' }}>*</sup>Email:
              </label>
              <input
                className='inputBox'
                type='email'
                id='email'
                value={editEmail}
                required
                onChange={(e) => setEditEmail(e.target.value)}
              />
            </div>
            <div className='input-class'>
              <label className='label' htmlFor='phone'>
                <sup style={{ color: 'red' }}>*</sup>Phone:
              </label>
              <input
                className='inputBox'
                type='text'
                id='phone'
                value={editNumber}
                required
                onChange={(e) => setEditNumber(e.target.value)}
              />
            </div>

            <div className='input-class'>
              <label className='label' htmlFor='website'>
                <sup style={{ color: 'red' }}>*</sup>Website:
              </label>
              <input
                className='inputBox'
                type='text'
                id='website'
                value={editWebsite}
                required
                onChange={(e) => setEditWebsite(e.target.value)}
              />
            </div>
            <div className='modal-footer'>
              <button className='clear-button' onClick={handleEditFormClose}>
                Cancel
              </button>
              <button className='okButton clear-button'>
                OK
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
