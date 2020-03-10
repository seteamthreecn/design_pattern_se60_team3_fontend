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
  constructor(private RetDetailListService: RetDetailListService) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.plotSimpleBarChart();
  }

  change($event: any) {
    this.type = $event.target.value;
    this.plotSimpleBarChart();
  }

  plotSimpleBarChart() {
    var income = [];
    var outcome = [];
    var categories = [];
    this.user_id = +localStorage.getItem("user_id");

    if (this.type == "month") {
      this.RetDetailListService.get_static_data_month(this.user_id).subscribe(
        result => {
          console.log(result);
          result.forEach(element => {
            categories.push(element.month_name);
            if (element.type_list == "รายรับ") {
              income.push(element.amount);
            } else {
              outcome.push(element.amount);
            }
          });
          categories = Array.from(new Set(categories));
          let myChart = HighCharts.chart("highcharts", {
            chart: {
              type: "bar"
            },
            title: {
              text: " "
            },
            xAxis: {
              categories: categories
            },
            yAxis: {
              title: {
                text: "จำนวนเงิน (บาท)"
              }
            },
            series: [
              {
                name: "รายรับ",
                type: undefined,
                data: income
              },
              {
                name: "รายจ่าย",
                type: undefined,
                data: outcome
              }
            ]
          });
        }
      );
    } else {
      this.RetDetailListService.get_static_data_yaer(this.user_id).subscribe(
        result => {
          console.log(result);
          result.forEach(element => {
            categories.push(element.YEAR);
            if (element.type_list == "รายรับ") {
              income.push(element.amount);
            } else {
              outcome.push(element.amount);
            }
          });
          let myChart = HighCharts.chart("highcharts", {
            chart: {
              type: "bar"
            },
            title: {
              text: " "
            },
            xAxis: {
              categories: categories
            },
            yAxis: {
              title: {
                text: "จำนวนเงิน (บาท)"
              }
            },
            series: [
              {
                name: "รายรับ",
                type: undefined,
                data: income
              },
              {
                name: "รายจ่าย",
                type: undefined,
                data: outcome
              }
            ]
          });
        }
      );
    }
  }
}
