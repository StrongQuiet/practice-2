const worksLink = document.querySelectorAll(".section-works-nav__li")
const worksImg = document.querySelectorAll(".section-works-content__img")
const worksContent = document.querySelector(".section-works-content")
let activeLink

const drawWC = (typeWC) => {
    worksContent.innerHTML = ""

    worksImg.forEach((item) => {
        if (activeLink.innerText == "Показать все") {
            worksContent.appendChild(item)
        } else if (item.getAttribute("data-filter") == typeWC) {
            worksContent.appendChild(item)
        }
    })
}

worksLink.forEach((item) => {
    item.addEventListener("click", () => {
        if (!item.classList.contains("active")) {
            activeLink = document
                .querySelector(".section-works-nav__li.active")
                .classList.remove("active")
            item.classList.add("active")
            activeLink = item

            drawWC(item.innerText)
        }
    })
})
