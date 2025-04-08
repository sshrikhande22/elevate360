import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ MatIconModule } from '@angular/material/icon'
import { Chart, registerables } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels'; 
import { SidebarComponent } from '../sidebar/sidebar.component';

Chart.register(...registerables);

@Component({
  selector: 'app-om',
  standalone: true,
  imports: [ CommonModule, MatIconModule, SidebarComponent],
  templateUrl: './om.component.html',
  styleUrl: './om.component.css'
})
export class OmComponent implements AfterViewInit{
  title = 'OM';

  @ViewChild('barChart', { static: false }) chartRef!: ElementRef;
  chart!: Chart;
  activeFilter = 'week';

  labels = ['SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI'];

  weekData = [10, 40, 25, 30, 50, 28, 27];
  monthData = [20, 30, 40, 35, 45, 25, 30];

  ngAfterViewInit() {
    this.createChart1(this.weekData);
    this.createChart2();
    this.createChart3('chart1', 'pie', ['Complete', 'Progress'], [30, 40]);
    this.createChart4('chart2', 'pie', ['Complete', 'Progress'], [50, 50]);
    this.createChart5('chart3', 'pie', ['Complete', 'Progress'], [20, 80]);
    this.createChart6();

    new Chart('weeklyActivity', {

      type: 'bar',
      data: {
        labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
          { label: 'TSR', 
            data: [490, 350, 350, 490, 160, 405, 395], 
            backgroundColor: 'blue',             
            barPercentage:0.4,
            borderRadius:8
          },
          { label: 'Attendence', 
            data: [250, 120, 280, 390, 220, 250, 320], 
            backgroundColor: ' #35f0f0',
            barPercentage:0.4,
            borderRadius:8
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x:{
             grid:{ display:false }
          },
          y: { 
            beginAtZero: true,
            grid:{ display:false },
            ticks:{
              stepSize:100
            }
           }
        }
      }

    });

  }

  createChart1(data: number[]) {
    if (this.chart) {
      this.chart.destroy(); 
    }

    const ctx = document.getElementById('barChart') as HTMLCanvasElement;

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [{
          data: data,
          backgroundColor: this.getColors(data),
          borderRadius:5
        }]
      },
      options: {
        responsive: true,
        scales: {
          x:{
             grid:{ display:false }
          },
          y: { 
            beginAtZero: true,
            grid:{ display:false },
            ticks:{
              stepSize:10
            }
           }
        }
      }
    });
  }

  setData(filter: string) {
    this.activeFilter = filter;
    const newData = filter === 'week' ? this.weekData : this.monthData;
    this.createChart1(newData);
  }

  getColors(data: number[]) {
    return data.map(value => (value === Math.max(...data) ? '#3498db' : '#85c1e9'));
  }


  createChart2() {
    const ctx = document.getElementById('progressChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Courses', 'Prototypes'],
        datasets: [{
          data: [45, 80],
          backgroundColor: ['#0A3D5E', '#3498DB'],
          borderWidth: 5,
        }]
      },
      options: {
        aspectRatio: 1,
        plugins: {
          legend: { display: true },
          tooltip: { enabled: false },
          datalabels: { 
            color: '#000',
            font: { size: 16, weight: 'bold' },
            formatter: (value: number) => `${value}%` 
          }
        },
      },
      plugins: [ChartDataLabels] 
    });
  }
  //pie charts 1,2,3
  createChart3(canvasId: string, type: any, labels: any, data: any) {
    const ctx = document.getElementById(canvasId) as HTMLCanvasElement;
    new Chart(ctx, {
 
      type: type,
 
      data: {
 
        labels: labels,
 
        datasets: [{
 
          data: data,
 
          backgroundColor: ['#9b5acd', '#D8BFD8']
        }]
 
      },
      options: {
        aspectRatio: 2,
      }
 
    });
  }
  createChart4(canvasId: string, type: any, labels: any, data: any) {
    const ctx = document.getElementById(canvasId) as HTMLCanvasElement;
    new Chart(ctx, {
 
      type: type,
 
      data: {
 
        labels: labels,
 
        datasets: [{
 
          data: data,
 
          backgroundColor: ['#4682B4', '#B0C4DE']
        }]
 
      },
      options: {
        aspectRatio: 2,
      }
 
    });
  }
  createChart5(canvasId: string, type: any, labels: any, data: any) {
    const ctx = document.getElementById(canvasId) as HTMLCanvasElement;
    new Chart(ctx, {
 
      type: type,
 
      data: {
 
        labels: labels,
 
        datasets: [{
 
          data: data,
 
          backgroundColor: ['rgb(249, 210, 16)', 'rgb(253, 227, 95)']
        }]
 
      },
      options: {
        aspectRatio: 2,
      }
 
    });
  }
  
  //StatisticsChart
  createChart6() {
    const ctx = document.getElementById('statisticsChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        // labels: ['Courses', 'Prototypes'],
        datasets: [{
          data: [30, 15, 35, 20],
          backgroundColor: ['rgb(194, 25, 53)', 'rgb(211, 50, 184)','rgb(25, 36, 194)', 'rgb(120, 194, 25)' ],
          borderWidth: 5,
        }]
      },
      options: {
        aspectRatio: 1,
        plugins: {
          legend: { display: true },
          tooltip: { enabled: false },
          datalabels: { 
            color: '#000',
            font: { size: 16, weight: 'bold' },
            formatter: (value: number) => `${value}%` 
          }
        },
      },
      plugins: [ChartDataLabels] 
    });
  }

  //blue table
  data = [
    { label: 'Active Headcount', value: 900 },
    { label: 'On Target', value: 100 },
    { label: 'BQM', value: 30 },
    { label: 'Over Achievers', value: 15 },
    { label: 'Ongoing Trainings', value: 300 },
    { label: 'Planned Trainings', value: 100 },
    { label: 'Completed Trainings', value: 30 },
    { label: 'Total Badges Offered', value: 200 }
  ];
 
  trackByFn(index: number, item: any) {
    return item.label;
  }
 
  leaderboard = [
    { name: 'Rahul Kumar', score: 9800, role: 'AI/ML', img: "sc.png"},
    { name: 'Rohit Kumar', score: 9600, role: 'Data Analytics', img: "score.png" },
    { name: 'Sachin Kumar', score: 9400, role: 'Database', img: "t.png" }
  ];
  
}
  

