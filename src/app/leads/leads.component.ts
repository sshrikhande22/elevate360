import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { CommonModule } from '@angular/common'; 
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-leads',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.css'
})
export class LeadsComponent implements AfterViewInit{
  title = 'leads';

  tableData = [
    { tsr: 'Lorem Ipsum', metric: 'Productivity - Closed volume', benchmark: '100%', teamAverage: 5, tsrScore: 2 },
    { tsr: 'Lorem Ipsum', metric: 'Speakeasy', benchmark: '165 hrs', teamAverage: 4, tsrScore: 1 },
    { tsr: 'Lorem Ipsum', metric: 'AFK %', benchmark: '<=10%', teamAverage: 2, tsrScore: 3 },
    { tsr: 'Lorem Ipsum', metric: 'Busy %', benchmark: '<=10%', teamAverage: 1, tsrScore: 4 },
    { tsr: 'Lorem Ipsum', metric: 'FMR Timeline', benchmark: '>=100%', teamAverage: 4, tsrScore: 5 },
    { tsr: 'Lorem Ipsum', metric: 'SDR', benchmark: '>=30%', teamAverage: 5, tsrScore: 1 },
    { tsr: 'Lorem Ipsum', metric: 'vSME Consult Rate', benchmark: '<=30', teamAverage: 1, tsrScore: 3 },
    { tsr: 'Lorem Ipsum', metric: 'Escalation Rate', benchmark: '<=3%', teamAverage: 3, tsrScore: 4 },
    { tsr: 'Lorem Ipsum', metric: 'Cases Closed < 5 Days', benchmark: '>=70%', teamAverage: 3, tsrScore: 5 },
    { tsr: 'Lorem Ipsum', metric: 'CES %', benchmark: '>=90%', teamAverage: 3, tsrScore: 2 }
  ];
 
  ngAfterViewInit():void{
    new Chart('benchmarkChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          { label: 'My Team', data: [50, 70, 80, 60, 90, 100, 120], borderColor: '#07e098', fill: true },
          { label: 'Benchmark', data: [60, 80, 75, 65, 85, 95, 110], borderColor: '#0094ff', fill: true }
        ]
      },
      options: {
        aspectRatio: 3,
      }
    });
  }
}
