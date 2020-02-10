import { Component, OnInit } from "@angular/core";
import { PostService } from "../../services/post.service";

import { Post } from "../../models/Post";
import { PostInfo } from "src/app/models/PostInfo";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  addPost(post: PostInfo) {
    this.postService.addPost(post).subscribe(post => {
      this.posts.push(post);
    });
  }
}
