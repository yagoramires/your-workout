import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import SelectType from './components/SelectType/SelectType';
import SelectExercises from './components/SelectExercises/SelectExercises';
import Exercises from './components/Exercises/Exercises';

function App() {
  return (
    <div className='App'>
      <>
        <Header />
        <Routes>
          <Route path='/' element={<SelectType />} />
          <Route path='/select-type' element={<SelectType />} />
          <Route path='/select-exercises' element={<SelectExercises />} />
          <Route path='/exercises' element={<Exercises />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
