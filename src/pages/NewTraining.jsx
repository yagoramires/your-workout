import React, { useState } from 'react';
import SelectType from '../components/SelectType/SelectType';
import SelectExercises from '../components/SelectExercises/SelectExercises';
import Exercises from '../components/Exercises/Exercises';

const NewTraining = () => {
  const [selectType, setSelectType] = useState();

  return (
    <>
      <SelectType />
      {/* <SelectExercises />
      <Exercises /> */}
    </>
  );
};

export default NewTraining;
