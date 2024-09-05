import { useState } from "react";
import "./Bulb.css";

const Bulb = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => setIsOn((prevState) => !prevState);

  return (
    <>
      <div className="bulb-container">
        <div className={`bulb ${isOn ? "on" : "off"}`}>
          <div className="filament"></div>
          <div className="holder"></div>
        </div>
        <div className="controls">
          <button
            onClick={handleToggle}
            className={`button ${isOn ? "off-button" : "on-button"}`}
          >
            {isOn ? "Turn Off" : "Turn On"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Bulb;
