// https://angular.io/api/core/Renderer2#setstyle
import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  //Custom property binding -> can be setted on the component page []
  @Input() defaultColor: string = 'transparent';
  //set an alias so can be accessed directly in the dom (optional) if the name of the property is the same as the directive
  @Input('appBetterHighlight') highlightColor: string = 'blue';

  //bind to the property of the directive instead of using nativeElement like below
  @HostBinding('style.backgroundColor') backgroundColor: string = this.highlightColor;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange');
  }
  //add event to the directive
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange');
    //this.backgroundColor = 'orange';
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    //this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }
} 
