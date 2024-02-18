import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <pre>{{data$ | async}}</pre>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'demo-app';
  public data$ = this.http.get<string>('/api')

  constructor(private http: HttpClient) {
  }
}
