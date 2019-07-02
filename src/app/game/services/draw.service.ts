import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DrawService {
    context: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement; 

    get width() {
        return this.canvas.width;
    }

    get height() {
        return this.canvas.height;
    }

    clear() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
        this.context.save();
        this.context.clearRect(0,0,this.width, this.height);
        this.context.restore();
    }

    setCanvas(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
    }
}