var miles = ["Crouch", "Run", "Tree"]
var randomMiles = 0;
var imgMiles = document.getElementById("miles");
var description = document.getElementById("description");
var alltexts = document.querySelectorAll(".texts");
var timer;
var source_num = 1;

$(document).ready(function() {
    setTimer();

    $(".arrow").on("click", function(event) {
        var num = $(this).attr("id");
        displayproject(num);

    });

    $("#miles").on("click", function(event) {
        menuMiles();
    });

    $(".icons a").click(function() {
        $(imgMiles).toggleClass('invisible');
        var selectedProject = $(this).attr('href');
        // document.querySelectorAll('.texts').classList.remove('is-visible');
        document.querySelectorAll('.texts:not(' + selectedProject + ')').forEach(el => el.classList.remove('is-visible'))
        $(selectedProject).toggleClass("is-visible");
        resetMiles();
    });

});



function changeMiles() {
    //console.log("changed");
    randomMiles = getRndInteger(0, 3);
    imgMiles.style.backgroundImage = 'url("Files/Jumping Mileseseses/' + miles[randomMiles] + '.png")';
}

function menuMiles() {
    document.querySelectorAll('.texts:not(#description)').forEach(el => el.classList.remove('is-visible'))
    $("#description").toggleClass("is-visible");
    resetMiles();
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function setTimer() {
    clearInterval(timer);
    timer = setInterval(function() { changeMiles() }, 1000);
}


function resetMiles() {
    if ((document.querySelectorAll(".is-visible").length) == 0) {
        setTimer()
    } else {
        imgMiles.style.backgroundImage = 'url("Files/Jumping Mileseseses/Caught!.png")';
        clearInterval(timer);
    };


}

function displayproject(num) {

    var id_img = "img_" + num + "";
    var id_text = "text_" + num + "";
    var url = "assets/images/"
    var curr_img = document.getElementById(id_img);
    var max_img = curr_img.src.slice(-14, -13);

    if (curr_img.classList.contains("is-visible") == true) {
        if (source_num >= parseInt(max_img)) { source_num = 0 } else { source_num++ }
        if (source_num == 0) {
            $('#' + id_text).removeClass("invisible");
            $('#' + id_img).removeClass("is-visible");
        } else {
            $('#' + id_text).addClass("invisible");
            $('#' + id_img).addClass("is-visible");
            curr_img.src = url + source_num + "on" + max_img + "-project" + num + ".jpg";
        }
        console.log(source_num)
    } else {
        $('#' + id_text).addClass("invisible");
        $('#' + id_img).addClass("is-visible");

        console.log(source_num);
    }
}
//window.addEventListener('scroll', scrollHandler);

// function scrollHandler() {
//     var element = document.getElementById('allIcons');

//     var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
//     var elementHeight = element.offsetHeight;
//     console.log(elementHeight, distanceToTop)
//     var scrollTop = document.documentElement.scrollTop;

//     var opacity = 1;

//     if (scrollTop > distanceToTop) {
//         opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
//     }

//     if (opacity >= 0) {
//         element.style.opacity = opacity;
//     }
// }