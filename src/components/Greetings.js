import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../store/greetingsSlice';
import './Greetings.css';

function Greetings() {
  const dispatch = useDispatch();
  const greetingsData = useSelector((state) => state.greetings.greetings);
  const [animation, setAnimation] = useState('');

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  const handleClick = () => {
    const animations = ['bounceRight', 'bounceLeft', 'bounceTop', 'bounceBottom'];
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    setAnimation(randomAnimation);
    dispatch(fetchGreetings());
  };

  useEffect(() => {
    if (animation) {
      setTimeout(() => setAnimation(''), 1000); // reset animation after 1s
    }
  }, [animation]);

  return (
    <div className="center">
      {greetingsData && <h2 className={animation}>{greetingsData.message}</h2>}

      <button onClick={handleClick} className="greeting-btn" type="button">
        Get Greeting
      </button>
    </div>
  );
}

export default Greetings;
