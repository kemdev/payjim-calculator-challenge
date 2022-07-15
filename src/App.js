import "./App.scss";

// mdb css
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import Calc from "./components/Calc";

import ghost from "./img/ghost.png";
import sphere from "./img/cornerSphere.png";
import rightImage from "./img/rightImage.png";
import books from "./img/books.png";

import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

function App() {
  return (
    <div className="App ">
      <MDBContainer fluid>
        <div className="landingPage d-flex align-items-center  h-100">
          <MDBRow className="align-items-center justify-content-center h-100" >
            <MDBCol
              size={3}
              className="leftImage d-flex flex-column h-100 user-select-none"
              style={{ justifyContent: "space-between" }}
            >
              <img src={sphere} className="top col-md-6 float-md-start mb-3 ms-md-3 " />
              <img src={ghost} className="bottom col-md-6 float-md-end mb-3 ms-md-3" />
            </MDBCol>
            <MDBCol size={6} className="calcCol">
              <Calc />
            </MDBCol>
            <MDBCol size={3}>
              <div
                className="rightImage d-flex flex-column h-100 user-select-none"
                style={{ justifyContent: "space-between" }}
              >
                <img src={rightImage} className="middle col-md-6 float-md-end mb-3 ms-md-3" />
                <img src={books} className="books col-md-6 float-md-end mb-3 ms-md-3" />
              </div>
            </MDBCol>
          </MDBRow>
        </div>
      </MDBContainer>
    </div>
  );
}

export default App;
