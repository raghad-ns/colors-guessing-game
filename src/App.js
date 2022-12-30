
import './App.css';
import ColorRow from './components/colors-row/colors-row.componet';
import { COLORS } from './data/colors';
import { useEffect, useState } from 'react';
import Row from './components/row/row.component';
import List from './components/list/list.component';
import Header from './components/header/header.component';

function App() {
  const [ans, setAns] = useState([]);
  const [answersList, setAnswersList] = useState([]);
  const [win, setWin] = useState(false);
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    generateQuestion() ;
    const currentAns = JSON.parse(sessionStorage.getItem('currentAns')) || [];
    setAns(currentAns);
    const list = JSON.parse(sessionStorage.getItem('answersList')) || [];
    setAnswersList(list);
  }, [])

  useEffect(() => {
    sessionStorage.setItem('answersList', JSON.stringify(answersList));
  }, [answersList])

  const generateQuestion = () => {
    let tempQuestins = [];
    for (let i = 0; i < 4; i++) {
      const index = (Math.floor(Math.random() * 10)) % COLORS.length;
      tempQuestins.push(COLORS[index]);
    }
    setQuestion(tempQuestins);
    console.log(tempQuestins);
  } 

  const handleSubmit = (ans) => {
    const tempStats = (checkAnswer (ans)) ;
    if (tempStats.cc === 4) {
      setWin (true) ;
    }
    setAnswersList([{answer: ans , stats: checkAnswer(ans)}, ...answersList]);
    sessionStorage.setItem('answersList', JSON.stringify(answersList));
    sessionStorage.setItem('currentAns', JSON.stringify([]));
    setAns(JSON.parse(sessionStorage.getItem('currentAns')) || []);
    console.log(answersList.length);
  }

  const reset = () => {
    setWin (false) ;
    setAnswersList ([]);
    generateQuestion();
  }

  /**
   * 
   * @param {String} color 
   */
  const handelClick = (color) => {
    if (ans.length < 3) {
      const newAns = [...ans, color];
      sessionStorage.setItem('currentAns', JSON.stringify(newAns));
      setAns([...ans, color]);
    } else { handleSubmit([...ans, color]) }
  }

  const checkAnswer = (answer) => {
    let cc = 0, cr = 0;

    const map = {};
    for (let i = 0; i < question.length; i++) {
      if (!map[question[i]])
        map[question[i]] = 0;
      map[question[i]]++;
    }

    for (let i = 0; i < answer.length; i++) {
      if (map[answer[i]]) {
        cr += 1;
        map[answer[i]]--;
      }
    }

    for (let i = 0; i < answer.length; i++) {
      if (question[i] === answer[i]) {
        cc += 1;
        cr--;
      }
    }
    return { cc, cr }
  }

  return (
    <div className="App">
      <Header steps={answersList.length} win = {win} reset = {reset}/>
      <Row question={!win} ans={question} clear={false} />
      <List answersList={answersList} />
      <Row ans={ans} clear={true} setAns={setAns} />
      <ColorRow colors={COLORS} handelClick={handelClick} />
    </div>
  );
}

export default App;
