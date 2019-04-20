function thousandseparator(list) {
    // 1 000 000.23 => 1a ,000,000b 23c
    let parts = list.split('.');
    let c;
    !!parts[1] ? c = '.' + parts[1] : c = '';
    let n = parts[0];
    // clock arithmetic => 15 is 3 o clock why 
    if (n.length>3 ) {
        let condition = (n.length % 3);
        let limit = condition ? condition : 3;
        let a;
        a = n.slice(0,limit);
        let b;
        b = n.slice(limit);
        b = b.replace(/(\w{3})/g,',$1' );
        return  a + b + c;
    } else {
        return n + c;
    }
}

let numbers = [
    '10000',
    '10000.23',
    '10000000.23',
    '100',
    '100000'
];

numbers.forEach(number => console.log(thousandseparator(number)));
