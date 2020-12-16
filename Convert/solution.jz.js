export const convertJZ = function(s, numRows) {
    if (s.length === 1 || numRows === 1) {
        return s
    }

    const row = new Array(numRows).fill('')

    let down = -1
    let position = 0

    for (let i = 0; i < s.length; i++) {
        if (position === 0 || position === numRows - 1) {
            down = down === -1 ? 1 : -1
        }
        row[position]+=s[i]
        position+=down
    }

    return row.join('')
};
