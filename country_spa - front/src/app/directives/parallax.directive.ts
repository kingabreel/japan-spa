import { Directive, Input, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appParallax]',
  standalone: true
})
export class ParallaxDirective {
  @Input('ratio') parallaxRatio: number = 1;

  constructor(private eleRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundPosition', '0% 0%');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const offset = window.scrollY * this.parallaxRatio;
    this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundPosition', `center ${+offset}px`);
  }

}
