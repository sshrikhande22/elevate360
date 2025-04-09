import { Component , AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js/auto';
import { SidebarComponent } from '../sidebar/sidebar.component';
import annotationPlugin from 'chartjs-plugin-annotation';
import { FormsModule } from '@angular/forms';

Chart.register(...registerables, annotationPlugin);

@Component({
  selector: 'app-tsr',
  standalone: true,
  imports: [CommonModule, SidebarComponent, FormsModule],
  templateUrl: './tsr.component.html',
  styleUrl: './tsr.component.css'
})
export class TsrComponent implements AfterViewInit{
  title = 'tsr';

  // Dropdown filter values
  trainingFilter: string = 'all-time';
  performanceFilter: string = 'all-time';
  scorecardFilter: string = 'all-time';


  // Original data (mock or real)
  trainingStatisticsData = {
    weekly: [
      { title: 'Courses Completed', value: 5, progress: 50 },
      { title: 'Hours Invested This Week', value: '4h', extra: "+2h 14m last week" },
      { title: 'Quizzes Passed', value: 3, extra: "Advanced" },
      { title: "Leaderboard Rank", value: '#14', extra: "Top 10%"}
    ],
    monthly: [
      { title: 'Courses Completed', value: 12, progress: 80 },
      { title: 'Hours Invested This Month', value: '14h', extra: "+10h 14m last month",},
      { title: 'Quizzes Passed', value: 8, extra: "Intermediate" },
      { title: "Leaderboard Rank", value: '#14', extra: "Top 16%"}
    ],
    overall: [
      { title: 'Courses Completed', value: 45, progress: 100 },
      { title: 'Hours Invested', value: '60h', extra: "20% better"},
      { title: 'Quizzes Passed', value: 30, extra: "Beginner"},
      { title: "Leaderboard Rank", value: '#14', extra: "Top 20%" }
    ]
  };
  

  performanceStatisticsData = {
    weekly: [
      { title: 'Task Completion', value: '70%', progress: 70 },
      { title: 'Accuracy', value: '88%', progress: 69 },
      { title: "Current Score", value: 376, progress: 34 },
      { title: "Rank in Team", value: "#12", extra: "Top 20%"}
    ],
    monthly: [
      { title: 'Task Completion', value: '85%', progress: 85 },
      { title: 'Accuracy', value: '91%', progress: 91 },
      { title: "Current Score", value: 456, progress: 75},
      { title: "Rank in Team", value: "#11", extra: "Top 45%"}
    ],
    overall: [
      { title: 'Task Completion', value: '92%', progress: 92 },
      { title: 'Accuracy', value: '95%', progress: 95 },
      { title: "Current Score", value: 765, progress: 96},
      { title: "Rank in Team", value: "#3", extra: "Top 76%"}
    ]
  };
  

  scorecardData1 = {
    weekly: [
      { title: 'Productivity', value: 1, progress: 20 },
      { title: 'Speakeasy', value: '4h32m', extra: "+2h 14m last week"  },
      { title: 'AFK%', value: 78, extra: "-20%" },
      { title: 'Busy%', value: 80, extra:"-40%" },
      { title: 'FMR Timeline', value: '3.8/5', progress: 76 },
      { title: 'SDR', value: 45, progress: 76 },
      { title: 'vSME Consult Rate', value: 24, progress: 76 },
      { title: 'Escalation Rate', value: 4.78, progress: 76 },
    ],
    monthly: [
      { title: 'Productivity', value: 3, progress: 45 },
      { title: 'Speakeasy', value: '19h20m', extra: "+10h 14m last month" },
      { title: 'AFK%', value: 65, extra: "+10%" },
      { title: 'Busy%', value: 82, extra: "+65%" },
      { title: 'FMR Timeline', value: '4.1/5', progress: 81 },
      { title: 'SDR', value: 132, progress: 88 },
      { title: 'vSME Consult Rate', value: 89, progress: 91 },
      { title: 'Escalation Rate', value: 3.12, progress: 70 },
    ],
    overall: [
      { title: 'Productivity', value: 8, progress: 92 },
      { title: 'Speakeasy', value: '55h43m', extra: "20% better"},
      { title: 'AFK%', value: 72, extra: "+76%"},
      { title: 'Busy%', value: 85, extra: "90%"},
      { title: 'FMR Timeline', value: '4.3/5', progress: 89 },
      { title: 'SDR', value: 389, progress: 93 },
      { title: 'vSME Consult Rate', value: 210, progress: 96 },
      { title: 'Escalation Rate', value: 2.9, progress: 80 },
    ]
  };
  
  scorecardData2 = {
    weekly: [
      { title: 'Cases closed in <5 days', value: '60%', progress: 60 },
      { title: 'Client Ratings', value: '3.5★', progress: 30 },
      { title: 'IQA Quality Score', value: '80%', progress: 80 },
    ],
    monthly: [
      { title: 'Cases closed in <5 days', value: '75%', progress: 75 },
      { title: 'Client Ratings', value: '4.0★', progress: 80 },
      { title: 'IQA Quality Score', value: '85%', progress: 85 },
    ],
    overall: [
      { title: 'Cases closed in <5 days', value: '88%', progress: 88 },
      { title: 'Client Ratings', value: '4.7★', progress: 95 },
      { title: 'IQA Quality Score', value: '91%', progress: 91 },
    ]
  }; 
  

  // Filtered arrays for display
  training_statistics : any[] = [];
  performance_statistics : any[] = [];
  performance_scorecard1 : any[] = [];
  performance_scorecard2 : any[] = [];


  ngAfterViewInit() {
    this.createWeeklyActivitiesChart();
    this.createPerformanceChart();
    this.applyFilters(); 

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

    

  applyFilters(): void {
    this.training_statistics = this.filterData(this.trainingStatisticsData, this.trainingFilter);
    this.performance_statistics = this.filterData(this.performanceStatisticsData, this.performanceFilter);
    this.performance_scorecard1 = this.filterData(this.scorecardData1, this.scorecardFilter);
    this.performance_scorecard2 = this.filterData(this.scorecardData2, this.scorecardFilter);
  }

  onTrainingFilterChange() {
    this.training_statistics = this.filterData(this.trainingStatisticsData, this.trainingFilter);
  }
  
  onPerformanceFilterChange() {
    this.performance_statistics = this.filterData(this.performanceStatisticsData, this.performanceFilter);
  }
  
  onScorecardFilterChange() {
    this.performance_scorecard1 = this.filterData(this.scorecardData1, this.scorecardFilter);
    this.performance_scorecard2 = this.filterData(this.scorecardData2, this.scorecardFilter);
  }
  

  
  filterData(dataSets: { weekly: any[], monthly: any[], overall: any[] }, filterType: string): any[] {
    switch (filterType) {
      case 'weekly':
        return dataSets.weekly;
      case 'monthly':
        return dataSets.monthly;
      default:
        return dataSets.overall;
    }
  }
  
  

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
