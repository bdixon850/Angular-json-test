import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Post } from "../models/Post";
import { PostInfo } from "../models/PostInfo";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class PostService {
  postsUrl: string =
    "https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  getFullPosts(): Observable<PostInfo[]> {
    return this.http.get<PostInfo[]>(this.postsUrl);
  }

  // Add Post
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpOptions);
  }
}
