import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Chart, registerables } from 'chart.js/auto';
Chart.register(...registerables);


@Component({
  selector: 'app-bqm',
  standalone: true,
  imports: [ CommonModule, MatIconModule, SidebarComponent],
  templateUrl: './bqm.component.html',
  styleUrl: './bqm.component.css'
})
export class BqmComponent implements AfterViewInit{
  title = 'bqm';

  //bqm dataset
  performers = [
    { name: 'Gaurav Gandhi', specialization: 'Specialization' },
    { name: 'Gaurav Gandhi', specialization: 'Specialization' },
    { name: 'Gaurav Gandhi', specialization: 'Specialization' },
    { name: 'Gaurav Gandhi', specialization: 'Specialization' },
    { name: 'Gaurav Gandhi', specialization: 'Specialization' }
  ];
  //tsr table
  tableData = [
    { tsr: 'Lorem Ipsum', specialization: 'Lorem Ipsum', trainings: 10, passPercentage: '50%', score: -2500 },
    { tsr: 'Lorem Ipsum', specialization: 'Lorem Ipsum', trainings: 10, passPercentage: '50%', score: 750 },
    { tsr: 'Lorem Ipsum', specialization: 'Lorem Ipsum', trainings: 10, passPercentage: '50%', score: -150 },
    { tsr: 'Lorem Ipsum', specialization: 'Lorem Ipsum', trainings: 10, passPercentage: '50%', score: -1050 },
  ];
  //top reasons
  reasons = [
    { title: 'Customer Handling Skills', percentage: '46%', icon: 'skill.png', bgColor: '#FFECB3' },
    { title: 'Time to Resolve', percentage: '34%', icon: 'time.png', bgColor: '#BBDEFB' },
    { title: 'QA Score', percentage: '20%', icon: 'QA.png', bgColor: '#FFCDD2' },
    { title: 'Lorem Ipsum', percentage: 'Lorem Ipsum', icon: 'lorem.png', bgColor: '#E0F7FA' },
    { title: 'Lorem Ipsum', percentage: 'Lorem Ipsum', icon: 'lorem.png', bgColor: '#E0F7FA' }
  ];
  ngAfterViewInit() {
    this.createChart();
  }
  //specilization
  createChart() {
    const ctx = document.getElementById('piesChart') as HTMLCanvasElement;
  
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['ALML', 'Database', 'Storage', 'Security'],
        datasets: [{
          data: [30, 15, 35, 20],
          backgroundColor: ['rgb(46, 168, 224)', 'rgb(240, 58, 149)','rgb(77, 199, 98)', 'rgb(247, 132, 39)' ],
          borderWidth: 5,
        }]
      },
      options: {
        aspectRatio: 1.5,
        plugins: {
          legend: { display: true },
          tooltip: { enabled: false }
        },
      },
    });
  }
}
