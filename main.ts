import * as PasswordStrength from "PasswordStrength";
import * as InputOutput from "InputOutput";

function main() {
    const password = InputOutput.parseCommandLine(process.argv);
    const level = PasswordStrength.getStrengthLevel(password);
    InputOutput.print(level);
}

try {
    main();
} catch (error) {
    InputOutput.print(error);
}
