export default [
    // К надежности прибавляется (4*n), где n - количество всех символов пароля
    (pass: string) => pass.length * 4,
    // К надежности прибавляется +(n*4), где n - количество цифр в пароле
    (pass: string) => pass.replace(/[^0-9]/g, "").length * 4,
    // К надежности прибавляется +((len-n)*2) в случае, если пароль содержит n символов в верхнем регистре
    (pass: string) => {
        const uppercase = pass.replace(/[^A-Z]/g, "");
        if (!uppercase.length) {
            return 0;
        }
        return (pass.length - uppercase.length) * 2;
    },
    // К надежности прибавляется +((len-n)*2) в случае, если пароль содержит n символов в нижнем регистре
    (pass: string) => {
        const lowercase = pass.replace(/[^a-z]/g, "");
        if (!lowercase.length) {
            return 0;
        }
        return (pass.length - lowercase.length) * 2;
    },
    // Если пароль состоит только из букв вычитаем число равное количеству символов
    (pass: string) => {
        const letters = pass.replace(/[^a-zA-Z]/g, "");
        if (letters.length != pass.length) {
            return 0;
        }
        return -1 * letters.length;
    },
    // Если пароль состоит только из цифр вычитаем число равное количеству символов
    (pass: string) => {
        const digits = pass.replace(/[^0-9]/g, "");
        if (digits.length != pass.length) {
            return 0;
        }
        return -1 * digits.length;
    },
    // За каждый повторяющийся символ в пароле вычитается количество повторяющихся символов
    (pass: string) => -1 * getDuplicateCharsCount(pass),
];

function getDuplicateCharsCount(str: string): number {
    const match = str
        .split("")
        .sort()
        .join("")
        // Сопоставить букву и последующие буквы, если они совпадают
        .match(/(.)\1+/g);
    if (match) {
        return match.length;
    } else {
        return 0;
    }
}
