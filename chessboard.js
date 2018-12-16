let size = 8, board = '';

for (let square = 0, row = 0; square < size ** 2; ++square) {
    if (!((square + row) % 2)) board += ' ';
    else board += '#';
    
    if (!((square + 1) % size)) {
        board += '\n';
        ++row
    }
}
console.log(board);