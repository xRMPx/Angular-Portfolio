import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
    selector: 'app-root',
    template: `
    <main>
      <app-navbar/>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [HomeComponent, RouterModule, NavbarComponent]
})
export class AppComponent {
  title = 'Ryan Petrillo';
}
