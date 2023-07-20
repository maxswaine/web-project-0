function scrollToProjects() {
    const projectsSection = document.getElementById('projects__title');
    if (projectsSection) {
      // Using smooth behavior to create a smooth scrolling effect
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Add a click event listener to the button
  const scrollToProjectsButton = document.querySelector('.intro__button');
  if (scrollToProjectsButton) {
    scrollToProjectsButton.addEventListener('click', scrollToProjects);
  }
  