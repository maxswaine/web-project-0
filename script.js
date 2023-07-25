function scrollToProjects() {
  const projectsSection = document.getElementById("projects");
  projectsSection.scrollIntoView({ behavior: "smooth" });
}

function scrollToAbout() {
  const aboutSection = document.getElementById("about__start");
  aboutSection.scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  const linkedinLogo = document.getElementById("linkedinLogo");

  linkedinLogo.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/maxswaine", "_blank");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const githubLogo = document.getElementById("githubLogo");

  githubLogo.addEventListener("click", () => {
    window.open("https://github.com/maxswaine", "_blank");
  });
});
