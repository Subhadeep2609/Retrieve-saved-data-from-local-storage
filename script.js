function saveText() {
    const inputField = document.getElementById("textInput");
    const output = document.getElementById("output");
    const textInput = inputField.value.trim();

    // Prevent empty save
    if (!textInput) {
        showMessage("⚠ Please enter some text before saving.", "warning");
        return;
    }

    localStorage.setItem("savedText", textInput);
    inputField.value = "";
    showMessage("✅ Text saved successfully!", "success");
}

function retrieveText() {
    const savedText = localStorage.getItem("savedText");
    if (savedText) {
        showMessage(`📄 Saved Text: ${savedText}`, "info");
    } else {
        showMessage("❌ No saved text found.", "error");
    }
}

function showMessage(message, type) {
    const output = document.getElementById("output");
    output.textContent = message;

    // Reset animation
    output.classList.remove("fade");
    void output.offsetWidth; // trigger reflow
    output.classList.add("fade");

    // Color styling based on type
    let colors = {
        success: "#4caf50",
        error: "#f44336",
        warning: "#ff9800",
        info: "#010708ff"
    };
    output.style.color = colors[type] || "#fff";
}
