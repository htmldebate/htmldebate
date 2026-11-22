// One of the tests people use, knowingly or not, when they say whether something is a programming language. Part 1
// sets them out; the verdict scores HTML and CSS against each.
export interface ProgrammingTest {
    readonly id: string;
    readonly name: string;
    readonly question: string;
}
