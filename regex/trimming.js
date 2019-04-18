function trimthatplease(list = "") {
    // ' hello    ' =>  'hello'
    let regexp = /^\s+|\s+$/g;
    return list.replace(regexp,'');
}

let list1 = '     kjdsgfnsgoritlhg       ';
console.log(trimthatplease(list1));
