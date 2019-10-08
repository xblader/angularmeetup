import { Directive, ElementRef, HostListener, Output, EventEmitter, Renderer2 } from '@angular/core';

@Directive({
    selector: '[posicaoMouse]',
})
export class MouseOverDirective {

    @Output() novaposicao: EventEmitter<any> = new EventEmitter<any>();

    constructor(private el: ElementRef, private render: Renderer2) {
    }

    @HostListener('mousemove', ['$event']) onMouseMove(event) {
        this.novaposicao.emit({ X: event.clientX, Y: event.clientY });        
        this.render.setStyle(this.el.nativeElement, "border-radius", "20px");
    }
    @HostListener('mouseout', ['$event']) onMouseOut(event) {
        this.novaposicao.emit({ X: event.clientX, Y: event.clientY });        
        this.render.removeStyle(this.el.nativeElement, "border-radius");
    }
}