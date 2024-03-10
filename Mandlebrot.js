class Mandlebrot extends FractalRenderer{
    isInFractal(z, c) {
        if (!c){
            c = z;
            z = new ComplexNumber(0,0);
        }

        let iterations = 0;

        while (iterations < this.maxIterations) {
            const tempZ = z;
            z = tempZ.square().add(c);

            if (z.modulus() > 2) {
                return iterations;
            }
            iterations++;
        }
        return iterations;
    }   
}