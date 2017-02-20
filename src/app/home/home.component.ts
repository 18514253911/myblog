import { Component,OnInit,EventEmitter } from '@angular/core';
import {FullPageService} from '../servive/fullpage.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit {
   height=window.innerHeight;
   constructor(public fullPageService:FullPageService) { 
      this.after = new EventEmitter<string>();
      this.after.subscribe(this.doAfteer);
   }
   ngOnInit():void{
     
   }
   select={
        a:true,
        b:false,
        c:false,
        d:false
    }

   public after;
  setSelect(index){
     switch(index){
         case 0:
            this.select.a=true;
            this.select.b=false;
            this.select.c=false;
            this.select.d=false;
         break;
         case 1:
            this.select.a=false;
            this.select.b=true;
            this.select.c=false;
            this.select.d=false;
         break;
         case 2:
            this.select.a=false;
            this.select.b=false;
            this.select.c=true;
            this.select.d=false;
         break;
         case 3:
            this.select.a=false;
            this.select.b=false;
            this.select.c=false;
            this.select.d=true;
         break;
     }
  }
  public doAfteer(index:number){
    this.setSelect(index);
    if(index===0){
        document.getElementById("home-head").style.marginTop='100px';
        document.getElementById("head-motto").style.opacity="1";
        document.getElementById("home_info_box").style.width="500px"; 
        let childs=  document.getElementById("home_info_box").children;
        let i=0;
        let interval= setInterval(function(){
            let item:HTMLElement=childs[i] as HTMLElement;
            item.style.opacity="1";
            if(i==childs.length-1){
                clearInterval(interval);
            }else{
                i++;
            }
        },500)
    }
     
   }
   ngClick(index){
      this.setSelect(index);
   }
   
}