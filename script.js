document.addEventListener('DOMContentLoaded', function() {
    const emojiBtn = document.querySelector(".emojis_switch");
    const emojis_container =  document.querySelector("#emojiContainer");
    emojis_container.style.display = "none"

    emojiBtn.addEventListener('click', function() {
        emojis_container.style.display = (emojis_container.style.display === "none") ? "block" : "none";
    });

});