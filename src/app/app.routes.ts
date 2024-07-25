import { Routes } from '@angular/router';
import { PostListComponent } from './pages/postList/post-list.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { DetailPostComponent } from './pages/detail-post/detail-post.component';

export const routes: Routes = [
    { path: '', component: PostListComponent },
    { path: 'create-post', component: CreatePostComponent },
    { path: ':postId', component: DetailPostComponent },
];
