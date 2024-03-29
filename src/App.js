
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import Nav from './components/Nav';
import MobileNav from "./components/mobileNav";

function App() {
  {/* React router Nav system */}

  return (
    <BrowserRouter>
    <MobileNav />
    <Nav/>
    <Router></Router>
  </BrowserRouter>
  );
}

export default App;
