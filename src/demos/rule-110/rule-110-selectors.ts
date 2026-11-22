// The selectors build-rule-110-selectors writes: a cell that's on, a cell that should be on but isn't, a cell that's on
// but shouldn't be, and a cell whose box has keyboard focus.
export interface Rule110Selectors {
    readonly on: ReadonlyArray<string>;
    readonly focus: ReadonlyArray<string>;
    readonly missing: ReadonlyArray<string>;
    readonly wrong: ReadonlyArray<string>;
}
