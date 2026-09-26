import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-projects',
    imports: [CommonModule],
    template: `
    <p>
      Ryan's GitHub Contributions Heatmap:
    </p>
    <div>
      <img *ngIf="username" [src]="'https://gh-heat.anishroy.com/api/' + username + '/svg'+ githubSvgArgs" alt="GitHub Contributions Heatmap"/>
    </div>
  `,
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  //move these values to a config file for easier management
  //https://gh-heat.anishroy.com/
  username: string = 'xRMPx';
  githubSvgArgs = '?theme=purple&transparent=true&cellSize=15&cellGap=4&borderWidth=2&showMonthLabels=false';
}