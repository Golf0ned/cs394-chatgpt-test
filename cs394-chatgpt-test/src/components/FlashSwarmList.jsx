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
            <strong>{swarm.name}</strong><br />
            Start: {new Date(swarm.startTime).toLocaleString()}<br />
            End: {new Date(swarm.endTime).toLocaleString()}<br />
            Zoom Link: <a href={swarm.zoomLink} target="_blank" rel="noopener noreferrer">{swarm.zoomLink}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlashSwarmList;
