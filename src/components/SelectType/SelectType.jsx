import React from 'react';
import styles from './selectType.module.scss';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NewTraining = () => {
  const trainingType = ['AB', 'ABC', 'ABCD', 'ABCDE', 'ABCDEF'];

  return (
    <section className={styles.newTraining}>
      <h1>Novo treino</h1>

      <h2>Selecione o tipo de treino:</h2>

      {trainingType.map((option, i) => {
        return (
          <Link
            to='/select-exercises'
            key={i}
            className={styles.option}
            onClick={(e) => {
              localStorage.setItem(
                'newTrainingDivision',
                JSON.stringify([...e.target.innerText]),
              );
            }}
          >
            {option}
            <BsArrowRightCircleFill size={20} />
          </Link>
        );
      })}
    </section>
  );
};

export default NewTraining;
