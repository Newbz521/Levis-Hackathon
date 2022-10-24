import React from "react";
import "./testComponent.css";
import { useState, useEffect } from "react";
import SelectSearch from "react-select-search";
import Person from "./human.png";
import Jeans from "./jeans.png";
import axios from "axios";

// import 'react-select-search/style.css'

function TestComponent(props) {
  const [slideIn, setSlideIn] = useState({ transform: "translate(0%, -40vh)" });
  const [toggle, setToggle] = useState(false);
  const [jeansWidth, setJeansWidth] = useState({ width: `calc(30vh)` });

  const [fetchedData, setFetchedData] = useState([]);

  let empty = "";
  function handleChange(e) {
    console.log(e.target.value);
    let size = parseInt(e.target.value) - 1.5;
    setJeansWidth({ width: `calc(${size}vh)` });
  }

  function setDisplay() {
    if (toggle == true) {
      // setShow("");
      setSlideIn({ transform: "translate(0%, -40vh)" });
    } else {
      setSlideIn({ transform: "translate(0%, 0%)" });
    }
    setToggle((prevCheck) => !prevCheck);
  }

  return (
    <>
      <div className="overallContainer">
        <button onClick={setDisplay}>Filter</button>

        <div className="imageContainer">
          <div className="modelContainer">
            <img className="model" src={Person}></img>
          </div>
          <div className="topHalf">
            <img src=""></img>
          </div>
          <div className="bottomHalf">
            <div className="jeansWrap" style={jeansWidth}>
              <img className="jeans" src={Jeans}></img>
            </div>
          </div>
        </div>

        <div className="filterContainer" style={slideIn}>
          <div className="jeansSelectCards">
            <select
              className="inputStyle"
              id="waistSizeSelector"
              size="1"
              name="waist"
              onChange={handleChange}
            >
              <option value="none" selected disabled hidden>
                Select Waist Size
              </option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
              <option value="32">32</option>
              <option value="33">33</option>
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
            </select>
          </div>
          <div className="jeansSelectCards">
            <select
              className="inputStyle"
              id="waistSizeSelector"
              size="1"
              name="waist"
              onChange={handleChange}
            >
              <option value="none" selected disabled hidden>
                Select Waist Size
              </option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
              <option value="32">32</option>
              <option value="33">33</option>
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
            </select>
          </div>

        </div>
      </div>
    </>
  );
}

export default TestComponent;
