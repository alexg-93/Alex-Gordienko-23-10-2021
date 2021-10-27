import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import Zoom from "react-reveal/Zoom";
import Forecast from "../components/Forecast";
import { getCurrentLocation } from "../redux/actions/weatherActions";
import Weather from "../components/Weather";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeScreen = ({ match }) => {


  const [locationKey, setLocationKey] = useState(match.params.id);
  const [locationName, setLocationName] = useState(match.params.name);

  const dispatch = useDispatch();
  const currentLocation = useSelector((state) => state.currentLocationReducer);
  const { loading, error, location, localizedName, key } = currentLocation;

  const favoritesReducer = useSelector((state) => state.favoritesReducer);
  const { error: errorFavorites } = favoritesReducer;

  useEffect(() => {
    match.params
      ? dispatch(getCurrentLocation(locationKey, locationName))
      : dispatch(getCurrentLocation());
  }, [dispatch, match.params, locationKey, locationName]);

  return (
    <>
      {errorFavorites && (
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
      )}

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

      <Row
        md={2}
        xs={1}
        me="auto"
        className="d-flex justify-content-center w-100"
      >
        <SearchBox />
      </Row>
      {loading ? (
        <Row className="mt-5 w-100 d-flex justify-content-center">
          <Loader />
        </Row>
      ) : error ? (
        <Row
          className="mt-5 d-flex justify-content-center text-center"
          lg={3}
          md={2}
          xs={2}
        >
          <Message variant="danger" text={error} />
        </Row>
      ) : (
        <>
          <Row className="mt-3 w-100">
            {location && (
              <Col className="mt-3  d-flex justify-content-center">
                <Zoom>
                  <Weather
                    key={key}
                    id={key}
                    location={location}
                    localizedName={localizedName}
                    liked={false}
                  />
                </Zoom>
              </Col>
            )}
          </Row>

          <Zoom left>
            <Forecast />
          </Zoom>
        </>
      )}
    </>
  );
};

export default HomeScreen;
