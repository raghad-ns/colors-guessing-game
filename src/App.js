
import './App.css';
import ColorRow from './components/colors-row/colors-row.componet';
import { COLORS } from './data/colors';
import { useEffect, useState } from 'react';
import Row from './components/row/row.component';

function App() {
  const [ans, setAns] = useState([]);
  useEffect(() => {
    const currentAns = JSON.parse(sessionStorage.getItem('currentAns')) || [];
    setAns(currentAns);
  }, [])
  

  const handelClick = (color) => {
    if (ans.length < 4) {
      sessionStorage.setItem('currentAns', JSON.stringify([...ans, color]));
      setAns([...ans, color]);
    }
    // else {
    //   checkAnswer
    // }
  }

  return (
    <div className="App">
      <Row colors={COLORS} ans={ans} clear={true} setAns = {setAns} />
      <ColorRow colors={COLORS} hidden={false} handelClick={handelClick} />
    </div>
  );
}

export default App;
