import { Component, Input, OnInit } from '@angular/core'
import defaultChartSettings from '../../config/chart.js'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() data
  public chartSettings: any = defaultChartSettings

  constructor () {}

  ngOnInit (): void {}

  public chartClicked (e: any): void {
    // console.log(e)
  }
  public chartHovered (e: any): void {
    // console.log(e)
  }
}
