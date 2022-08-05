import React, { useState } from 'react';
import styles from './exerciseCard.module.scss';

const ExerciseCard = ({ exercise }) => {
  const [active, setActive] = useState(false);

  const trainingDivision = JSON.parse(
    localStorage.getItem('newTrainingDivision'),
  );

  const handleSubmit = (e, id) => {
    console.log(e);
    console.log(id);
  };

  return (
    <div className={`${active ? styles.active : styles.notActive}`}>
      <div>
        <img
          src={exercise.gifUrl}
          alt={exercise.name}
          onClick={() => {
            setActive(!active);
          }}
        />
        <p
          onClick={() => {
            setActive(!active);
          }}
        >
          {exercise.name}
        </p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e.target, exercise.id);
        }}
      >
        <select name='' id=''>
          {trainingDivision.map((type) => {
            return (
              <option value={type} key={type}>
                {type}
              </option>
            );
          })}
        </select>

        <input type='number' placeholder='Repetições' max={20} min={6} />
        <button type='submit'>ADD</button>
      </form>
    </div>
  );
};

export default ExerciseCard;
