import React, { createContext, useContext, useEffect, useState } from 'react';
import exerciseOptions from '../api/exercisesService';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [exercises, setExercises] = useState();
  const [selectedMuscle, setSelectedMuscle] = useState();

  const fetchApi = async () => {
    const data = await exerciseOptions;
    setExercises(data);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    console.log(selectedMuscle);
    if (selectedMuscle) {
      switch (selectedMuscle) {
        case 'Peito':
          setSelectedMuscle('pectorals');
          break;
        case 'Costas':
          setSelectedMuscle('back');
          break;
        case 'Ombro':
          setSelectedMuscle('shoulders');
          break;
        case 'Bíceps':
          setSelectedMuscle('biceps');
          break;
        case 'Tríceps':
          setSelectedMuscle('triceps');
          break;
        case 'Quadríceps':
          setSelectedMuscle('quads');
          break;
        case 'Posterior':
          setSelectedMuscle('hamstrings');
          break;
        case 'Panturrilhas':
          setSelectedMuscle('calves');
          break;
        case 'Abdomên':
          setSelectedMuscle('abs');
          break;
        case 'Lombar':
          setSelectedMuscle('spine');
          break;
        case 'Cardio':
          setSelectedMuscle('cardio');
          break;
        default:
          break;
      }
    }
  }, [selectedMuscle]);

  return (
    <StateContext.Provider
      value={{ exercises, selectedMuscle, setSelectedMuscle }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
