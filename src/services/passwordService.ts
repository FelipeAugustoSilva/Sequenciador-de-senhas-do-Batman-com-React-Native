export default function generatePass() {
    let password: string = '';
    let characters: string = 'aA@$#12345679abcdefghijFGHIJLMNOPQWUVXYZT&!';
    let passwordLength = 10;

    for (let index = 0; index < passwordLength; index++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }
    return password;
}
