import React, { Component } from "react";
import data from "../../data.json";

class Days extends Component {
  render() {
    const days = data.map(day => {
      return (
        <>
          <h2 class="day-number">{day.numbered}</h2>
          <ul class="outer-box">
            <li class="icon" ><img class="icon-img" src={process.env.PUBLIC_URL + '/images/water.png'}/></li>
            <li class="icon" ><img class="icon-img" src={process.env.PUBLIC_URL + '/images/work.png'}/></li>
            <li class="icon" ><img class="icon-img" src={process.env.PUBLIC_URL + '/images/connection.png'}/></li>
            <li class="icon" ><img class="icon-img" src={process.env.PUBLIC_URL + '/images/workout.png'}/></li>
            <li class="icon" ><img class="icon-img" src={process.env.PUBLIC_URL + '/images/music.png'}/></li>
            <li class="icon" ><img class="icon-img" src={process.env.PUBLIC_URL + '/images/weight.png'}/>{day.weight}</li>
            <li>
              <p class="caption">{day.caption}</p>
            </li>
            <li class="icon" ><img src={process.env.PUBLIC_URL + '/images/code.png'}/></li>
            <li class="icon" ><img src={process.env.PUBLIC_URL + '/images/oils.png'}/></li>
            <li class="icon" ><img src={process.env.PUBLIC_URL + '/images/mindful.png'}/></li>
            <li class="icon" ><img src={process.env.PUBLIC_URL + '/images/food.png'}/></li>
            <li class="corner-text" >{day.week}</li>
            <li class="corner-text" >{day.day}</li>
            <li class="icon" ><img src={process.env.PUBLIC_URL + '/images/read.png'}/></li>
            <li class="icon" ><img src={process.env.PUBLIC_URL + '/images/earth.png'}/></li>
            <li class="icon" ><img src={process.env.PUBLIC_URL + '/images/outside.png'}/></li>
            <li class="icon" ><img src={process.env.PUBLIC_URL + '/images/timeSlots.png'}/></li>
            <li class="icon" ><img src={process.env.PUBLIC_URL + '/images/vitamins.png'}/></li>
            <li class="icon" ><img src={process.env.PUBLIC_URL + '/images/learn.png'}/></li>
            <li class="corner-text" >{day.awake}</li>
            <li class="corner-text" >{day.asleep}</li>
          </ul>
        </>
      );
    });
    return <div className="day">{days}</div>;
  }
}

export default Days;
