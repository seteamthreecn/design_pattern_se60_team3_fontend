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
  constructor(private RetDetailListService: RetDetailListService) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.plotSimpleBarChart();
  }

  change($event: any) {
    this.type = $event.target.value;
    this.plotSimpleBarChart();
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  plotSimpleBarChart() {
    var income = [];
    var outcome = [];
    var balance = [];
    var categories = [];
    var count = 0;
    console.log(income);
    console.log(outcome);
    this.user_id = +localStorage.getItem("user_id");

    if (this.type == "month") {
      for (let i = 0; i <= 11; i++) {
        income.push(0);
        outcome.push(0);
      }
      categories = [
        "มกราคม",
        "กุมภาพันธ์",
        "มีนาคม",
        "เมษายน",
        "พฤษภาคม",
        "มิถุนายน",
        "กรกฎาคม",
        "สิงหาคม",
        "กันยายน",
        "ตุลาคม",
        "พฤศจิกายน",
        "ธันวาคม"
      ];
      this.RetDetailListService.get_static_data_month(this.user_id).subscribe(
        result => {
          result.forEach(element => {
            if (element.type_list == "รายรับ") {
              if (element.month_name == "1") {
                if (typeof element.amount === "undefined") {
                  element.amount = 0;
                }
                income[0] = element.amount;
              } else if (element.month_name == "2") {
                if (typeof element.amount === "undefined") {
                  element.amount = 0;
                }
                income[1] = element.amount;
              } else if (element.month_name == "3") {
                if (typeof element.amount === "undefined") {
                  element.amount = 0;
                }
                income[2] = element.amount;
              } else if (element.month_name == "4") {
                if (typeof element.amount === "undefined") {
                  element.amount = 0;
                }
                income[3] = element.amount;
              } else if (element.month_name == "5") {
                if (typeof element.amount === "undefined") {
                  element.amount = 0;
                }
                income[4] = element.amount;
              } else if (element.month_name == "6") {
                if (typeof element.amount === "undefined") {
                  element.amount = 0;
                }
                income[5] = element.amount;
              } else if (element.month_name == "7") {
                if (typeof element.amount === "undefined") {
                  element.amount = 0;
                }
                income[6] = element.amount;
              } else if (element.month_name == "8") {
                if (typeof element.amount === "undefined") {
                  element.amount = 0;
                }
                income[7] = element.amount;
              } else if (element.month_name == "9") {
                if (typeof element.amount === "undefined") {
                  element.amount = 0;
                }
                income[8] = element.amount;
              } else if (element.month_name == "10") {
                if (typeof element.amount === "undefined") {
                  element.amount = 0;
                }
                income[9] = element.amount;
              } else if (element.month_name == "11") {
                if (typeof element.amount === "undefined") {
                  element.amount = 0;
                }
                income[10] = element.amount;
              } else if (element.month_name == "12") {
                if (typeof element.amount === "undefined") {
                  element.amount = 0;
                }
                income[11] = element.amount;
              }
            } else {
              if (element.month_name == "1") {
                if (typeof element.amount === "undefined") {
                  element.amount = 0;
                }
                outcome[0] = element.amount;
              } else if (element.month_name == "2") {
                if (typeof element.amount === "undefined") {
                  element.amount = 0;
                }
                outcome[1] = element.amount;
              } else if (element.month_name == "3") {
                if (typeof element.amount === "undefined") {
                  element.amount = 0;
                }
                outcome[2] = element.amount;
              } else if (element.month_name == "4") {
                if (typeof element.amount === "undefined") {
                  element.amount = 0;
                }
                outcome[3] = element.amount;
              } else if (element.month_name == "5") {
                if (typeof element.amount === "undefined") {
                  element.amount = 0;
                }
                outcome[4] = element.amount;
              } else if (element.month_name == "6") {
                if (typeof element.amount === "undefined") {
                  element.amount = 0;
                }
                outcome[5] = element.amount;
              } else if (element.month_name == "7") {
                if (typeof element.amount === "undefined") {
                  element.amount = 0;
                }
                outcome[6] = element.amount;
              } else if (element.month_name == "8") {
                if (typeof element.amount === "undefined") {
                  element.amount = 0;
                }
                outcome[7] = element.amount;
              } else if (element.month_name == "9") {
                if (typeof element.amount === "undefined") {
                  element.amount = 0;
                }
                outcome[8] = element.amount;
              } else if (element.month_name == "10") {
                if (typeof element.amount === "undefined") {
                  element.amount = 0;
                }
                outcome[9] = element.amount;
              } else if (element.month_name == "11") {
                if (typeof element.amount === "undefined") {
                  element.amount = 0;
                }
                outcome[10] = element.amount;
              } else if (element.month_name == "12") {
                if (typeof element.amount === "undefined") {
                  element.amount = 0;
                }
                outcome[11] = element.amount;
              }
            }
            console.log(element.month_name);
            count = element.month_name;
          });

          categories = Array.from(new Set(categories));
          // var balance_temp = 0;
          var current_balance = 0;
          for (let i = 0; i < count; i++) {
            current_balance = 0;
            if (typeof income[i] === "undefined") {
              income[i] = 0;
            }
            if (typeof outcome[i] === "undefined") {
              outcome[i] = 0;
            }
            current_balance = income[i] - outcome[i];
            // current_balance = current_balance + balance_temp;
            console.log("crr: " + current_balance)
            balance.push(current_balance);
            // balance_temp = current_balance;
          }

          console.log(balance);
          console.log(result);
          console.log(categories);
          console.log(income);
          console.log(outcome);

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
            tooltip: {
              headerFormat: '<span style="font-size:10px">เดือน{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>&emsp;{point.y} บาท</b></td></tr>',
              footerFormat: '</table>',
              shared: true,
              useHTML: true
            },
            series: [
              {
                color: "#48046D",
                name: "รายรับ",
                type: undefined,
                data: income
              },
              {
                color: "#D93E5D",
                name: "รายจ่าย",
                type: undefined,
                data: outcome
              },
              {
                color: "#6EC378",
                name: "คงเหลือ",
                type: undefined,
                data: balance
              }
            ]
          });
        }
      );
    } else {
      this.RetDetailListService.get_static_data_yaer(this.user_id).subscribe(
        result => {
          result.forEach(element => {
            categories.push(element.YEAR);
            if (element.type_list == "รายรับ") {
              income.push(element.amount);
            } else {
              outcome.push(element.amount);
            }
          });
          categories = Array.from(new Set(categories));
          for (let i = 0; i < categories.length; i++) {
            if (typeof income[i] === "undefined") {
              income[i] = 0;
            }
            if (typeof outcome[i] === "undefined") {
              outcome[i] = 0;
            }
            balance.push(income[i] - outcome[i]);
          }
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
            tooltip: {
              headerFormat: '<span style="font-size:10px">เดือน{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>&emsp;{point.y} บาท</b></td></tr>',
              footerFormat: '</table>',
              shared: true,
              useHTML: true
            },

            series: [
              {
                color: "#48046D",
                name: "รายรับ",
                type: undefined,
                data: income
              },
              {
                color: "#D93E5D",
                name: "รายจ่าย",
                type: undefined,
                data: outcome
              },
              {
                color: "#6EC378",
                name: "คงเหลือ",
                type: undefined,
                data: balance
              }
            ]
          });
        }
      );
    }
  }
}
