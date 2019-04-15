import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'

})
//contrary to ngIf
export class UnlessDirective {
  //whenever changes execute the set method
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear(); //remove from the dom
    }
  };
  //inject the template
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

}
