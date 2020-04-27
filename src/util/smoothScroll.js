export default function smoothScroll(x, y, s) {
    const current = {x: window.scrollX, y: window.scrollY};
    const [deltaX, deltaY] = [x - current.x, y - current.y];
    const distance = Math.sqrt(deltaX*deltaX + deltaY*deltaY);
    const granularity = Math.min(45, distance); // Number of steps per second for scroll.
    const totalSteps = s * granularity;
    let currentStep = 0;
    const interval = setInterval(() => {
        /* If the user tries to scroll while we're smooth scrolling, stop trying to smooth scroll. Let the user win.
        function scrollCancel(e) {
            clearInterval(interval);
            e.target.removeEventListener(e.type, scrollCancel);
        };
        window.addEventListener("scroll", scrollCancel);
         */
        currentStep++;
        scrollFunction(totalSteps, currentStep, current.x, current.y, deltaX, deltaY);
        if (currentStep >= totalSteps) {
            clearInterval(interval);
            window.scrollTo(x, y);
        }
    }, 1000 / granularity)
}

function scrollFunction(totalSteps, currentStep, x0, y0, dx, dy) {
    const t = currentStep / totalSteps;
    const easeInOutValue = t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    window.scrollTo(x0 + dx * easeInOutValue, y0 + dy * easeInOutValue)
}