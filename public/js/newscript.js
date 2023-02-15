document.addEventListener("click", function(e) {
    let i = 0;

    if (e.target.className=="button-right") {
        // alert("click right");
        // //ваши действия
        i = i + 1;
    }
    if (e.target.className=="button-left") {
        // alert("click left");
        // //ваши действия
        i = i - 1;
    }
    console.log('\n i', i);
});