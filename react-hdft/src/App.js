import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Base from "./pages/base";
import Services from "./pages/services";
import Contact from "./pages/contact";
import SignUp from "./pages/signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/base" exact component={Base} />
        <Route path="/services" component={Services} />
        <Route path="/contact-us" component={Contact} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
