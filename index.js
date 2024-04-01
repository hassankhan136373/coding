// Half fry
// 1 salt, 1.5 butter, 1 egg
function Halffry(salt, butter) {
    if (salt === void 0) { salt = 1; }
    if (butter === void 0) { butter = 3; }
    var coocked = salt + butter + 1;
    return coocked;
}
console.log(Halffry(5.8));
//full fry
//3 salt, 2.5 butter, 2 egg
function fullfry(salt, butter) {
    if (salt === void 0) { salt = 3; }
    if (butter === void 0) { butter = 3; }
    var coocked = salt + butter + 1;
    return;
}
console.log(fullfry(7.3));
