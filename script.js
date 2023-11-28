document.addEventListener("DOMContentLoaded", () => {
    const GColorButton = document.getElementById("generateColor");
    const copyColorButton = document.getElementById("copyColor");

    function getRandomColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    GColorButton.addEventListener("click", () => {
        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
    });

    copyColorButton.addEventListener("click", () => {
        const textArea = document.createElement("textarea");
        textArea.value = document.body.style.backgroundColor;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        alert("Background color code copied to clipboard!");
    });
});
