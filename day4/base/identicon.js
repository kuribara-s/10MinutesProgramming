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

        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 3; x++) {
                if (parseInt(hashList[x + 3 * y], 16) % 2 == 0) {
                    hashArray[x][y] = true;
                    hashArray[4 - x][y] = true;
                }
            }
        }
        console.log(hashArray);

        const cvs = $('#identicon').get(0);
        const ctx = cvs.getContext('2d');
        const cellWidth = 100;
        const cellHeight = 100;
        ctx.fillStyle = "orange";
        ctx.clearRect(0, 0, 500, 500);
        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 5; x++) {
                if (hashArray[x][y]) {
                    ctx.fillRect(x * 100, y * 100, cellWidth, cellHeight);
                }
            }
        }
    })
});