import React, { useEffect, useState } from "react";
import { Row, Col, ListGroup, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { get5DayForecast } from "../redux/actions/weatherActions";
import moment from "moment";
import { images } from "../assets/index";
import Message from "../components/Message";

const Forecast = () => {
  const dispatch = useDispatch();

  const currentLocation = useSelector((state) => state.currentLocationReducer);
  const { location, key } = currentLocation;

  const forecastReducer = useSelector((state) => state.forecastReducer);
  const { loading, error, forecast } = forecastReducer;

  useEffect(() => {
    if (location !== null && key !== null) {
      dispatch(get5DayForecast(key));
    }
  }, [dispatch, key]);

  return (
    <>
      {error ? (
        <Message variant="danger" text={error} />
      ) : (
        <ListGroup
          horizontal="lg"
          className="my-2 mt-4 d-flex justify-content-center"
          style={{ boxShadow: "0px 3px 16px 4px #000000" }}
        >
          {forecast.DailyForecasts &&
            forecast.DailyForecasts.map((data, idx) => (
              <ListGroup.Item key={idx}>
                <Row className="d-flex p-3 text-center" lg={1} md={4} xs={4}>
                  <Col>{moment(data.Date).format("dddd")}</Col>
                  <Col>{data.Day.IconPhrase}</Col>
                  <Col>
                    <Image src={images[data.Day.Icon].src}></Image>
                  </Col>
                  <Col>
                    {data.Temperature.Minimum.Value}{" "}
                    {data.Temperature.Minimum.Unit}° /{" "}
                    {data.Temperature.Maximum.Value}{" "}
                    {data.Temperature.Minimum.Unit}°{" "}
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
        </ListGroup>
      )}
    </>
  );
};

export default Forecast;
