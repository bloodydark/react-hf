import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import SignUp from "./pages/signup";
import BarChart from "./graph/BarChart";
import Sample from "./sample";

function App() {
  const style = {
    width: "50%",
    // margin: "0 auto",
    marginTop: 50,
  };
  return (
    <Router>
      <Navbar />
      <div style={style}>
        <Sample />
      </div>
      <BarChart />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact-us" component={Contact} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
