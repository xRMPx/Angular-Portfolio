import { Component, ChangeDetectionStrategy } from '@angular/core';


@Component({
    selector: 'app-contact',
    imports: [],
    template: `
    <ul>
      <li>GitHub: https://github.com/xRMPx</li>
      <li>LinkedIn: https://www.linkedin.com/in/ryan-petrillo-125591242/</li>
      <li>LeetCode: https://leetcode.com/u/xRMPx/</li>
    </ul>
    <button class="primary" (click)="viewResume()">Download Resume</button>
  `,
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  //TODO- Move URLs to string/configs file or environment variables for easier management
  viewResume(){
    const newTab = window.open("assets/resume.pdf", '_blank');
  }
}