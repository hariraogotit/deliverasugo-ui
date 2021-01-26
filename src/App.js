import NavigatorBar from "./components/NavigatorBar";
import {Container, Row, Col} from "react-bootstrap";
import Welcome from "./components/Welcome"
import Footer from "./components/Footer"

function App() {

  const marginTop = {
    marginTop : "20px"
  }
  return (
    <div >
     <NavigatorBar/>
     <Container>
        <Row>
          <Col  lg={12} style={marginTop}>
            <Welcome />
          </Col>
        </Row>
     </Container>
     <Footer/>
    </div>
  );
}

export default App;
