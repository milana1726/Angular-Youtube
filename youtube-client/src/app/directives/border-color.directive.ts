import { Directive, ElementRef, OnInit, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorderColor]'
})
export class BorderColorDirective implements OnInit {
  @Input() public publicationDate!: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const date: Date = new Date(this.publicationDate);
    const days: number = Math.ceil(
      Math.abs(Date.now() - date.getTime()) / (1000 * 3600 * 24)
    );

    if (days < 31) {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'border-bottom-color',
        'green'
      );
    }
    if (days < 7) {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'border-bottom-color',
        'blue'
      );
    }
    if (days > 180) {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'border-bottom-color',
        'red'
      );
    }

    if (days > 31 && days < 180) {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'border-bottom-color',
        'yellow'
      );
    }
  }
}
