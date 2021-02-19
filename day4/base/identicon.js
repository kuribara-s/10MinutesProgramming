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

        const digit26to28 = hashList.slice(25, 28);
        const digit29to30 = hashList.slice(28, 30);
        const digit31to32 = hashList.slice(30);
        const hue = rangeMap(parseInt(digit26to28.join(''), 16), 0, 4095, 0, 360);
        const saturation = 65 - rangeMap(parseInt(digit29to30.join(''), 16), 0, 255, 0, 20);
        const lightness = 75 - rangeMap(parseInt(digit31to32.join(''), 16), 0, 255, 0, 20);
        console.log("color(hsl): ", hue, saturation, lightness);

        const cvs = $('#identicon').get(0);
        const ctx = cvs.getContext('2d');
        const cellWidth = 100;
        const cellHeight = 100;
        ctx.fillStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        ctx.clearRect(0, 0, 500, 500);
        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 5; x++) {
                if (hashArray[x][y]) {
                    ctx.fillRect(x * 100, y * 100, cellWidth, cellHeight);
                }
            }
        }
    })

    function rangeMap(oldValue, oldMin, oldMax, newMin, newMax) {
        const oldRange = (oldMax - oldMin);
        const newRange = (newMax - newMin);
        return Math.round((((oldValue - oldMin) * newRange) / oldRange) + newMin);
    }
});