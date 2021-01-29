import { Component, Input, OnInit } from '@angular/core'
import defaultChartSettings from '../../config/appStatChart'

interface ChartData {
  title: string
  value: number | string
  increase: number
  graph: {
    type: string | null
    labels: Array<any>
    datasets: any
  }
}

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.css']
})
export class StatCardComponent implements OnInit {
  constructor () {}

  @Input() data: ChartData
  public chartSettings: any = defaultChartSettings
  public increaseIcon: string
  public increaseColor: string = 'text-success'

  ngOnInit (): void {
    if (this.data.increase > 0) {
      this.increaseIcon = 'chevron-up-outline'
      this.increaseColor = 'text-success'
    } else if (this.data.increase < 0) {
      this.increaseIcon = 'chevron-down-outline'
      this.increaseColor = 'text-danger'
    }
  }

  public chartClicked (e: any): void {
    // console.log(e)
  }
  public chartHovered (e: any): void {
    // console.log(e)
  }
}
