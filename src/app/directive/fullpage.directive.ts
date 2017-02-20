import {Directive, Input,Output,EventEmitter, OnInit,HostListener, ElementRef,AfterViewInit } from '@angular/core';
import {FullPageService} from '../servive/fullpage.service';
@Directive({
    selector: `[ngFullpage]`
})

export class ngFullpageDirective implements OnInit,AfterViewInit  {
    public itv :any;
    height:number;
    page:number;
    @Output()
    public after : EventEmitter<any> = new EventEmitter();
    ngOnInit(): void {
        this.height= window.innerHeight;
      
    }
    ngAfterViewInit(): void{
        this.page = this.fullPageService.scrollTop(null)/this.height | 0;
        this.after.emit(this.page); 
    }
    @HostListener('mousewheel',['$event']) mousewheel(e: WheelEvent){
        clearTimeout(this.itv);
        let _this=this;
        this.itv = setTimeout(function() {
            var delta = e.wheelDelta / 120 || -e.deltaY / 3;
            _this.page = _this.fullPageService.scrollTop(null)/_this.height | 0;
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
    public afterEvent(){
        this.after.emit();
    }
}