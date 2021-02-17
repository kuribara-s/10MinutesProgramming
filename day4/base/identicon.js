$(function () {
    /* Implement here */
    $("#generate_button").on('click', function () {
        var name = $("#user_name").val();
        console.log(name);
        var hashName = md5(name);
        console.log(hashName);

        var hashList = {};
        for (i = 0; i < hashName.length(); i++) {
            hashList.add(hashName.substring(i, i + 1));
        }
        console.log(hashList);

        var hashArray = [[false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false]];
        console.log(hashArray);

    })
});