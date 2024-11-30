import react, { useState } from "react";
import img from "./assets/images/Canada-Toronto.jpg";
import './App.css';
import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
function App() {
  const [brightness, setBrightness] = useState({
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  });
  const [contrast, setContrast] = useState({
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  });
  const [saturate, setSaturate] = useState({
    name: "saturate",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  });
  const [grayscale, setGrayscale] = useState({
    name: "Grayscale",
    property: "grayscale",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  });
  const [sepia, setSepia] = useState({
    name: "Sepia",
    property: "sepia",
    value: 100,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  });
  const [hueRotate, setHueRotate] = useState({
    name: "Hue Rotate",
    property: "hue-Rotate",
    value: 100,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  });
  const [blur, setBlur] = useState({
    name: "Blur",
    property: "blur",
    value: 10,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px",
  });

  const [background, setBackground] = useState("https://unsplash.com/photos/the-sun-is-setting-over-the-desert-with-many-cacti-cI7n64rSTqc")
  return (
    <div>
      <Announcement/>
      <Navbar setBackground={setBackground}/>
      <div className="container">
        <div className="image-container">
          <div className="image">
            <img
              className="img"
              src={img}
              alt="pic"
              style={{
                filter: `${brightness.property}(${brightness.value}${brightness.unit})
                ${contrast.property}(${contrast.value}${contrast.unit})
                ${saturate.property}(${saturate.value}${saturate.unit})
                ${grayscale.property}(${grayscale.value}${grayscale.unit})
                ${sepia.property}(${sepia.value}${sepia.unit})
                ${hueRotate.property}(${hueRotate.value}${hueRotate.unit})
                ${blur.property}(${blur.value}${blur.unit})`,
              }}
            />
          </div>
        </div>
        <div className="options">
          <p>{brightness.name}</p>
          <input
            type="range"
            min={brightness.range.min}
            max={brightness.range.max}
            onChange={(e) => {
              setBrightness({ ...brightness, value: `${e.target.value}` });
            }}
          />
          <p>{saturate.name}</p>
          <input
            type="range"
            min={saturate.range.min}
            max={saturate.range.max}
            onChange={(e) => {
              setSaturate({ ...saturate, value: `${e.target.value}` });
            }}
          />
          <p>{grayscale.name}</p>
          <input
            type="range"
            min={grayscale.range.min}
            max={grayscale.range.max}
            onChange={(e) => {
              setGrayscale({ ...grayscale, value: `${e.target.value}` });
            }}
          />
          <p>{sepia.name}</p>
          <input
            type="range"
            min={sepia.range.min}
            max={sepia.range.max}
            onChange={(e) => {
              setSepia({ ...sepia, value: `${e.target.value}` });
            }}
          />
          <p>{hueRotate.name}</p>
          <input
            type="range"
            min={hueRotate.range.min}
            max={hueRotate.range.max}
            onChange={(e) => {
              setHueRotate({ ...hueRotate, value: `${e.target.value}` });
            }}
          />
          <p>{contrast.name}</p>
          <input
            type="range"
            min={contrast.range.min}
            max={contrast.range.max}
            onChange={(e) => {
              setContrast({ ...contrast, value: `${e.target.value}` });
            }}
          />
          <p>{blur.name}</p>
          <input
            type="range"
            min={blur.range.min}
            max={blur.range.max}
            onChange={(e) => {
              setBlur({ ...blur, value: `${e.target.value}` });
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
