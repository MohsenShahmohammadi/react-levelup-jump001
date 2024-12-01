import { useRef, useState } from "react";
import img from "./assets/images/Canada-Toronto.jpg";
import "./App.css";

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
    value: 0,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  });
  const [sepia, setSepia] = useState({
    name: "Sepia",
    property: "sepia",
    value: 10,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  });
  const [hueRotate, setHueRotate] = useState({
    name: "Hue Rotate",
    property: "hue-Rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  });
  const [blur, setBlur] = useState({
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px",
  });

  const [background, setBackground] = useState("");
  const brightnessRef = useRef(brightness.value);
  return (
    <div>
      <div className="container">
        <div className="controller-container">
          <div className="link-group">
            <h3>Welcome to Photo Editor</h3>
            <p>image Link:</p>
            <input
              type="text"
              className="input"
              placeholder="Please insert your image Link"
              onChange={(e) => {
                setBackground(e.target.value);
              }}
            />
          </div>
          <div className="controller-options">
            <div className="option-group">
              <div>
                <p>{brightness.name}</p>
                <input
                  type="range"
                  min={brightness.range.min}
                  max={brightness.range.max}
                  value={brightness.value}
                  onChange={(e) => {
                    setBrightness({
                      ...brightness,
                      value: `${e.target.value}`,
                    });
                  }}
                />
              </div>
              <input
                className="inputOption"
                type="text"
                value={brightness.value}
              />
            </div>
            <div className="option-group">
              <div>
                <p>{saturate.name}</p>
                <input
                  type="range"
                  min={saturate.range.min}
                  max={saturate.range.max}
                  value={saturate.value}
                  onChange={(e) => {
                    setSaturate({ ...saturate, value: `${e.target.value}` });
                  }}
                />
              </div>
              <input
                className="inputOption"
                type="text"
                value={saturate.value}
              />
            </div>
            <div className="option-group">
              <div>
                <p>{grayscale.name}</p>
                <input
                  type="range"
                  min={grayscale.range.min}
                  max={grayscale.range.max}
                  value={grayscale.value}
                  onChange={(e) => {
                    setGrayscale({ ...grayscale, value: `${e.target.value}` });
                  }}
                />
              </div>
              <input
                className="inputOption"
                type="text"
                value={grayscale.value}
              />
            </div>
            <div className="option-group">
              <div>
                <p>{sepia.name}</p>
                <input
                  type="range"
                  min={sepia.range.min}
                  max={sepia.range.max}
                  value={sepia.value}
                  onChange={(e) => {
                    setSepia({ ...sepia, value: `${e.target.value}` });
                  }}
                />
              </div>
              <input className="inputOption" type="text" value={sepia.value} />
            </div>
            <div className="option-group">
              <div>
                <p>{hueRotate.name}</p>
                <input
                  type="range"
                  min={hueRotate.range.min}
                  max={hueRotate.range.max}
                  value={hueRotate.value}
                  onChange={(e) => {
                    setHueRotate({ ...hueRotate, value: `${e.target.value}` });
                  }}
                />
              </div>
              <input
                className="inputOption"
                type="text"
                value={hueRotate.value}
              />
            </div>
            <div className="option-group">
              <div>
                <p>{contrast.name}</p>
                <input
                  type="range"
                  min={contrast.range.min}
                  max={contrast.range.max}
                  value={contrast.value}
                  onChange={(e) => {
                    setContrast({ ...contrast, value: `${e.target.value}` });
                  }}
                />
              </div>
              <input
                className="inputOption"
                type="text"
                value={contrast.value}
              />
            </div>
            <div className="option-group">
              <div>
                <p>{blur.name}</p>
                <input
                  type="range"
                  min={blur.range.min}
                  max={blur.range.max}
                  value={blur.value}
                  onChange={(e) => {
                    setBlur({ ...blur, value: `${e.target.value}` });
                  }}
                />
              </div>
              <input className="inputOption" type="text" value={blur.value} />
            </div>
          </div>
        </div>
        <div className="image-container">
          <div className="image">
            <img
              className="img"
              src={background === "" ? img : background}
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
      </div>
    </div>
  );
}

export default App;
