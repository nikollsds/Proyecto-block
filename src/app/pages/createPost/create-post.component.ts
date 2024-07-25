import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ApiService } from '../../service/api.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Posts } from '../../models/posts';
import { ResponseApiPost } from '../../models/response-api-post';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {
  created: FormGroup;
  title: FormControl;
  text: FormControl;
  author: FormControl;
  publishDate: FormControl;

  newPost?: Posts;
  idVar?: ResponseApiPost | undefined;
  newId?: number;

  constructor(public postsApi: ApiService) {

    this.getAllPost();
    this.title = new FormControl('', Validators.required);
    this.text = new FormControl('', Validators.required);
    this.author = new FormControl('', Validators.required);
    this.publishDate = new FormControl('', Validators.required);

    this.created = new FormGroup({
      title: this.title,
      text: this.text,
      author: this.author,
      publishDate: this.publishDate,
    })

  }

  getAllPost(): void {
    this.postsApi.getAll().subscribe({
      next: (data) => {
        this.postsApi.postList = data;
        console.log(this.postsApi.postList);

      }
    })
  }

  handleSubmit(): void {
    console.log(this.created.value);
    const { titleVar, textVar, authorVar, publishDateVar } = this.created.value;
    const json = {
      title: titleVar,
      text: textVar,
      author: authorVar,
      publishDate: publishDateVar,
    };
    this.postsApi.getPost(json).subscribe((resp: any) => {
      this.idVar = resp;
      this.newId = this.idVar?.id;
      console.log(this.newId);
      return this.newId
    });
    this.created.reset();
  }

}
