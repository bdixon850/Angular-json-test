import { Component, OnInit, Input } from "@angular/core";
import { PostInfo } from "src/app/models/PostInfo";

@Component({
  selector: "app-post-info-item",
  templateUrl: "./post-info-item.component.html",
  styleUrls: ["./post-info-item.component.scss"]
})
export class PostInfoItemComponent implements OnInit {
  @Input() post: PostInfo;

  constructor() {}

  ngOnInit(): void {}
}
