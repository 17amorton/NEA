const mandelbrotRenderer = new Mandlebrot('mandlebrot');
const juliasetRender = new Juliaset('juliaset')

function renderJuliaSet(e){
    juliasetRender.c = juliasetRender.convertToComplex(e.x,e.y)
    juliasetRender.drawFractal();
}




function handleRender() {
    const real = document.getElementById('xValue').valueAsNumber;
    const imaginary = document.getElementById('yValue').valueAsNumber;
    juliasetRender.c = new ComplexNumber(real,imaginary)
    
    juliasetRender.drawFractal();
}




function animate() {


    function animationLoop() {
        if (animating) {
            juliasetRender.c.theta += Math.PI*2/60; 

            const thresholdDistance = 1.0;

            const distanceFromOrigin = Math.sqrt(juliasetRender.c.real * juliasetRender.c.real + juliasetRender.c.imaginary * juliasetRender.c.imaginary);

            if (distanceFromOrigin < thresholdDistance) {
                juliasetRender.maxIterations = 50;
            } else {

                const maxIterations = Math.floor(30 / (1 + distanceFromOrigin));
                juliasetRender.maxIterations = maxIterations;
            }
            juliasetRender.c.updateNumber();
            juliasetRender.drawFractal();
            requestAnimationFrame(animationLoop);
        }
    }


    

    animationLoop();
}


let animating = false;
function toggleAnimation() {
    animating = !animating;
    if (animating) {
        animate(); 
    }
}

mandelbrotRenderer.drawFractal();
juliasetRender.drawFractal();



