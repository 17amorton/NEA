class ComplexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
        this.r = (this.real**2+ this.imaginary**2)**(1/2)
        this.theta = Math.atan((this.imaginary)/(this.real))
    }
    updateNumber(){
        this.real = this.r*Math.cos(this.theta);
        this.imaginary = this.r*Math.cos(this.theta);
    }
    square() {
        const { real, imaginary } = this;
        return new ComplexNumber(real * real - imaginary * imaginary, 2 * real * imaginary);
    }

    add(other) {
        return new ComplexNumber(this.real + other.real, this.imaginary + other.imaginary);
    }
    sub(other){
        return new ComplexNumber(this.real - other.real,this.imaginary - other.imaginary);
    }
    pow(n) {
        const { real, imaginary } = this;
        const r = this.modulus() ** n;
        const theta = Math.atan2(imaginary, real);
        const newReal = r * Math.cos(n * theta);
        const newImaginary = r * Math.sin(n * theta);
        return new ComplexNumber(newReal, newImaginary);
    }
    div(n){
        const { real, imaginary } = this;
        const newReal = real / n;
        const newImaginary = imaginary / n;
        return new ComplexNumber(newReal, newImaginary);
    }

    modulus() {
        const { real, imaginary } = this;
        return Math.sqrt(real * real + imaginary * imaginary);
    }

}

