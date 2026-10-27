document.addEventListener("DOMContentLoaded", function() {
    const foldButtons = document.querySelectorAll(".fold-button");
    console.log("Найдено кнопок:", foldButtons.length);

    foldButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            console.log("you clicked", event.currentTarget);
            const post = event.currentTarget.closest(".one-post");
            if (!post) {
                console.error("Блок статьи не найден");
                return;
            }

            const isFolded = post.classList.toggle("folded");
            if (isFolded) {
                button.textContent = "развернуть";
            } else {
                button.textContent = "свернуть";
            }

            button.setAttribute(
                "aria-expanded",
                String(!isFolded)
            );

        });

    });

});