// RGB ansi format: \x1b[38;understand;r;g;b;0m[STRING]\x1b[0m
// RGB background ansi format: \x1b[48;2;r;g;b;0m[STRING]\x1b[0m
function red(str) {
    // 255, 0, 0
    return `\x1b[38;2;255;0;0m${str}\x1b[0m`;
}

function redBg(str) {
    // 255, 0, 0
    return `\x1b[48;2;255;0;0m${str}\x1b[0m`;
}

function yellow(str) {
    // 255, 247, 0
    return `\x1b[38;2;255;257;0m${str}\x1b[0m`;
}

function yellowBg(str) {
    // 255, 247, 0
    return `\x1b[48;2;255;257;0m${str}\x1b[0m`;
}

function green(str) {
    // 0, 255, 0
    return `\x1b[38;2;0;255;0m${str}\x1b[0m`;
}

function greenBg(str) {
    // 0, 255, 0
    return `\x1b[48;2;0;255;0m${str}\x1b[0m`;
}

function blue(str) {
    // 0, 115, 255
    return `\x1b[38;2;0;115;255m${str}\x1b[0m`;
}

function blueBg(str) {
    // 0, 115, 255
    return `\x1b[48;2;0;115;255m${str}\x1b[0m`;
}

function purple(str) {
    // 132, 0, 255
    return `\x1b[38;2;132;0;255m${str}\x1b[0m`;
}

function purpleBg(str) {
    // 132, 0, 255
    return `\x1b[48;2;132;0;255m${str}\x1b[0m`;
}

function pink(str) {
    // 255, 0, 217
    return `\x1b[38;2;255;0;217m${str}\x1b[0m`;
}

function pinkBg(str) {
    // 255, 0, 217
    return `\x1b[48;2;255;0;217m${str}\x1b[0m`;
}

function bold(str) {
    return `\x1b[1m${str}\x1b[0m`;
}

function underline(str) {
    return `\x1b[4m${str}\x1b[0m`;
}

function inverse(str) {
    return `\x1b[7m${str}\x1b[0m`;
}

function rgb(r, g, b, str) {
    return `\x1b[38;2;${r};${g};${b}m${str}\x1b[0m`;
}

function rgbBg(r, g, b, str) {
    return `\x1b[48;2;${r};${g};${b}m${str}\x1b[0m`;
}


/*
---testing---
console.log(red('\n\nred'), redBg('red'));
console.log(yellow('yellow'), yellowBg('yellow'));
console.log(green('green'), greenBg('green'));
console.log(blue('blue'), blueBg('blue'));
console.log(purple('purple'), purpleBg('purple'));
console.log(pink('pink'), pinkBg('pink'));
console.log(underline('underline'), inverse('inverse'), bold('bold'));
console.log(rgb(255, 0, 0, 'rgb'), rgbBg(255, 0, 0, 'rgb'), rgb(255, 0, 0, 'rgb'), rgbBg(0, 255, 0, 'rgb'), rgb(0, 0, 255, 'rgb'), rgbBg(0, 0, 255, 'rgb'))
*/
module.exports = {
    red: red,
    redBg: redBg,
    yellow: yellow,
    yellowBg: yellowBg,
    green: green,
    greenBg: greenBg,
    blue: blue,
    blueBg: blueBg,
    purple: purple,
    purpleBg: purpleBg,
    pink: pink,
    pinkBg: pinkBg,
    bold: bold,
    underline: underline,
    inverse: inverse,
    rgb: rgb,
    rgb: rgbBg
}