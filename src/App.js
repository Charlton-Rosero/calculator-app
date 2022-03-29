import { useState } from 'react';
import './App.css';

function App() {

const [num1, setNum1] = useState('')
const [num2, setNum2] = useState('')
const [result, setresult] = useState(0)

const value1 =  (event) =>{
 setNum1(event.target.value)
}

const value2 =  (event) =>{
 setNum2(event.target.value)
}

const results =  (event) => {
event.preventDefault();
const number1 = parseInt(num1);
const number2 = parseInt(num2);
setresult(number1 + number2) 

}


  return (
    <div className="App">
     
     <div className="container">
  <h1>Add with React!</h1>

  <form className="add">
    <input onChange={(event) => value1(event)} />
    <span>+</span>
    <input onChange={(event) => value2(event)} />
    <span>=</span>
    <button type='submit'onClick={(event) => results(event)}>submit</button>
    <h3>sum ={result}</h3>
  </form>

</div>


    </div>
  );
}

export default App;
