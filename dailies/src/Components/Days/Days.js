import React, { Component } from "react";
import data from "../../data.json";

const MAX_LENGTH = 27;

class Days extends Component {
  render() {
    const days = data.map(day => {
      return (
        <section>
          <h2 className="day-number">{day.numbered}</h2>
          <ul className="wrapper">
            <li
              style={{
                backgroundColor: day.water
                  ? "rgba(144,196,254,.7)"
                  : "rgb(234,234,234)"
              }}
              className="icon"
            >
              <img
                className="icon-img"
                src={process.env.PUBLIC_URL + "/images/water.png"}
              />
            </li>
            <li
              className="icon"
              style={{
                backgroundColor: day.work
                  ? "rgba(125,152,255,.7)"
                  : "rgb(234,234,234)"
              }}
            >
              <img
                className="icon-img"
                src={process.env.PUBLIC_URL + "/images/work.png"}
              />
            </li>
            <li
              className="icon"
              style={{
                backgroundColor: day.connect
                  ? "rgba(148,82,255,.7)"
                  : "rgb(234,234,234)"
              }}
            >
              <img
                className="icon-img"
                src={process.env.PUBLIC_URL + "/images/connection.png"}
              />
            </li>
            <li
              className="icon"
              style={{
                backgroundColor: day.workout
                  ? "rgba(184,82,255,.7)"
                  : "rgb(234,234,234)"
              }}
            >
              <img
                className="icon-img"
                src={process.env.PUBLIC_URL + "/images/workout.png"}
              />
            </li>
            <li
              className="icon"
              style={{
                backgroundColor: day.music
                  ? "rgba(225,82,250,.7)"
                  : "rgb(234,234,234)"
              }}
            >
              <img
                className="icon-img"
                src={process.env.PUBLIC_URL + "/images/music.png"}
              />
            </li>
            <li
              className="icon"
              style={{
                backgroundColor:
                  day.weight < 150
                    ? "rgba(181, 226, 254, 0.7)"
                    : "rgb(234,234,234)"
              }}
            >
              <img
                className="icon-img"
                src={process.env.PUBLIC_URL + "/images/weight.png"}
              />
              <p className="weight">{day.weight}</p>
            </li>
            <li className="inner-box">
              <p className="caption">{day.caption}</p>
              <p className="day-week">{day.week}</p>
              <p className="week-number">{day.day}</p>
            </li>
            <li
              className="icon"
              style={{
                backgroundColor: day.code
                  ? "rgba(227,116,166,.7)"
                  : "rgb(234,234,234)"
              }}
            >
              <img src={process.env.PUBLIC_URL + "/images/code.png"} />
            </li>
            <li
              className="icon"
              style={{
                backgroundColor: day.oils
                  ? "rgba(181,253,254,.7)"
                  : "rgb(234,234,234)"
              }}
            >
              <img src={process.env.PUBLIC_URL + "/images/oils.png"} />
            </li>
            <li
              className="icon"
              style={{
                backgroundColor: day.mindful
                  ? "rgba(226,117,105,.7)"
                  : "rgb(234,234,234)"
              }}
            >
              <img src={process.env.PUBLIC_URL + "/images/mindful.png"} />
            </li>
            <li
              className="icon"
              style={{
                backgroundColor: day.food
                  ? "rgba(179,252,208,.7)"
                  : "rgb(234,234,234)"
              }}
            >
              <img src={process.env.PUBLIC_URL + "/images/food.png"} />
            </li>
            <li
              className="icon"
              style={{
                backgroundColor: day.read
                  ? "rgba(232,149,105,.7)"
                  : "rgb(234,234,234)"
              }}
            >
              <img src={process.env.PUBLIC_URL + "/images/read.png"} />
            </li>
            <li
              className="icon"
              style={{
                backgroundColor: day.earth
                  ? "rgba(178,253,170,.7)"
                  : "rgb(234,234,234)"
              }}
            >
              <img src={process.env.PUBLIC_URL + "/images/earth.png"} />
            </li>
            <li
              className="icon"
              style={{
                backgroundColor: day.outside
                  ? "rgba(177,253,103,.7)"
                  : "rgb(234,234,234)"
              }}
            >
              <img src={process.env.PUBLIC_URL + "/images/outside.png"} />
            </li>
            <li
              className="icon"
              style={{
                backgroundColor:
                  day.timeSlots > 30
                    ? "rgba(224,253,104,.7)"
                    : "rgb(234,234,234)"
              }}
            >
              <img src={process.env.PUBLIC_URL + "/images/timeSlots.png"} />
              <p
                className="time"
                style={{
                  backgroundColor:
                    day.timeSlots > 30
                      ? "rgb(230,253,141)"
                      : "rgb(234,234,234)"
                }}
              >
                {day.timeSlots}
              </p>
            </li>
            <li
              className="icon"
              style={{
                backgroundColor: day.vitamins
                  ? "rgba(254,253,105,.7)"
                  : "rgb(234,234,234)"
              }}
            >
              <img src={process.env.PUBLIC_URL + "/images/vitamins.png"} />
            </li>
            <li
              className="icon"
              style={{
                backgroundColor: day.learn
                  ? "rgba(254,194,112,.7)"
                  : "rgb(234,234,234)"
              }}
            >
              <img src={process.env.PUBLIC_URL + "/images/learn.png"} />
            </li>
          </ul>
          <div className="sleep">
            <p className="awake">{day.awake}</p>
            <p className="asleep">{day.asleep}</p>
          </div>
        </section>
      );
    });
    return <div className="days">{days}</div>;
  }
}

export default Days;