$(function () {
    /* Implement here */
    $("#generate_button").on('click', function () {
        var name = $("#user_name").val();
        console.log(name);
        var hashName = md5(name);
        console.log(hashName);

        var hashList = hashName.split('');
        console.log(hashList);

        var hashArray = [
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false]
        ];
        console.log(hashArray);

        for (var y = 0; y < 3; y++) {
            for (var x = 0; x < 5; x++) {
                if (parseInt(hashList[x + 3 * y], 16) % 2 == 0) {
                    hashArray[x][y] = true;
                    hashArray[4 - x][y] = true;
                }
            }
        }
        console.log(hashArray);
    })
});