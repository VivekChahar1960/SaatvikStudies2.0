import React, { useEffect, useState } from 'react';
import './Profile.css';
import { ref, get, update, getDatabase } from 'firebase/database';
import { useNotification } from '../../Context/NotificationContext';
import { FiUser, FiMail, FiPhone, FiEdit, FiSave, FiLock, FiCheckCircle, FiXCircle } from 'react-icons/fi'; // Import icons

const Profile = () => {
  const db = getDatabase();
  const { showNotification } = useNotification();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    class: '',
    school: '',
  });

  const [storedPassword, setStoredPassword] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const phone = localStorage.getItem('phone');

  useEffect(() => {
    if (!phone) return;

    const userRef = ref(db, `users/${phone}`);
    get(userRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const { password, ...rest } = data;
          setFormData({ ...rest, phone });
          setStoredPassword(password);
        } else {
          showNotification('No user found.');
        }
      })
      .catch((err) => {
        console.error(err);
        showNotification('Error fetching user data.');
      });
  }, [phone, showNotification]);

  const handleChange = (e) => {
    if (!isEditing) return;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const userRef = ref(db, `users/${phone}`);
      await update(userRef, {
        name: formData.name,
        email: formData.email,
        class: formData.class,
        school: formData.school,
      });
      setIsEditing(false);
      showNotification('Profile updated successfully!', 'success'); // Added type for styling
    } catch (error) {
      console.error(error);
      showNotification('Error updating profile.', 'error'); // Added type for styling
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    // Optionally, reset form data to the initially fetched values
    const userRef = ref(db, `users/${phone}`);
    get(userRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const { password, ...rest } = data;
          setFormData({ ...rest, phone });
        }
      })
      .catch((err) => {
        console.error(err);
        showNotification('Error fetching user data for cancellation.', 'error');
      });
  };

  const handlePasswordChangeClick = () => {
    setIsChangingPassword(true);
  };

  const handlePasswordChange = async () => {
    if (oldPassword !== storedPassword) {
      showNotification('Old password is incorrect.', 'error');
      return;
    }

    if (newPassword.trim().length < 4) {
      showNotification('New password must be at least 4 characters.', 'warning');
      return;
    }

    try {
      const userRef = ref(db, `users/${phone}`);
      await update(userRef, {
        password: newPassword,
      });
      setStoredPassword(newPassword);
      setOldPassword('');
      setNewPassword('');
      setIsChangingPassword(false);
      showNotification('Password changed successfully!', 'success');
    } catch (err) {
      console.error(err);
      showNotification('Error updating password.', 'error');
    }
  };

  const handleCancelPasswordChange = () => {
    setIsChangingPassword(false);
    setOldPassword('');
    setNewPassword('');
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h2>My Profile</h2>
        {!isEditing && <button className="edit-button" onClick={handleEditClick}><FiEdit /> Edit Profile</button>}
      </div>

      <div className="form">
        <div className="form-group">
          <label><FiUser className="icon" /> Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>
        <div className="form-group">
          <label><FiMail className="icon" /> Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>
        <div className="form-group">
          <label><FiPhone className="icon" /> Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Class:</label>
          <input
            type="text"
            name="class"
            value={formData.class}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>
        <div className="form-group">
          <label>School:</label>
          <input
            type="text"
            name="school"
            value={formData.school}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>

        {isEditing && (
          <div className="form-actions">
            <button className="save-button" onClick={handleSave}><FiSave /> Save Changes</button>
            <button className="cancel-button" onClick={handleCancelEdit}><FiXCircle /> Cancel</button>
          </div>
        )}
      </div>

      <div className="password-section">
        <h3>Change Password</h3>
        {!isChangingPassword ? (
          <button onClick={handlePasswordChangeClick} className="change-password-button"><FiLock /> Change Password</button>
        ) : (
          <div className="password-form">
            <div className="form-group">
              <label>Old Password:</label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>New Password:</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <div className="form-actions">
              <button onClick={handlePasswordChange} className="update-password-button"><FiCheckCircle /> Update Password</button>
              <button onClick={handleCancelPasswordChange} className="cancel-button"><FiXCircle /> Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;