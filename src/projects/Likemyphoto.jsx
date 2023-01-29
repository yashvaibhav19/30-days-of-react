import React from 'react'
import Title from '../components/Title'

export default function Likemyphoto() {
  return (
    <div className='text-center'>
        <Title text={"Double Click To Like"} classes={"subtitle"}/>
        <Title text={"Is Liked?"} classes={"subtitle"}/>
        <div class="container">
          <div class="box">
              <div class="top">
                <img src="https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271__340.jpg" alt="" />
                <span
                    ><i class="fas fa-heart"></i><i class="fas fa-exchange-alt"></i
                    ></span>
              </div>
              <div class="bottom">
                <h3>Home In Merrick Way</h3>
                <p>
                    Enchanting three bedrooms, three bath home with spacious one
                    bedroom, one bath...
                </p>
                <div class="advants">
                    <div>
                      <span>Bedrooms</span>
                      <div><i class="fas fa-th-large"></i><span>3</span></div>
                    </div>
                    <div>
                      <span>Bathrooms</span>
                      <div><i class="fas fa-shower"></i><span>3</span></div>
                    </div>
                    <div>
                      <span>Area</span>
                      <div>
                          <i class="fas fa-vector-square"></i
                            ><span>4300<span>Sq Ft</span></span>
                      </div>
                    </div>
                </div>
                <div class="price">
                    <span>For Sale</span>
                    <span>$540,000</span>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}
