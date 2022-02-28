function changeImage(flavor) {
    // console.log('images/${flavor}Smoothie.png')
    var source = "images/"+flavor+"Smoothie.png"
    document.getElementById("active_sel").src = source;
}
