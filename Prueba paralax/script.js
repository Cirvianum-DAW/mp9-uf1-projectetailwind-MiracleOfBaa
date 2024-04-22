window.addEventListener('scroll', function() {
    const parallaxSection = document.querySelector('.parallax');
    const videoBg = document.querySelector('.video-bg');
    const parallaxOffset = parallaxSection.offsetTop - window.innerHeight;
    
    if (window.pageYOffset > parallaxOffset) {
      videoBg.classList.add('scrolling');
    } else {
      videoBg.classList.remove('scrolling');
    }
  });
  