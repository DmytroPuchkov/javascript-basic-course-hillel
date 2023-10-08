function generateKey(length, characters) {
    return Array.from({ length: length }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key);