import { Component, ChangeDetectionStrategy } from '@angular/core';


@Component({
    selector: 'app-projects',
    imports: [],
    template: `
    <p>
      Ryan's GitHub Contributions Heatmap:
    </p>
    <div>
      @if (username) {
        <img [src]="'https://gh-heat.anishroy.com/api/' + username + '/svg'+ githubSvgArgs" alt="GitHub Contributions Heatmap"/>
      }
    </div>
    `,
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  //move these values to a config file for easier management
  //https://gh-heat.anishroy.com/
  username: string = 'xRMPx';
  githubSvgArgs = '?theme=purple&transparent=true&cellSize=15&cellGap=4&borderWidth=2&showMonthLabels=false';
}