// 266, 199, 8 , 88
const p1 = '([2][0|5][0-5]|[1][0-9][0-9]|[1-9][0-9]|[0-9])';
const p2 = `(\\.)`;
const re = new RegExp(`^${p1}${p2}${p1}${p2}${p1}${p2}${p1}$`);

const ips = [
    /* '169.254.0.0',
    '333.255.255.0,', 
    '192.0.666.1',
    '3.9.6.33',
    '137.11.17.19'*/
    '12.3.4',
    'pero que es shit',
    '1233.22.22.12'
]

ips.forEach(ip => {
    const match = ip.match(re);
    console.log({ ip, match });
})

function iscorrect(ip) {
    const p1 = '([2][0|5][0-5]|[1][0-9][0-9]|[1-9][0-9]|[0-9])';
    const p2 = `(\\.)`;
    const re = new RegExp(`^${p1}${p2}${p1}${p2}${p1}${p2}${p1}$`);
    const match = ip.match(re);
    return !!match;
}
