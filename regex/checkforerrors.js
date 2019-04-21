// 'text ab ab fhfhf hj hj' => ['ab', 'hj']
function checkdupli(text) {
    const regexp = /(\w+)\s(\1)/g;
    const list = [];
    text.replace(regexp, (match) => {
        const elements = match.split(' ');
        list.push(elements[1]);
        return elements[0];
    });
    return list; // 
}

let lists = [
    'hi hi how many many things and and',
    'hi hi',
    'hi hi hi ho ho ho'
]

lists.forEach(list => console.log(checkdupli(list)));
