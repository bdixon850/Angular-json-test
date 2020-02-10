import { Component, OnInit } from "@angular/core";
import { PostService } from "../../services/post.service";

import { PostInfo } from "../../models/PostInfo";

@Component({
  selector: "app-posts-info",
  templateUrl: "./posts-info.component.html",
  styleUrls: ["./posts-info.component.scss"]
})
export class PostsInfoComponent implements OnInit {
  posts: PostInfo[];

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getFullPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
