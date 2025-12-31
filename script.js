console.log("script loaded");

const searchInput = document.getElementById("search");
const buttons = document.querySelectorAll(".grid button");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    buttons.forEach(button => {
        const name = button.dataset.name;

        if (name.includes(query)) {
            button.parentElement.style.display = "";
        } else {
            button.parentElement.style.display = "none";
        }
    });
});
