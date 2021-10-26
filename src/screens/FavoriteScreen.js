import React , {useEffect,useState} from "react";
import { Row, Col,Badge } from "react-bootstrap";
import { useSelector} from "react-redux";
import Message from "../components/Message";
import Weather from "../components/Weather";


import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const FavoriteScreen = () => {



  const favoritesReducer = useSelector((state) => state.favoritesReducer);
  const { favoritesLocations } = favoritesReducer;


  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {
        <Row xs={1} md={2} lg={4} className=" mb-5 mt-5">
          {favoritesLocations && favoritesLocations.length > 0 ? (
            favoritesLocations.map((location) => (
            
              <>
             
              <Col
                key={location.key}
                className="d-flex justify-content-center p-3"
             
              >
                
      
                <Weather
                  key={location.key}
                  id={location.key}
                  location={location.location}
                  localizedName={location.localizedName}
                  liked={true}
                  redirect={true}
         
                />
                
              </Col>
          
            
              </>
            ))
          ) : (
            <Message
              variant="danger"
              text="Looks like you dont have any liked locations.."
            />
          )}
        </Row>
      }
    </>
  );
};

export default FavoriteScreen;
