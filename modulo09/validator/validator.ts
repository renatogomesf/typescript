// Exemplo 02

interface Validator {
    isValid(s: string): boolean;
}

export { Validator };


class EmailValidator implements Validator {
    isValid(s: string): boolean {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(s);
    }
}

export { EmailValidator };