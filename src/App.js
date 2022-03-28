
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import Nav from './components/Nav';

function App() {
  {/* React router Nav system */}

  return (
    
    <BrowserRouter>
    <Nav/>
    <Router></Router>
  </BrowserRouter>
  );
}

export default App;
