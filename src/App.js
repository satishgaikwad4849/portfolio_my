import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './Pages/About/About';
import { Switch, Route } from "react-router-dom";
import ProjectInfo from './Pages/Home/ProjectInfo/ProjectInfo';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={ProjectInfo} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
