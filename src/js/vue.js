
let one = 0
button.addEventListener("click", () => {
    one++
    if(one % 2 == 0) {
        grid.style.cssText = "grid-template-areas: \"header header header\" \"main main main\" \"footer footer footer\";";
        aside.style.cssText = "display: none;";
        depart.style.cssText = "transform: rotate(0)"
    }
    else if(one % 2 !== 0) {
        grid.style.cssText = "grid-template-areas: \"header header header\" \"aside main main\" \"footer footer footer\";";
        aside.style.cssText = "display: block;";
        depart.style.cssText = "transform: rotate(90deg)"
    }
})