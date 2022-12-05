import React from 'react';

function Section1Component(){
    return(
        <section id="section1">
        {/* <!--div.slide-container>div.slide-view>ul.slide-wrap>li.slide.slide$*3>img[src=img$.jpg]--> */}
        <div class="slide-container">
            <div class="slide-view">
            <ul class="slide-wrap">
                <li class="slide slide3"><a href="!#" title="그린복지재단3"><img src="./images/img3.jpg" alt="" /></a></li>
                <li class="slide slide1"><a href="!#" title="그린복지재단1"><img src="./images/img1.jpg" alt="" /></a></li>
                <li class="slide slide2"><a href="!#" title="그린복지재단2"><img src="./images/img2.jpg" alt="" /></a></li>
                <li class="slide slide3"><a href="!#" title="그린복지재단3"><img src="./images/img3.jpg" alt="" /></a></li>
                <li class="slide slide1"><a href="!#" title="그린복지재단1"><img src="./images/img1.jpg" alt="" /></a></li>
            </ul>
            </div>
        </div>
        </section>
    )
};

export default Section1Component;