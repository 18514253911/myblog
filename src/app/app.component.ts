import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //浏览器的高度
  height=window.innerHeight;
  title = 'app works!';
  public menus=[{
      display:"首页",
      path:"home"
  },{
      display:"个人博客",
      path:"home"
  },{
      display:"兼容性",
      path:"home"
  },{
      display:"js设计模式",
      path:"home"
  }]
}
