import { Component, OnInit } from '@angular/core';
// import Swiper core and required modules
import SwiperCore from 'swiper';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  config: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: true,


    breakpoints:{
      300:{
        slidesPerView: 1, 
      },
      767:{
        slidesPerView: 1, 
      },
      991:{
        slidesPerView: 3, 
      },
      1021:{
        slidesPerView: 4, 
      },
    }


  };

}
