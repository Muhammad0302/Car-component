import React from "react";
import DialerSipIcon from "@material-ui/icons/DialerSip";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./Car.css";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
function Car() {
  return (
    <div className="container">
      <div className="subContainer">
        <div className="leftContainer">
          <img
            style={{ resizeMode: "contain" }}
            className="image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnGPy390sdsfiSnMiRK1mtRXrr7cQBDcqMQ&usqp=CAU"
            alt=""
          />
          <div className="featured">
            <div>FEATURED</div>
            <ErrorOutlineIcon fontSize="small" style={{ marginLeft: "3px" }} />
          </div>
          <div className="bottomIcon">
            {" "}
            <img className="imageIcon" src="image.png" />
            16
          </div>
        </div>
        <div className="rightConatiner">
          <div className="rightSubConatiner">
            <h3>Toyota Corolla 2015 GLi 1.3 VVTi for Sale</h3>
            <h3>PKR 22.1 lacs</h3>
          </div>
          <p className="rightContianer_text">Karachi</p>
          <div className="right_subText">
            <p>2015</p>
            <p className="drawVerticleLine"></p>
            <p>96,000 km</p>
            <p className="drawVerticleLine"></p>
            <p>Petrol</p>

            <p className="drawVerticleLine"></p>
            <p>1300 cc</p>
            <p className="drawVerticleLine"></p>
            <p>Manual</p>
          </div>
          <div className="right_lastBar">
            <div>Updated 10 minutes ago</div>
            <div className="RightBottom_btn">
              <div className="heartIcon">
                <FavoriteBorderIcon />
              </div>
              <div className="showPhone_no">
                <div className="showPhone_btn" style={{ color: "white" }}>
                  <DialerSipIcon />
                  Show Phone No.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Car;
