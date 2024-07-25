import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Posts } from '../../models/posts';
import { HeaderComponent } from "../../components/header/header.component";
import { finalize } from 'rxjs';

@Component({
  selector: 'app-detail-post',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './detail-post.component.html',
  styleUrl: './detail-post.component.css'
})
export class DetailPostComponent {
  selextedPost?: Posts;

  constructor(
    private route: ActivatedRoute,
    public postApi: ApiService,
  ) {
    this.getAllPost()
  }

  getAllPost(): void {
    this.postApi.getAll()
      .pipe(finalize(() => { this.searchPost() }))
      .subscribe({
        next: (data) => {
          this.postApi.postList = data;
          console.log(this.postApi.postList);

        }
      })
  }

  searchPost() {
    const postId = this.route.snapshot.params['postId'];
    this.selextedPost = this.postApi.getById(postId);
  };

}
