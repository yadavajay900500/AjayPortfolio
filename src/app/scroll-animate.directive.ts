import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';


@Directive({
  selector: '[appScrollAnimate]'
})
export class ScrollAnimateDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'show-on-scroll');
          observer.unobserve(this.el.nativeElement); // stop observing after visible
        }
      });
    }, { threshold: 0.2 });

    // start hidden
    this.renderer.addClass(this.el.nativeElement, 'hidden-on-load');
    observer.observe(this.el.nativeElement);
  }
}