import { Component, OnInit,ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.plotSimpleBarChart();
  }

  plotSimpleBarChart() {
    let myChart = HighCharts.chart('highcharts', {
      chart: {
        type: 'bar',
      },
      title: {
        text: ' '
      },
      xAxis: {
        categories: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
      },
      yAxis: {
        title: {
          text: 'จำนวนเงิน (บาท)'
        }
      },
      series: [
        {
          name: 'รายรับ',
          type: undefined,
          data: [65000, 62000, 75000, 70000, 87400, 65600, 65000, 62000, 75000, 70000, 87400, 65600]
        },
        {
          name: 'รายจ่าย',
          type: undefined,
          data: [45000, 35000, 60000, 48000, 62000, 87500, 45000, 35000, 60000, 48000, 62000, 87500]
        }]
    });
  }


}
