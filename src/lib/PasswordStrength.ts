import rules from "./rules";

export function getStrengthLevel(password: string): number {
    return rules.reduce((prev, current) => prev + current(password.slice()), 0);
}
