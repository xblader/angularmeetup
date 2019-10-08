import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[posicaoMouse]',
})
export class MouseOverDirective {

    @Output() novaposicao: EventEmitter<any> = new EventEmitter<any>();

    constructor(private el: ElementRef) { }

    @HostListener('mousemove', ['$event']) onMouseMove(event) {
        this.novaposicao.emit({ X: event.clientX, Y: event.clientY });
    }


}