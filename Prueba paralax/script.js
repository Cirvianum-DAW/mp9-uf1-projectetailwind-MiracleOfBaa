window.addEventListener('scroll', function() {
  const parallaxSections = document.querySelectorAll('.parallax');

  parallaxSections.forEach(function(section) {
    const video = section.querySelector('video');
    const parallaxOffset = section.offsetTop - window.innerHeight;
    const isSectionVisible = window.pageYOffset > parallaxOffset;

    if (isSectionVisible) {
      section.classList.remove('video-hidden');
    } else {
      section.classList.add('video-hidden');
    }
  });
});
