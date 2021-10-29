import React from 'react'
import dp from '../images/dp.jpg';
import meme from '../images/meme.jpg';
import edit from '../images/edit.jpg';
function About() {
    return (
        <div>
          <h2>About Me</h2>
<div id="myCarousel" class="carousel slide" data-ride="carousel">
	
	<ol class="carousel-indicators">
		<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
		<li data-target="#myCarousel" data-slide-to="1"></li>
		<li data-target="#myCarousel" data-slide-to="2"></li>
	</ol>   

	<div class="carousel-inner">		
		<div class="carousel-item active">
			<div class="img-box"><img src={dp} alt=""/></div>
			<p class="testimonial">I am a B.tech C.S.E student at NIT jamshedpur.I completed my 12th from DAV public school</p>
			<p class="overview"><b>Subham Kumar</b>MERN stack developer at <a href="#">NIT jamshedpur</a></p>
			<div class="star-rating">
				<ul class="list-inline">
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
				</ul>
			</div>
		</div>
		<div class="carousel-item">
			<div class="img-box"><img src={edit} alt=""/></div>
			<p class="testimonial">I am intrested in MERN stack development.I have worked in technologies like Reactjs ,Nodejs,Express js,Mongo DB</p>
			<p class="overview"><b>Subham Kumar</b>MERN stack developer at  <a href="#">NIT jamshedpur</a></p>
			<div class="star-rating">
				<ul class="list-inline">
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
				</ul>
			</div>
		</div>
		<div class="carousel-item">
			<div class="img-box"><img src={meme} alt=""/></div>
			<p class="testimonial">I am currently in 2nd year and pursuing btech 4 year Btech degree</p>
			<p class="overview"><b>Subham Kumar</b>Web Developer at <a href="#">Web Team</a></p>
			<div class="star-rating">
				<ul class="list-inline">
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star-half-o"></i></li>
				</ul>
			</div>
		</div>		
	</div>

	<a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
		<i class="fa fa-angle-left"></i>
	</a>
	<a class="carousel-control-next" href="#myCarousel" data-slide="next">
		<i class="fa fa-angle-right"></i>
	</a>
</div>
        </div>
    )
}

export default About
