import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { MainComponent } from "./components/main/main.component";
import { PostsComponent } from "./components/posts/posts.component";
import { PostItemComponent } from "./components/post-item/post-item.component";
import { PostsInfoComponent } from "./components/posts-info/posts-info.component";
import { PostInfoItemComponent } from "./components/post-info-item/post-info-item.component";
import { AddPostComponent } from "./components/add-post/add-post.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    PostsComponent,
    PostItemComponent,
    PostsInfoComponent,
    PostInfoItemComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
