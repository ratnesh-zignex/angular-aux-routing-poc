import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      console.log(event);
      if (event instanceof NavigationEnd) {
        console.log('Navigated to:', event.url);
      }
    });
    // Navigate to default route if no specific route is provided
    if (this.router.url === '/') {
      console.log('navigation RP');
      this.router.navigate(['/rp']);
    }
  }
}
