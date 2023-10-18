import './App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faFish } from '@fortawesome/free-solid-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

function App() {
  const icons = [
    faBell,
    faBolt,
    faBook,
    faBug,
    faCar,
    faEnvelope,
    faFile,
    faFish,
    faFire,
    faGhost,
    faHeart,
    faHouse,
    faImage,
    faStar,
    faSun,
  ];
  const [index, setIndex] = useState(0);

  function showNewIcon() {
    setTimeout(() => {
      setIndex(Math.floor(Math.random() * 15));
    }, 3000);
  }

  return (
    <div className="content">
      <button type="button" onClick={showNewIcon}>
        Click for new icon
      </button>
      <span>
        <FontAwesomeIcon icon={icons[index]} />
      </span>
    </div>
  );
}

export default App;
