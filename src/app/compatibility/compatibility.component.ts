import { Component, trigger, state,style,transition,animate } from '@angular/core';
@Component({
  selector: 'app-compatibility',
  templateUrl: './compatibility.component.html',
  styleUrls: ['./compatibility.component.scss'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
     transition('inactive <=> active', [
        style({
          backgroundColor: '#cfd8dc',
          transform: 'scale(1.3)'
        }),
        animate('3000ms ease-in', style({
          backgroundColor: '#eee',
          transform: 'scale(1)'
        }))
      ])

    ])
  ]
})
export class CompatibilityComponent {
   heroes=[{
     state:"inactive",
     name:"xiaoming"
   },{
     state:"inactive",
     name:"xiaoqiang"
   }]
   toggleState(hero){
     if(hero.state==="active"){
        hero.state="inactive";
     }else{
        hero.state="active";
     }
   }
}