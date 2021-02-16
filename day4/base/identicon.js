$(function () {
    /* Implement here */
    $("#generate_button").on('click', function () {
        var name = $("#user_name").val();
        console.log(name);
        var hashName = md5(name);
        console.log(hashName);
    })
});