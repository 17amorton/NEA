
class FractalRenderer {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.maxIterations = 100; 
        this.mousepos = new ComplexNumber(0, 0);
        this.canvas.width = 400;
        this.canvas.height = 400;






        this.scale = 100;
        this.centerX = this.canvas.width / 2;
        this.centerY = this.canvas.height / 2;

    }
    
  
    convertToComplex(x, y) {
        const real = (x - this.centerX) / this.scale;
        const imaginary = (this.centerY - y) / this.scale;
        return new ComplexNumber(real, imaginary);
    }




    colourPixel(pixel, iterations) {
        const brightness = iterations / this.maxIterations * 255;
        const color = `rgb(${brightness}, ${brightness}, ${6*brightness})`;
        this.ctx.fillStyle = color;
        this.ctx.fillRect(pixel.x, pixel.y, 1, 1);
    }


    
    drawFractal() {
        const { width, height } = this.canvas;
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                const complexNumber = this.convertToComplex(x, y);
                const iterations = this.isInFractal(complexNumber);
                this.colourPixel(new Pixel(x, y), iterations);
            }
        }
    }
}
