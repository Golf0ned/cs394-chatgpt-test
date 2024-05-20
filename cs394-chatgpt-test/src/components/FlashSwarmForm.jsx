import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const FlashSwarmForm = () => {
  const { dispatch } = useContext(AppContext);

  // Get current time and one hour ahead
  const now = new Date();
  const defaultEndTime = new Date(now.getTime() + 60 * 60 * 1000);

  const [formData, setFormData] = useState({
    name: '',
    startTime: now.toISOString().slice(0, 16),
    endTime: defaultEndTime.toISOString().slice(0, 16),
    zoomLink: '', // Default value for Zoom link
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_SWARM', payload: formData });
    setFormData({ name: '', startTime: '', endTime: '', zoomLink: '' }); // Reset form fields
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="startTime">Start Time:</label>
        <input
          type="datetime-local"
          id="startTime"
          name="startTime"
          value={formData.startTime}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="endTime">End Time:</label>
        <input
          type="datetime-local"
          id="endTime"
          name="endTime"
          value={formData.endTime}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="zoomLink">Zoom Link:</label>
        <input
          type="url"
          id="zoomLink"
          name="zoomLink"
          value={formData.zoomLink}
          onChange={handleChange}
          placeholder="https://zoom.us/j/1234567890"
        />
      </div>
      <button type="submit">Create Flash Swarm</button>
    </form>
  );
};

export default FlashSwarmForm;
