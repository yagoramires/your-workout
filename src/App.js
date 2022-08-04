import FirstAccess from './components/FirstAccess/FirstAccess';
import Header from './components/Header/Header';
import NewTraining from './components/NewTraining/NewTraining';
import SelectExercises from './components/SelectExercises/SelectExercises';

function App() {
  const first = false;

  return (
    <div className='App'>
      {first ? (
        <FirstAccess />
      ) : (
        <>
          <Header />
          {/* <NewTraining /> */}
          <SelectExercises />
        </>
      )}
    </div>
  );
}

export default App;
