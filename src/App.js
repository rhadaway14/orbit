import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Main from './pages/main';
import * as ROUTES from './constants/routes';

function App() {
  return (
    <Main />
  );
}

export default App;
