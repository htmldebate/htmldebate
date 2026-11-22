// Something in the built site that could run code in a visitor's browser.
export interface ScriptViolation {
    readonly file: string;
    readonly reason: string;
}
