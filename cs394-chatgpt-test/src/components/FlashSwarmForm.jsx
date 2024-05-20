import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const FlashSwarmForm = () => {
  const { dispatch } = useContext(AppContext);
  const [formData, setFormData] = useState({
    name: '',
    duration: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_SWARM', payload: formData });
    setFormData({ name: '', duration: 0 });
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
        <label htmlFor="duration">Duration (hours):</label>
        <input
          type="number"
          id="duration"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Create Flash Swarm</button>
    </form>
  );
};

export default FlashSwarmForm;
