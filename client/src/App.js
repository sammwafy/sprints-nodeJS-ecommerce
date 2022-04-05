import {Switch, BrowserRouter as Router, Route} from "react-router-dom"
import HomePage from "./Pages/homepage/HomePage";
import AdminPage from "./Componenets/Admin-Dashboard/AdminPage";




function App() {
  return (

    <Router>
      
        <Switch>
          <Route path = "/admin">
            <AdminPage />
          </Route>
          <Route path = "/">
            <HomePage/>
          </Route>
        </Switch>
  
    </Router>
      
  );
}

export default App;
