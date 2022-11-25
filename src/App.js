
import './App.css';
import ColorRow from './components/colors-row/colors-row.componet';
import { COLORS } from './data/colors';
import { useEffect, useState } from 'react';
import Row from './components/row/row.component';
import List from './components/list/list.component';
import Header from './components/header/header.component';

function App() {
  const [ans, setAns] = useState([]);
  const [answersList , sestAnswersList] = useState ([]) ;

  useEffect(() => {
    const currentAns = JSON.parse(sessionStorage.getItem('currentAns')) || [];
    setAns(currentAns);
    const list = JSON.parse (sessionStorage.getItem ('answersList')) || [];
    sestAnswersList (list) ;
  }, [])

  const updateAnsersList = (ans) => {
    sestAnswersList ([ans , ...answersList]) ;
    sessionStorage.setItem ('answersList' , JSON.stringify (answersList)) ;
    sessionStorage.setItem ('currentAns' , JSON.stringify ([])) ;
    setAns (JSON.parse(sessionStorage.getItem('currentAns')) || []) ;
  }
  /**
   * 
   * @param {String} color 
   */
  const handelClick = (color) => {
    if (ans.length < 3) {
      const newAns = [...ans , color] ;
      sessionStorage.setItem('currentAns', JSON.stringify(newAns));
      setAns([...ans, color]);
    } else {updateAnsersList([...ans , color])}
  }

  useEffect (() =>{
    sessionStorage.setItem ('answersList' , JSON.stringify (answersList)) ;
  } , [answersList])

  return (
    <div className="App">
      <Header steps = {answersList.length}/>
      <List answersList = {answersList}/>
      <Row  ans={ans} clear={true} setAns = {setAns}  />
      <ColorRow colors={COLORS} handelClick={handelClick} />
    </div>
  );
}

export default App;
