// A pattern of markup that can run code, and how a violation of it is reported.
export interface MarkupRule {
    readonly pattern: RegExp;
    readonly reason: string;
}
