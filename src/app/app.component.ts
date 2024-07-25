import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PostListComponent } from "./pages/postList/post-list.component";
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { }
