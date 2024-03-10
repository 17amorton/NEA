class Juliaset extends Mandlebrot{
    constructor(canvasId) {
        super(canvasId);
        this.c = new ComplexNumber(0, 0);
    }
    isInFractal(a) {


        return super.isInFractal(a, this.c)
    }
}