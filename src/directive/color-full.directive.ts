import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[ColorFull]',
  standalone: true
})
export class ColorFullDirective {
  constructor(private el: ElementRef) {
    this.color()
    }
    
    @Input() ColorFullDirective?:string
    private color()
    {
       if(this.ColorFullDirective)
         this.el.nativeElement.style.backgroundColor = this.ColorFullDirective
      else
      this.el.nativeElement.style.backgroundColor = `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`

    }

}
