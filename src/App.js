import NavigatorBar from "./components/NavigatorBar";
import {Container, Row, Col} from "react-bootstrap";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  const marginTop = {
    marginTop : "20px"
  }
  return (
    <Router>
     <NavigatorBar/>
     <Container>
        <Row>
          <Col  lg={12} style={marginTop}>
            <Switch>
              <Route path="/" exact component={Welcome}/>
              <Route path="/login" exact component={Login}/>
              <Route path="/register" exact component={Register}/>
            </Switch>
          </Col>
        </Row>
     </Container>
     <Footer/>
    </Router>
  );
}

export default App;
