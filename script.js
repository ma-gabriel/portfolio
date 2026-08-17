
function categoriesSelection(choice) {
    const selector = document.getElementById("categories-selector");
    for (const child of selector.children) {
        child.classList.remove("selected");
    }

    const projects = document.getElementById("projects-selector");
    for (const child of projects.children) {
        if (child.dataset.type === String(choice) || choice === 0)
            child.removeAttribute("hidden");
        else
            child.setAttribute("hidden", true);

    }
    selector.children[choice].classList.add("selected");
}