const logo = document.getElementById("logo");
const text = document.getElementById("text");
const logoContainer = document.getElementById("logo-container");

let isExpanded = false;

logo.addEventListener("click", () => {
  if (!isExpanded) {
    // Trigger the animation
    logo.classList.add("translate-x-[-150px]", "scale-[0.8]", "transition", "duration-700");
    logo.classList.remove("w-16", "h-16");
    logo.classList.add("w-20", "h-20");
    
    // Show the text with animation
    text.classList.remove("hidden");
    text.classList.add("fade-in", "translate-y-[0px]", "transition", "duration-700", "opacity-100");

    isExpanded = true;
  }
});
