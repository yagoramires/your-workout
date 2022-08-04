import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../context/contextProvider';
import styles from './selectExercises.module.scss';

const SelectExercises = () => {
  const { setSelectedMuscle } = useStateContext();

  const [muscularType, setMuscularType] = useState('');

  const muscularTypes = {
    superiores: ['Peito', 'Costas', 'Ombros', 'Bíceps', 'Tríceps'],
    inferiores: ['Quadríceps', 'Posterior', 'Panturrilhas'],
    tronco: ['Abdomên', 'Lombar'],
  };

  return (
    <section className={styles.exercisesContainer}>
      <h1>Selecionar exercícios</h1>

      <div>
        {/* <h2 className={styles.lowerTitle}>Treino </h2> */}

        {muscularType === '' ? (
          <div>
            <p className={styles.selection}>Selecione o grupo muscular</p>
            <p
              className={styles.option}
              onClick={() => {
                setMuscularType('superiores');
              }}
            >
              Superiores
            </p>
            <p
              className={styles.option}
              onClick={() => {
                setMuscularType('inferiores');
              }}
            >
              Inferiores
            </p>
            <p
              className={styles.option}
              onClick={() => {
                setMuscularType('tronco');
              }}
            >
              Tronco
            </p>
          </div>
        ) : (
          <div>
            <p className={styles.selection}>Selecione o músculo</p>
            {muscularType === 'superiores'
              ? muscularTypes.superiores.map((muscle, i) => {
                  return (
                    <Link
                      to='/exercises'
                      key={i}
                      className={styles.option}
                      onClick={() => setSelectedMuscle(muscle)}
                    >
                      {muscle}
                    </Link>
                  );
                })
              : ''}
            {muscularType === 'inferiores'
              ? muscularTypes.inferiores.map((muscle, i) => {
                  return (
                    <Link
                      to='/exercises'
                      key={i}
                      className={styles.option}
                      onClick={() => setSelectedMuscle(muscle)}
                    >
                      {muscle}
                    </Link>
                  );
                })
              : ''}
            {muscularType === 'tronco'
              ? muscularTypes.tronco.map((muscle, i) => {
                  return (
                    <Link
                      to='/exercises'
                      key={i}
                      className={styles.option}
                      onClick={() => setSelectedMuscle(muscle)}
                    >
                      {muscle}
                    </Link>
                  );
                })
              : ''}
            <p
              className={styles.back}
              onClick={() => {
                setMuscularType('');
              }}
            >
              Voltar
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SelectExercises;
