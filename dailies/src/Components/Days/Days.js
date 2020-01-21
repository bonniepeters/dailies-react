import React, { Component } from "react";
import data from "../../data.json";

class Days extends Component {
  render() {
    const days = data.map(day => {
      return (
        <section>
          <h2 className="day-number">{day.numbered}</h2>
          <ul className="wrapper">
            <li className="icon" ><img className="icon-img" src={process.env.PUBLIC_URL + '/images/water.png'}/></li>
            <li className="icon" ><img className="icon-img" src={process.env.PUBLIC_URL + '/images/work.png'}/></li>
            <li className="icon" ><img className="icon-img" src={process.env.PUBLIC_URL + '/images/connection.png'}/></li>
            <li className="icon" ><img className="icon-img" src={process.env.PUBLIC_URL + '/images/workout.png'}/></li>
            <li className="icon" ><img className="icon-img" src={process.env.PUBLIC_URL + '/images/music.png'}/></li>
            <li className="icon" ><img className="icon-img" src={process.env.PUBLIC_URL + '/images/weight.png'} />
              {/* {day.weight} */}
            </li>
            <li className="inner-box">
              <p className="caption">{day.caption}</p>
              <p className="day-week" >{day.week}</p>
              <p className="week-number" >{day.day}</p>
            </li>
            <li className="icon" ><img src={process.env.PUBLIC_URL + '/images/code.png'}/></li>
            <li className="icon" ><img src={process.env.PUBLIC_URL + '/images/oils.png'}/></li>
            <li className="icon" ><img src={process.env.PUBLIC_URL + '/images/mindful.png'}/></li>
            <li className="icon" ><img src={process.env.PUBLIC_URL + '/images/food.png'}/></li>
            <li className="icon" ><img src={process.env.PUBLIC_URL + '/images/read.png'}/></li>
            <li className="icon" ><img src={process.env.PUBLIC_URL + '/images/earth.png'}/></li>
            <li className="icon" ><img src={process.env.PUBLIC_URL + '/images/outside.png'}/></li>
            <li className="icon" ><img src={process.env.PUBLIC_URL + '/images/timeSlots.png'}/></li>
            <li className="icon" ><img src={process.env.PUBLIC_URL + '/images/vitamins.png'}/></li>
            <li className="icon" ><img src={process.env.PUBLIC_URL + '/images/learn.png'}/></li>
          </ul>
          <div className="sleep">
            <p className="awake" >{day.awake}</p>
            <p className="asleep" >{day.asleep}</p>
          </div>
        </section>
      );
    });
    return <div className="days">{days}</div>;
  }
}

export default Days;
