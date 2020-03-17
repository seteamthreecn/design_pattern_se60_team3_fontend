import { Component, OnInit, ViewChild } from "@angular/core";
import { Chart } from "chart.js";
import * as HighCharts from "highcharts";
import { RetDetailListService } from "src/app/service/ret-detail-list.service";

@Component({
  selector: "app-summary",
  templateUrl: "./summary.page.html",
  styleUrls: ["./summary.page.scss"]
})
export class SummaryPage implements OnInit {
  user_id: number;
  private type: string = "month";

  private pie_balance;
  private pie_income;
  private pie_outcome;
  private check_null_chart = 0;

  private date_search: String = new Date().toISOString();
  private month_search: any;
  private year_search: any;
  constructor(private RetDetailListService: RetDetailListService) { }

  ngOnInit() {
    this.year_search = this.date_search.substr(0, 4)
    this.month_search = this.date_search.substr(5, 2)
  }

  ionViewDidEnter() {
    this.plotSimpleBarChart(this.month_search, this.year_search);
  }

  change_date($event: any) {
    this.year_search = $event.target.value.substr(0, 4)
    this.month_search = $event.target.value.substr(5, 2)
    this.plotSimpleBarChart(this.month_search, this.year_search);
  }

  change_type($event: any) {
    this.type = $event.target.value;
  }

  plotSimpleBarChart(month, year) {
    this.pie_balance = 0
    this.check_null_chart = 0
    this.user_id = +localStorage.getItem("user_id");
    if (this.type == "month") {
      this.RetDetailListService.get_static_data_month(this.user_id, month, year).subscribe(
        result => {
          console.log(result)
          if (result.length > 0) {
            this.check_null_chart = 1

            if(result.length == 2){
              this.pie_income = result[0].amount
              this.pie_outcome = result[1].amount
              this.pie_balance = this.pie_income - this.pie_outcome 
            }else {
              if(result[0].type_list == 'รายรับ'){
                this.pie_income = result[0].amount
                this.pie_outcome = 0
              }else{
                this.pie_income = 0
                this.pie_outcome = result[0].amount
              }
            }
            this.pie_balance = this.pie_income - this.pie_outcome 
            

            var myChart = HighCharts.chart('highcharts', {
              chart: {
                type: 'pie',
              },
              title: {
                text: ''
              },
              colors: ['#48046D', '#D93E5D'],
              series: [{
                name: 'ยอดรวม: ',
                data: [{
                  name: 'รายรับ',
                  y: this.pie_income
                }, {
                  name: 'รายจ่าย',
                  y: this.pie_outcome
                }],
                type: undefined
              }]
            });
          }else{
            var myChart = HighCharts.chart('highcharts', {
              chart: {
                type: 'pie',
              },
              title: {
                text: ''
              },
              colors: ['#48046D', '#D93E5D'],
              series: [{
                name: 'ยอดรวม: ',
                data: [{
                  name: 'รายรับ',
                  y: 0
                }, {
                  name: 'รายจ่าย',
                  y: 0
                }],
                type: undefined
              }]
            });
          }
        });
    } else {
      this.RetDetailListService.get_static_data_year(this.user_id, year).subscribe(
        result => {
          console.log(result)
          if (result.length > 0) {
            this.check_null_chart = 1

            if(result.length == 2){
              this.pie_income = result[0].amount
              this.pie_outcome = result[1].amount
              this.pie_balance = this.pie_income - this.pie_outcome 
            }else {
              if(result[0].type_list == 'รายรับ'){
                this.pie_income = result[0].amount
                this.pie_outcome = 0
              }else{
                this.pie_income = 0
                this.pie_outcome = result[0].amount
              }
            }
            this.pie_balance = this.pie_income - this.pie_outcome 
            

            var myChart = HighCharts.chart('highcharts', {
              chart: {
                type: 'pie',
              },
              title: {
                text: ''
              },
              colors: ['#48046D', '#D93E5D'],
              series: [{
                name: 'ยอดรวม: ',
                data: [{
                  name: 'รายรับ',
                  y: this.pie_income
                }, {
                  name: 'รายจ่าย',
                  y: this.pie_outcome
                }],
                type: undefined
              }]
            });
          }else{
            var myChart = HighCharts.chart('highcharts', {
              chart: {
                type: 'pie',
              },
              title: {
                text: ''
              },
              colors: ['#48046D', '#D93E5D'],
              series: [{
                name: 'ยอดรวม: ',
                data: [{
                  name: 'รายรับ',
                  y: 0
                }, {
                  name: 'รายจ่าย',
                  y: 0
                }],
                type: undefined
              }]
            });
          }
        });
    }
  }

}
