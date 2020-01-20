import React, { Component } from "react";
import data from "../../data.json";

class Days extends Component {
  render() {
    const days = data.map(day => {
      return (
        <>
          <ul>
            <li>{day.caption}</li>
            <li>{day.numbered}</li>
            <li>{day.day}</li>
            <li>{day.week}</li>
            <li>{day.water}</li>
            <li>{day.work}</li>
            <li>{day.connection}</li>
            <li>{day.workout}</li>
            <li>{day.music}</li>
            <li>{day.code}</li>
            <li>{day.mindful}</li>
            <li>{day.read}</li>
            <li>{day.learn}</li>
            <li>{day.vitamins}</li>
            <li>{day.timeSlots}</li>
            <li>{day.outside}</li>
            <li>{day.earth}</li>
            <li>{day.food}</li>
            <li>{day.oils}</li>
            <li>{day.weight}</li>
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
