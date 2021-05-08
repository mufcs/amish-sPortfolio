import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import MySkills from "./components/MySkills"
import Work from "./components/Work"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import './app.css'

const  App = () =>{
  return (
   <Router>
   <div className="app">
   <NavBar />
   <Switch>
   <Route exact path="/" component={ Home } />
   <Route exact path="/about" component={ About } />
   <Route exact path="/myskills" component={ MySkills } />
   <Route exact path="/work" component={ Work }  />
   <Route exact path="/contact" component={ Contact } />
   </Switch>
   <Footer />
   </div>
   </Router>
  );
}

export default App;
