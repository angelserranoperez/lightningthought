function thousandseparator(list) {
    let parts = list.split('.');
    let b = parts[1] ? '.' + parts[1] : '';
    let a;
    let regexp = /\B(?=((\w{3})+)(?=$))/g;
    a = parts[0].replace(regexp,',');
    return a + b;
}

let numbers = [
    '10000',
    '10000.23',
    '10000000.23',
    '100',
    '100000'
];

numbers.forEach(number => console.log(thousandseparator(number)));
