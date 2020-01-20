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
            <li><img src={process.env.PUBLIC_URL + '/images/weight.png'}/></li>
            <li>
              <p>{day.caption}</p>
            </li>
            <li><img src={process.env.PUBLIC_URL + '/images/code.png'}/>{day.code}</li>
            <li><img src={process.env.PUBLIC_URL + '/images/oils.png'}/>{day.oils}</li>
            <li><img src={process.env.PUBLIC_URL + '/images/mindful.png'}/>{day.mindful}</li>
            <li><img src={process.env.PUBLIC_URL + '/images/food.png'}/>{day.food}</li>
            <li>{day.week}</li>
            <li>{day.day}</li>
            <li><img src={process.env.PUBLIC_URL + '/images/read.png'}/>{day.read}</li>
            <li><img src={process.env.PUBLIC_URL + '/images/earth.png'}/>{day.earth}</li>
            <li><img src={process.env.PUBLIC_URL + '/images/outside.png'}/>{day.outside}</li>
            <li><img src={process.env.PUBLIC_URL + '/images/timeSlots.png'}/>{day.timeSlots}</li>
            <li><img src={process.env.PUBLIC_URL + '/images/vitamins.png'}/>{day.vitamins}</li>
            <li><img src={process.env.PUBLIC_URL + '/images/learn.png'}/>{day.learn}</li>
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
