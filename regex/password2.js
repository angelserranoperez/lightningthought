function checkthat(pw) {
    const regexp = /(?=.*\d{2}.*)(?=[A-Z])(?=\w{8,})/;
    return regexp.test(pw);
}

let passwords = [
    'A123456ABa',
    '123',
    '12312423423523452345 3434343',
    '1abcAB2aaa22a',
    ''
];

passwords.forEach(pw => console.log(checkthat(pw)));
