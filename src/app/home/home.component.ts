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
   public after;
   
  public doAfteer(index:number){
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
   ngClick(value){
      this.fullPageService.move(770,value,this.after,this);
   }
   
}