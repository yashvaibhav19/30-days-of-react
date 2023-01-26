import React from 'react'
import Title from '../components/Title'

export default function Randomizecolor() {
  function getRandomColor()
  {
      let colorHexes = ["#51e2f5","#9df9ef","#edf756","#ffa8B6","#a28089","#a0d2eb","#e5eaf5","#d0bdf4","#8458B3","#a28089","#ff1d58","#f75990","#fff685","#00DDFF","#0049B7","#ff1e00","#e8f9fd","#59ce8f","#f43a09","#ffb766","#c2edda","#68d388","#fbe3e8","#5cbdb9","#ebf6f5","#beef00","#ff0028","#657a00","#1400c6","#fceed1","#7d3cff","#f2d53c","#c80e13","#e1b382","#c89666","#2d545e","#12343b","#fff5d7","#ff5e6c","#feb300","#ffaaab","#9bc400","#8076a3","#f9c5bd","#7c677f"]
      let n = colorHexes.length;
      return colorHexes[ Math.floor(Math.random()*n) ];
  }
  function handleClick(event) {
    let randomColor = getRandomColor();
    let body = document.querySelector("body");
    body.style.background = randomColor;
  }
  return (
    <div className="container text-center">
        <Title text="Randomize Color"/>
        <div className="btn-container">
            <button className="button btn-1" onClick={handleClick}>Button 1</button>
            <button className="button btn-1" onClick={handleClick}>Button 2</button>
            <button className="button btn-1" onClick={handleClick}>Button 3</button>
            <button className="button btn-1" onClick={handleClick}>Button 4</button>
        </div>
    </div>
  )
}
