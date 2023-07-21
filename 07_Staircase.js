function staircase(n) {
    for (var row = 1; row <= n; row = row + 1) {
        var line = '';
        for (var column = 1; column <= n; column = column + 1) {
            if (column <= n - row) {
                line = line + ' ';
            } else {
                line = line + '#';
            }
        }
        console.log(line);
    }
}

staircase(4);

function staircaseB(n) {
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + '#'.repeat(i));
    }
}

staircaseB(4);