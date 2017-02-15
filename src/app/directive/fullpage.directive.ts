import {Directive, Input, OnInit,HostListener, ElementRef} from '@angular/core';

@Directive({
    selector: `[ngFullpage]`
})

export class ngFullpageDirective implements OnInit {
    public itv :any;
    height:number;
    page:number;
    ngOnInit(): void {
        this.height= window.innerHeight;
        this.page = this.scrollTop(null)/this.height | 0;
    }

    @HostListener('mousewheel',['$event']) mousewheel(e: WheelEvent){
        clearTimeout(this.itv);
        let _this=this;
        this.itv = setTimeout(function() {
            var delta = e.wheelDelta / 120 || -e.deltaY / 3;
            _this.page -= delta;
            var max = (document.body.scrollHeight / _this.height | 0) - 1;
            if (_this.page < 0) return _this.page = 0;
            if (_this.page > max) return _this.page = max;
            _this.move();
        }, 100);
        e.preventDefault();
    }
    constructor(private el: ElementRef) { 
       
    }
    move(){
        var value = this.height * this.page;
        var diff = this.scrollTop(null) - value;
        let _this=this;
        (function callee() {
            diff = diff / 1.2 | 0;
            _this.scrollTop(value + diff);
            if (diff) _this.itv = setTimeout(callee, 16);
        })();
    }
    callee(diff:number,value:number) {
            diff = diff / 1.2 | 0;
            this.scrollTop( + diff);
            if (diff) this.itv = setTimeout(this.callee, 16);
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