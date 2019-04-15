import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]' //select as an attribute
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {

    }

    ngOnInit() {
        //getting access and overwrite the style of the component
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}
