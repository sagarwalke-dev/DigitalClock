import React, { useState } from "react";
import "./index.css";

const daysInWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
var time, date;

let Clock = () => {
  var currentTime = new Date();
  date = `${currentTime.getFullYear()}-${addZero(
    currentTime.getMonth()
  )}-${addZero(currentTime.getDate())} ${daysInWeek[currentTime.getDay()]}`;
  time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${addZero(
    currentTime.getSeconds()
  )}`;
  //   };
  var [ctime, setTime] = useState(time);
  var [cdate, setDate] = useState(date);

  let updateTime = () => {
    currentTime = new Date();
    date = `${currentTime.getFullYear()}-${addZero(
      currentTime.getMonth()
    )}-${addZero(currentTime.getDate())} ${daysInWeek[currentTime.getDay()]}`;
    time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${addZero(
      currentTime.getSeconds()
    )}`;

    setTime(time);
    setTime(date);
  };
  setInterval(updateTime, 1000);

  return (
    <>
      <div id='clock'>
        <p className='date'>{date}</p>
        <p className='time'>{time}</p>
        <p className='text'>DIGITAL CLOCK with React.js</p>
      </div>
    </>
  );
};

export default Clock;
