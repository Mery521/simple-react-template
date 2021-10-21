import axios from "axios"
import Homepage from "./webpage/Webpage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useEffect, useState} from "react";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [, setHome ] = useState("")

  useEffect(() => {
    axios.get("http://localhost:5000/movies").then(function(response) {
      setHome(response.data)
    })
  }, [])
  return (
  <Router>
    <Switch>
      <Route path="/">
        <Homepage />
      </Route>
    </Switch>
  </Router>

  );
}
export default App;