import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Hello2 from './components/Hello2';
import Header01 from './components/Header01';
import PropFact from './components/PropFact';
import PropsNames from './components/PropsNames';
import PropsEmp from './components/PropsEmp';
import StateWelcome from './components/StateWelcome';
import StateIncrement from './components/StateIncrement';
import Style01 from './02day/Style01';
import Style02 from './02day/Style02';
import Style03 from './02day/Style03';
import State04 from './02day/State04';
import HandForm01 from './02day/HandForm01';
import HandForm02 from './02day/HandForm02';
import HandForm01copy from './02day/HandForm01copy';
import HandForm02copy from './02day/HandForm02copy';
import FormReducer from './02day/FormReducer';
import { Link, Route, Routes } from 'react-router-dom';
import Dummy from './03day/Dummy';

import Reducerfun from './02day/Reducerfun';
import RestAPI from './04day/RestAPI';
import RestCopy from './04day/RestCopy';
import UpdateEmp from './04day/UpdateEmp';
import UpdateEmail from './04day/UpdateEmail';
import StyleMsg from './StyleMsg';


function App() {


  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <Hello />
        <Hello2 /> 
        <Header01 />
        */}

        {/* <PropFact num="5"/> */}

       {/*  <PropsNames names={["Deepak","Suraj","Nikhil","Shrikant"]}/> */}
         
          
       {/* <PropsEmp emp={[{'ename':"Deepak",'empid':101,'sal':15000},
                        {'ename':"Deepak",'empid':101,'sal':15000}]} /> */}

      {/* <StateWelcome greet='Welcome'/> */}
      {/* <StateIncrement /> */}
      {/* <Style01 /> */}
      {/* <Style02 /> */}
       {/* <Style03 />  */}
       {/* <State04 /> */}
       {/* <State02 /> */}
       {/* <HandForm01 /> */}
       {/* <HandForm02 /> */}
       {/* <HandForm01copy /> */}
       {/* <HandForm02copy /> */}
       {/* <FormReducer /> */}
       {/* <Reducerfun /> */}

       {/* <RestCopy /> */}
       {/* <RestAPI/> */}

        {/* <UpdateEmp /> */}
        {/* <UpdateEmail /> */}

       {/* <Link to="/dummy">Dummy</Link>

        <Routes>
          <Route path='/dummy' element={<RestAPI/>}/>
        </Routes> */}
        <StyleMsg/>

      </header>
    </div>
  );
}

export default App;
