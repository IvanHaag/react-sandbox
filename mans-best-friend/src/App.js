import { useEffect, useState, useId } from "react";
import "./App.css";

const DOGS_API_URLS = {
  allBreeds: "https://dog.ceo/api/breeds/list/all",
  randomImage: "https://dog.ceo/api/breeds/image/random",
  images: "https://dog.ceo/api/breed/hound/images",
};

export const App = () => {
  const [image, setImage] = useState([]);
  const [input, setInput] = useState("");
  let [breed, subBreed] = input.split(" ");
  const MAX_ELEMENTS = "10";
  const id = useId();
  const [breedList, setBreedList] = useState([]);
  let pivot = "";
  let valid = "";

  //First Call
  useEffect(() => {
    console.log("called fetch");
    fetch("https://dog.ceo/api/breeds/image/random/10")
      .then((response) => response.json())
      .then((data) => {
        console.log("response", data);
        setImage(data.message);
      })
      .catch((err) => console.error("received error", err));
  }, []);
  useEffect(() => {
    console.log("called fetch");
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((data) => {
        console.log("response", data);
        setBreedList(data.message);
      })
      .catch((err) => console.error("received error", err));
  }, []);

  function fullLink() {
    let link = "https://dog.ceo/api/breed/" + breed;
    if (subBreed !== undefined) {
      link += "/" + subBreed;
    }
    link += "/images/random/" + MAX_ELEMENTS;
    console.log(link);
    return link;
  }

  function handleClick() {
    breedCheck();
    console.log(valid);
    if (valid === "true") {
      console.log("fetch");
      fetch(fullLink())
        .then((response) => response.json())
        .then((data) => {
          console.log("response", data);
          if (data.status !== "error") {
            setImage(data.message);
          }
        })
        .catch((err) => console.error("received error", err));
    } else {
      console.log("Did not Fetch");
    }
  }

  function breedCheck() {
    if (subBreed !== undefined) {
      pivot = breed;
      breed = subBreed;
      subBreed = pivot;
    }
    if (breedList[breed] !== undefined) {
      if (subBreed !== undefined) {
        if (breedList[breed].includes(subBreed) === true) {
          valid = "true";
        } else {
          valid = "false";
        }
      } else {
        console.log("Is Breed");
        valid = "true";
      }
    } else {
      console.log("Not Breed");
      valid = "false";
    }
  }

  return (
    <div>
      <div>
        <h1>Razas de perro</h1>
        <input
          id={id}
          value={input}
          onInput={(e) => setInput(e.target.value)}
          placeholder="Ingrese raza"
        ></input>
        <button
          onClick={() => {
            handleClick();
          }}
        >
          search
        </button>
      </div>
      <div>
        {image.map((img) => (
          <img src={img} alt="" />
        ))}
      </div>
    </div>
  );
};
