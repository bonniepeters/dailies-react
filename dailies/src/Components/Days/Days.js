import React, { Component } from "react";
import data from "../../data.json";

class Days extends Component {
  render() {
    const days = data.map(day => {
      return (
        <>
          {/*  */}
          <h2>{day.numbered}</h2>
          <ul>
            <li><img src={process.env.PUBLIC_URL + '/images/water.png'}/></li>
            <li><img src={process.env.PUBLIC_URL + '/images/work.png'}/></li>
            <li><img src={process.env.PUBLIC_URL + '/images/connection.png'}/></li>
            <li><img src={process.env.PUBLIC_URL + '/images/workout.png'}/></li>
            <li><img src={process.env.PUBLIC_URL + '/images/music.png'}/></li>
            <li><img src={process.env.PUBLIC_URL + '/images/weight.png'}/>{day.weight}</li>
            <li>
              <p>{day.caption}</p>
            </li>
            <li><img src={process.env.PUBLIC_URL + '/images/code.png'}/></li>
            <li><img src={process.env.PUBLIC_URL + '/images/oils.png'}/></li>
            <li><img src={process.env.PUBLIC_URL + '/images/mindful.png'}/></li>
            <li><img src={process.env.PUBLIC_URL + '/images/food.png'}/></li>
            <li>{day.week}</li>
            <li>{day.day}</li>
            <li><img src={process.env.PUBLIC_URL + '/images/read.png'}/></li>
            <li><img src={process.env.PUBLIC_URL + '/images/earth.png'}/></li>
            <li><img src={process.env.PUBLIC_URL + '/images/outside.png'}/></li>
            <li><img src={process.env.PUBLIC_URL + '/images/timeSlots.png'}/></li>
            <li><img src={process.env.PUBLIC_URL + '/images/vitamins.png'}/></li>
            <li><img src={process.env.PUBLIC_URL + '/images/learn.png'}/></li>
            <li>{day.awake}</li>
            <li>{day.asleep}</li>
          </ul>
        </>
      );
    });
    return <div className="day">{days}</div>;
  }
}

export default Days;
