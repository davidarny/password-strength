import chalk from "chalk";

export function parseCommandLine(args: string[]): string {
    const argv = args.slice(2);
    if (!argv[0]) {
        throw new Error("Password not found in arguments!");
    }
    return argv[0];
}

export function print<T>(info: T): void;

export function print(error: Error): void;

export function print<T>(value: T | Error): void {
    if (!value.toString) {
        console.error(chalk.yellow("Cannot print value! No 'toString()' method found!"));
        return;
    }
    if (value instanceof Error) {
        console.error(chalk.red(value.toString()));
    } else {
        console.log(chalk.green(value.toString()));
    }
}
