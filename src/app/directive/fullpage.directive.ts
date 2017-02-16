import {Directive, Input,Output,EventEmitter, OnInit,HostListener, ElementRef} from '@angular/core';
import {FullPageService} from '../servive/fullpage.service';
@Directive({
    selector: `[ngFullpage]`
})

export class ngFullpageDirective implements OnInit {
    public itv :any;
    height:number;
    page:number;
    @Output()
    public after : EventEmitter<any> = new EventEmitter();
    ngOnInit(): void {
        this.height= window.innerHeight;
        window.onload = load;
        let _this=this;
        function load (e){
            _this.page = _this.fullPageService.scrollTop(null)/_this.height | 0;
            _this.after.emit(_this.page); 
        }
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
            _this.fullPageService.move(_this.height,_this.page,_this.after,_this);
        }, 100);
        e.preventDefault();
    }
    constructor(private el: ElementRef,public fullPageService:FullPageService) { 
       
    }
    // move(){
    //     var value = this.height * this.page;
    //     var diff = this.scrollTop(null) - value;
    //     let _this=this;
    //     (function callee() {
    //         diff = diff / 1.2 | 0;
    //         _this.scrollTop(value + diff);
    //         if (diff){
    //             _this.itv = setTimeout(callee, 16);
    //         }else{
    //             _this.afterEvent();
    //         }
            
    //     })();
    // }
    
    // scrollTop(value) {
    //     if (value == null){
    //         return Math.max(document.body.scrollTop);
    //     } 
    //     else{
    //        document.body.scrollTop = value;
    //     } 
    // }
    public afterEvent(){
        this.after.emit();
    }
}