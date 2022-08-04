import React from 'react';
import styles from './newtraining.module.scss';
import { BsArrowRightCircleFill } from 'react-icons/bs';

const NewTraining = () => {
  const trainingType = ['AB', 'ABC', 'ABCD', 'ABCDE', 'ABCDEF'];

  return (
    <section className={styles.newTraining}>
      <h1>Novo treino</h1>

      <h2>Selecione o tipo de treino:</h2>

      {trainingType.map((option, i) => {
        return (
          <p key={i} className={styles.option}>
            {option}
            <BsArrowRightCircleFill size={20} />
          </p>
        );
      })}
    </section>
  );
};

export default NewTraining;
