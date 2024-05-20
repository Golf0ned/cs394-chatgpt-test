import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const FlashSwarmList = () => {
  const { state } = useContext(AppContext);

  return (
    <div>
      <h2>Flash Swarms</h2>
      <ul>
        {state.swarms.map((swarm, index) => (
          <li key={index}>
            {swarm.name} - {swarm.duration} hours
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlashSwarmList;
