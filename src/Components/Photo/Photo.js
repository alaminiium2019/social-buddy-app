import React, { useState, useEffect } from "react";


const Photo = () => {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results")
      .then((res) => res.json())
      .then((data) => setPhoto(data.results));
  }, []);
  return (
    <div>
      {photo.map((img) => (
        <ShowPhoto newPhoto={img}></ShowPhoto>
      ))}
    </div>
  );
};

function ShowPhoto(props){
    const {picture}=props.newPhoto;
    
    const ImagStyle={
        borderRadius:"50%",
        margin:"20px",
        border:"2px solid red"
    }

    return(
        <div >
            <img style={ImagStyle} src={picture.large}/>
        </div>
    )
}

export default Photo;

