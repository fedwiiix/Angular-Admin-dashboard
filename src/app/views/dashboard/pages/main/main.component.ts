import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public statCards: any = [
    {
      title: 'Posts',
      value: 124,
      increase: 12,
      graph: {
        type: 'line',
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            data: [12, 19, 4, 5, 12, 25],
            backgroundColor: 'rgba(36, 142, 255,0.1)',
            borderColor: 'rgba(36, 142, 255, 0.3)',
            borderWidth: 2,
            fill: true
          }
        ]
      }
    },
    {
      title: 'Comments',
      value: 56,
      increase: 6,
      graph: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            data: [3, 15, 26, 22, 4, 9],
            backgroundColor: 'rgba(255, 99, 132,0.1)',
            borderColor: 'rgba(255, 99, 132, 0.3)',
            borderWidth: 2,
            fill: true
          }
        ]
      }
    },
    {
      title: 'Registrements',
      value: 89,
      increase: 12,
      graph: {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [
          {
            data: [5, 12, 15, 8, 14, 12, 25],
            backgroundColor: 'rgba(0, 179, 21,0.1)',
            borderColor: 'rgba(0, 179, 21, 0.3)',
            borderWidth: 2,
            fill: true
          }
        ]
      }
    },
    {
      title: 'Subsciptions',
      value: 562,
      increase: -20,
      graph: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            data: [15, 25, 20, 22, 32, 10],
            backgroundColor: 'rgba(255, 162, 0,0.1)',
            borderColor: 'rgba(255, 162, 0, 0.3)',
            borderWidth: 2,
            fill: true
          }
        ]
      }
    }
  ]

  public userChartData = {
    title: 'Quarterly income',
    type: 'line',
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        fill: true,
        backgroundColor: 'rgb(255, 99, 132,0.2)',
        borderColor: 'rgba(255, 99, 132, 0.7)'
      },
      {
        label: '# of No Votes',
        data: [1, 2, 1, 1, 2, 6],
        fill: true,
        backgroundColor: 'rgb(54, 162, 235,0.2)',
        borderColor: 'rgba(54, 162, 235, 0.7)'
      }
    ]
  }

  public donutChartData = {
    title: 'Traffic',
    type: 'doughnut',
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }
    ]
  }

  constructor () {}

  ngOnInit (): void {}
}
