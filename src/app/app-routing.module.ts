import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostsComponent } from "./components/posts/posts.component";
import { MainComponent } from "./components/main/main.component";
import { PostsInfoComponent } from "./components/posts-info/posts-info.component";

const routes: Routes = [
  { path: "posts", component: PostsComponent },
  { path: "", component: MainComponent },
  { path: "posts/:id", component: PostsInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
