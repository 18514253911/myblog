import { Injectable } from '@angular/core';

@Injectable()
export class FullPageService {

    constructor() { }
    public move(height,page,event,context){
        var value = height * page;
        var diff = this.scrollTop(null) - value;
        let _this=this;
        (function callee() {
            diff = diff / 1.2 | 0;
            _this.scrollTop(value + diff);
            if (diff){
               setTimeout(callee,16);
            }else{
               event.emit(page);
            }
        })();
    }
     scrollTop(value) {
        if (value == null){
            return Math.max(document.body.scrollTop);
        } 
        else{
           document.body.scrollTop = value;
        } 
    }

}