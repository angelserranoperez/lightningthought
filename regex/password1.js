// pw => correct or not
// at least 8 words, 1 capital letter , 2 digits
// use regular expressions

function checkthat(pw = "") {
    const fc = {
        capital: false,
        tdc: false
    };
    let makenothing;
    let atleast8 = /\w{8,}/.test(pw);
    if (atleast8) {
        for (let i=0; i < pw.length; i++) {
            fc.capital ? makenothing = true : fc.capital = /[A-Z]/.test(pw[i]);
            fc.tdc ? makenothing = true : fc.tdc = (/\d/.test(pw[i]) && !!(/\d/.test(pw[i+1])));  
            if (/\W/.test(pw[i])) {
                return false;
            }
        }
    }
    return fc.capital && fc.tdc
}

// 123456AB
let passwords = [
    'A123456ABa$',
    '123',
    '123124234A2$$$$3523452345 3434343',
    '1abcAB2aaa22a',
    ''
];

passwords.forEach(pw => console.log(checkthat(pw)));
