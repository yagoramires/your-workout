import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../context/contextProvider';

import ExerciseCard from '../ExerciseCard/ExerciseCard';
import styles from './exercises.module.scss';

const Exercises = () => {
  const { exercises, selectedMuscle } = useStateContext();

  const [filterExercises, setFilterExercises] = useState();

  useEffect(() => {
    if (exercises !== undefined && selectedMuscle) {
      const filter = exercises.filter(
        (exercise) =>
          exercise.target === selectedMuscle ||
          exercise.bodyPart === selectedMuscle,
      );
      setFilterExercises(filter);
    }
  }, [selectedMuscle]);

  return (
    <div className={styles.exerciseModal}>
      <Link to='/select-exercises'>Voltar</Link>
      {filterExercises
        ? filterExercises.map((exercise) => {
            return <ExerciseCard exercise={exercise} key={exercise.id} />;
          })
        : ''}
    </div>
  );
};

export default Exercises;
