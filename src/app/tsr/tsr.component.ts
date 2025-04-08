import { Component , AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js/auto';
import { SidebarComponent } from '../sidebar/sidebar.component';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(...registerables, annotationPlugin);

@Component({
  selector: 'app-tsr',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './tsr.component.html',
  styleUrl: './tsr.component.css'
})
export class TsrComponent implements AfterViewInit{
  title = 'tsr';

  ngAfterViewInit() {
    this.createWeeklyActivitiesChart();
    this.createPerformanceChart();

  }

  createWeeklyActivitiesChart() {
    new Chart('weeklyActivitiesChart', {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Hours Spent',
          data: [2, 3, 5.5, 2.5, 3, 4, 3],
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          barPercentage:0.6,
          borderRadius:6
        }]
      },
      options: {
        responsive: true,
        scales: {
          x:{
            grid: { 
              display:false
             }
          },
          y: { 
            beginAtZero: true,
            min:0,
            max:6,
            ticks: {
              stepSize: 2
            }
          }
        },
        plugins: {
          annotation: {
            annotations: {
              avgLine: {
                type: 'line',
                yMin: 3.5,
                yMax: 3.5,
                borderColor: 'blue',
                borderWidth: 2,
                borderDash: [5, 5],
                label: {
                  content: 'Avg',
                  display: true,
                  position: 'start'
                }
              }
            }
          }
        }
      }
    });
  }

  createPerformanceChart() {
    new Chart('performanceChart', {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
        datasets: [{
          label: 'Completion %',
          data: [3, 4.5, 3.8, 4.5, 4.2, 4.8],
          backgroundColor: 'rgba(86, 186, 233, 0.5)',
          borderColor: 'rgb(65, 221, 221)',
          borderWidth: 2,
          fill: true
        }]
      },
      options: {
        responsive: true,
        scales: {
          x:{
            grid: { display:false }
          },
          y: { 
            beginAtZero: true,
            min:0,
            max:6,
            ticks: {
              stepSize: 2
            }
          }
        },
        plugins: {
          annotation: {
            annotations: {
              avgLine: {
                type: 'line',
                yMin: 3.5,
                yMax: 3.5,
                borderColor: 'blue',
                borderWidth: 2,
                borderDash: [5, 5],
                label: {
                  content: 'Avg',
                  display: true,
                  position: 'start'
                }
              }
            }
          }
        }
      }
    });
  }

  training_statistics = [
    {
      title: "Program Completion",
      value: "45%",
      progress: 45,
    },
    {
      title: "Time Spent this Week",
      value: "04h 32m",
      extra: "+2h 14m last week",
    },
    {
      title: "Current Skill Level",
      value: "07",
      badge: "Advanced",
    },
    {
      title: "Leaderboard Rank",
      value: "#14",
      badge: "Top 10%",
    }
  ];

  performance_statistics = [
    {
      title: "Last Year Rating",
      value: "3",
      progress: 45,
    },
    {
      title: "Current Score",
      value: "04h 32m",
      extra: "+2h 14m last week",
    },
    {
      title: "Current Skill Level",
      value: "07",
      badge: "Advanced",
    },
    {
      title: "Leaderboard Rank",
      value: "#14",
      badge: "Top 10%",
    }
  ];

  performance_scorecard1=[
    {
      title: "Productivity",
      value: "3",
      progress: 45,
    },
    {
      title: "Speakeasy",
      value: "04h 32m",
      extra: "+2h 14m last week",
    },
    {
      title: "AFK %",
      value: "04h 32m",
      extra: "+2h 14m last week",
    },
    {
      title: "Busy %",
      value: "04h 32m",
      extra: "+2h 14m last week",
    },
    {
      title: "FMR Timeline",
      value: "3",
      progress: 45,
    },
    {
      title: "SDR",
      value: "40%",
      progress: 40,
    },
    {
      title: "vSME Consult Rate",
      value: "40%",
      progress: 40,
    },
    {
      title: "Escalation Rate",
      value: "40%",
      progress: 40,
    }
  ];

  performance_scorecard2=[
    {
      title: "Cases Closed < 5 Days",
      value: "60%",
      progress: 60,
    },
    {
      title: "CES %",
      value: "60%",
      progress: 60,
    },
    {
      title: "IQA Quality Score",
      value: "80%",
      progress: 80,
    }
  ];

  leaderboard = [
    { name: "Rahul Kumar", score: 9800, rank: " 🏆 1st Place" },
    { name: "Rohit Kumar", score: 9600, rank: " 🥈 2nd Place" },
    { name: "Sachin Kumar", score: 9400, rank: " 🥉 3rd Place" }
  ];

  assessments = [
    { title: "Brand & Marketing Development", date: "Feb 07, 2025", mark: 100, action: "" },
    { title: "Ecommerce Business Plan", date: "Feb 07, 2025", mark: 100, action: "View" },
    { title: "Product Design Sprint", date: "Feb 07, 2025", mark: 100, action: "" }
  ];

  
  specializations = [
    { icon: 'O.png', name: 'AI/ML', value: 721882, change: -0.0466 },
    { icon: 'CE.png', name: 'Serverless', value: 48676, change: +0.0038 },
    { icon: 'cs.png', name: 'Security', value: 22370, change: +0.0045 },
    { icon: 'SLO.png', name: 'Data Analytics', value: 5788.5, change: -0.0023 },
    { icon: 'O.png', name: 'Compute Engine', value: 1660.7, change: -0.0009 },
    { icon: 'CE.png', name: 'Lorem Ipsum', value: 50839, change: +0.0066 },
    { icon: 'cs.png', name: 'Lorem Ipsum', value: 534.68, change: +0.0847 },
    { icon: 'SLO.png', name: 'Lorem Ipsum', value: 321.14, change: -0.0047 },
    { icon: 'O.png', name: 'Lorem Ipsum', value: 10.604, change: -0.0107 },
    { icon: 'O.png', name: 'Lorem Ipsum', value: 10.604, change: +0.023 },
    { icon: 'O.png', name: 'Lorem Ipsum', value: 10.604, change: -0.0107 },
    { icon: 'O.png', name: 'Lorem Ipsum', value: 10.604, change: +0.0500 },
    { icon: 'O.png', name: 'Lorem Ipsum', value: 10.604, change: -0.0107 },
    { icon: 'O.png', name: 'Lorem Ipsum', value: 10.604, change: +0.0432 },
  ];

}
