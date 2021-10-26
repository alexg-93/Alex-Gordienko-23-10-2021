import React, { useState } from "react";
import { Card, Badge, Image, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { images } from "../assets/index";
import {
  addFavoriteLocation,
  removeFavoriteLocation,
} from "../redux/actions/favoritesActions";
import { LinkContainer } from "react-router-bootstrap";


const Weather = ({ location, localizedName, id, liked,redirect}) => {


  const dispatch = useDispatch();

  const [isLiked , setIsLiked] = useState(liked)

  const handleAddFavoriteLocation = () => {
    
      setIsLiked(!isLiked)
      dispatch(addFavoriteLocation())
    
  };

  const handleRemoveFavoriteLocation = () => {
 
    setIsLiked(!isLiked)
    dispatch(removeFavoriteLocation(id,localizedName));
  
  };

  const color = isLiked ? "#EF233C" : "";

  return (
    <>
    
    <Card
      bg="light"
      key=""
      text="dark"
      style={{
        width: "300px",
      
        boxShadow: "0px 3px 16px 4px #000000",
   
      }}
      className="mb-2 d-flex text-center"
    >
      <Card.Header>
      
      <span style={{ fontSize: 30}}>{localizedName}</span>
       
        <i
          className={!isLiked ? "bi bi-heart" : "bi bi-heart-fill"}
          style={{
            fontSize: 24,
            position: "absolute",
            right: 20,
            color: color,
           
          }}
          onClick={
            isLiked ? handleRemoveFavoriteLocation : handleAddFavoriteLocation
          }
          
        />

      </Card.Header>

    {redirect ? (
      <LinkContainer to={`/location/${id}/${localizedName}`}>
      <Card.Body>
        <Card.Title>{location.WeatherText}</Card.Title>
        <div>
          <Image src={images[location.WeatherIcon].src}></Image>
        </div>
      </Card.Body>
    </LinkContainer>
    ) : (
      <Card.Body>
        <Card.Title>{location.WeatherText}</Card.Title>
        <div>
          <Image src={images[location.WeatherIcon].src}></Image>
        </div>
      </Card.Body>
    )}

     
      <Card.Footer className="text-muted">
        {" "}
        <Badge bg="warning" text="dark" style={{ fontSize: 20 }}>
          {location.Temperature.Metric.Value} {location.Temperature.Metric.Unit}
          °
        </Badge>
       
      </Card.Footer>
   
    </Card>
    </>
  );
};

export default Weather;
