// Smooth scroll utility with custom easing
export const smoothScrollTo = (targetId, offset = 80) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // 1 second
    let start = null;

    // Easing function (easeInOutCubic)
    const easeInOutCubic = (t) => {
        return t < 0.5
            ? 4 * t * t * t
            : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);

        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    };

    requestAnimationFrame(animation);
};

// Handle anchor link clicks
export const handleAnchorClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    smoothScrollTo(targetId);
};
