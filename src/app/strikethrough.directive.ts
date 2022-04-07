import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef) { 
    @HostListener("click") onclick(){
      this.textDeco("line-through")
    }
  
    @HostListener("dblclick") onDoubleClicks(){
      this.textDeco("None")
    }

    private textDeco(action:string){
      this.elem.nativeElement.style.textDecoration='line-through';
      this.elem.nativeElement.style.textDecoration=action;
    }
  }

}
function onDoubleClicks() {
  throw new Error('Function not implemented.');
}

