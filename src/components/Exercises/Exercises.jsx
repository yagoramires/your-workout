import React, { useEffect, useState } from 'react';
import { useStateContext } from '../../context/contextProvider';

import styles from './exercises.module.scss';

const Exercises = () => {
  const { exercises, selectedMuscle } = useStateContext();

  const [filterExercises, setFilterExercises] = useState();
  const [active, setActive] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    if (exercises !== undefined) {
      const filter = exercises.filter(
        (exercise) => exercise.bodyPart === selectedMuscle,
      );
      setFilterExercises(filter);
    }
  }, [exercises]);

  return (
    <div className={styles.exerciseModal}>
      <p>x</p>
      {filterExercises
        ? filterExercises.map((exercise) => {
            return (
              <div
                key={exercise.id}
                className={`${
                  active && id === exercise.id
                    ? styles.active
                    : styles.notActive
                }`}
              >
                <img
                  src={exercise.gifUrl}
                  alt={exercise.name}
                  onClick={() => {
                    setId(exercise.id);
                    setActive(!active);
                  }}
                />
                <p
                  onClick={() => {
                    setId(exercise.id);
                    setActive(!active);
                  }}
                >
                  {exercise.name}
                </p>
              </div>
            );
          })
        : ''}
    </div>
  );
};

export default Exercises;
