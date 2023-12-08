import { Component, Input, OnInit } from '@angular/core';
import { Countdown } from '../core/interfaces/countdown';
import * as moment from 'moment';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent  implements OnInit {
  
  @Input() 
  endDate: string = '2024-01-01';
  formattedTime: string[] = []
  remainingTime!: number;

  



  
  constructor() { }

  ngOnInit() {
    this.calculateRemainingTime();
    setInterval(() => {
      this.calculateRemainingTime();
    }, 1000);


  }
  calculateRemainingTime() {
    const now = new Date().getTime();
    const end = new Date(this.endDate).getTime();
    const remainingTime = Math.max(0, end - now);

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    this.formattedTime = [
      this.padZero(days),
      this.padZero(hours),
      this.padZero(minutes),
      this.padZero(seconds)
    ];
  }

  padZero(value: number): string {
    return value < 10 ? `0${value}` : value.toString();
  }
  }