var makeSmall = false;

$(document).ready(function () {
    alternateBG();
});

//when the button is pressed the logo appears/disappears
$('#smallBanner').click(function () {
    toggleSmall();
});


//toggles to show/hide the logo
function toggleSmall() {
    if (makeSmall) {

        $('#owo').addClass('small');
        $('#bowonia').addClass('small');
    } else {

        $('#owo').removeClass('small');
        $('#bowonia').removeClass('small');
    }
    makeSmall = !makeSmall;
}

//changes the opacity of every other section
function alternateBG() {
    $('section').even().addClass('darker');
}