
import './App.css';
import ColorRow from './components/colors-row/colors-row.componet';
import { COLORS } from './data/colors';
import { useEffect, useState } from 'react';

function App() {
  const [ans, setAns] = useState([]);
  useEffect(() => {
    const currentAns = JSON.parse(sessionStorage.getItem('currentAns')) || [];
    setAns(currentAns);
  }, [])
  const handelClick = (color) => {
    if (ans.length < 3) {
      sessionStorage.setItem('currentAns', JSON.stringify([...ans, color]));
      setAns([...ans, color]);
    }
    console.log(ans);
  }

  return (
    <div className="App">
      <ColorRow colors={COLORS} hidden={true} ans={ans} cancel={true} />
      <ColorRow colors={COLORS} hidden={false} handelClick={handelClick} />
    </div>
  );
}

export default App;
