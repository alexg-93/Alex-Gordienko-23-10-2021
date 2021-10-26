
// import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Provider } from "react-redux";
import store from './redux/store'
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import {useEffect} from 'react'

function App() {

  

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Container>
            <Route exact path="/" component={HomeScreen}/>
            <Route  path="/location/:id/:name" component={HomeScreen}/>
            <Route path="/favorites" component={FavoriteScreen}/>
          </Container>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
