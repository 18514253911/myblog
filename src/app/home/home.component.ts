import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    obj={
      a1:true,
      b1:false,
      c1:false,
      d1:false,
    }
    change(a:any){
      for(let item in this.obj){
        if(a.id===item){
          this.obj[item]=true;
        }else{
          this.obj[item]=false;;
        }
      }
    }

}