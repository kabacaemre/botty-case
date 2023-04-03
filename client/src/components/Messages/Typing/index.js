import React, { useEffect, useState } from 'react';

import './Typing.scss';

function Typing() {
  const [numberOfDots, setDots] = useState(1);

  const incrementDots = () => {
    setDots(numberOfDots === 3 ? 1 : numberOfDots + 1);
  };

  useEffect(() => {
    const timeout = setTimeout(incrementDots, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [numberOfDots]);

  return (
    <span key="typing" className="messages__message--typing">
      {`Typing${''.padStart(numberOfDots, '.')}`}
    </span>
  );
}

export default Typing;
