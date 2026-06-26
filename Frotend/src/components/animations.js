// animations.js - Fixed version

document.addEventListener('DOMContentLoaded', function() {
    
    // Make all elements visible immediately on page load
    // This ensures content shows even if observer doesn't fire
    const allAnimateElements = document.querySelectorAll('.animate-on-scroll, .animate-fade-up, .animate-fade-left, .animate-fade-right, .animate-scale, .card-pop, .pop-up, .slide-left, .slide-right, .zoom-in');
    allAnimateElements.forEach(el => {
        el.classList.add('visible');
        el.classList.add('active');
    });
    
    // Then after 500ms, remove the visible class and let observer handle it
    setTimeout(() => {
        allAnimateElements.forEach(el => {
            el.classList.remove('visible');
            el.classList.remove('active');
        });
        
        // 1. Intersection Observer for scroll animations
        const animateElements = document.querySelectorAll('.animate-on-scroll, .animate-fade-up, .animate-fade-left, .animate-fade-right, .animate-scale, .card-pop, .pop-up, .slide-left, .slide-right, .zoom-in');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -30px 0px'
        });
        
        animateElements.forEach(el => observer.observe(el));
        
        // 2. Stagger children observer
        const staggerElements = document.querySelectorAll('.stagger-children');
        const staggerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    staggerObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15
        });
        
        staggerElements.forEach(el => staggerObserver.observe(el));
        
        // 3. Elements already in viewport - trigger immediately
        setTimeout(() => {
            animateElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (rect.top < windowHeight - 50) {
                    el.classList.add('visible');
                    el.classList.add('active');
                }
            });
            
            staggerElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (rect.top < windowHeight - 50) {
                    el.classList.add('visible');
                }
            });
        }, 100);
        
    }, 100);
    
    // Handle resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            const elements = document.querySelectorAll('.animate-on-scroll, .animate-fade-up, .animate-fade-left, .animate-fade-right, .animate-scale, .card-pop, .pop-up, .slide-left, .slide-right, .zoom-in');
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (rect.top < windowHeight - 50 && !el.classList.contains('visible')) {
                    el.classList.add('visible');
                    el.classList.add('active');
                }
            });
        }, 200);
    });
});