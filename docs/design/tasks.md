# Tasks — Hiking Trail Explorer

> Derived from the plan document. Each task is small, checkable, and traceable to a requirement, ADR, constitutional principle, or documented constraint.

## Task List

| ID | Task | Traces to (R# / ADR#) | Depends on | Status |
|----|------|--------------------------|------------|--------|
| T1 | Confirm the initial trail dataset, required fields, and approved source permissions | ADR-01, ADR-08, R2, R5, R7-R10, R14, Constitution 1, Compliance/Legal constraint | — | Blocked |
| T2 | Create the sample trail dataset with required fields and placeholder values for missing optional data | ADR-01, ADR-06, ADR-08, R2, R5, R10, R14 | T1 | Not started |
| T3 | Build the shared primary navigation and homepage flow for the Hiking Trail Explorer | R1, R6, ADR-05 | T2 | Not started |
| T4 | Build the responsive trail collection layout and trail cards with name, difficulty, distance, and location | R2, R3, ADR-04, ADR-05 | T2 | Not started |
| T5 | Implement client-side text search across the trail collection | R7, ADR-02 | T4 | Not started |
| T6 | Implement difficulty and distance filters and display the no-results message when needed | R8, R9, R15, ADR-02 | T4, T5 | Not started |
| T7 | Build the trail detail page with required information, return navigation, and available optional details | R3, R4, R5, R10, ADR-05, ADR-06 | T4 | Not started |
| T8 | Add missing-information handling for unavailable fields and the informational disclaimer | R5, R14, Constitution 1, Compliance/Legal constraint | T7 | Not started |
| T9 | Implement trail bookmarking with browser localStorage and clear visual bookmark states | R11, R12, R13, ADR-03 | T7 | Not started |
| T10 | Add loading, error, accessibility, and responsive refinements for the full trail browsing flow | R1-R15, Constitution 3, Performance, Accessibility | T5, T6, T7, T9 | Not started |
| T11 | Validate keyboard access, contrast, and mobile usability across the core screens | Constitution 3, Accessibility, R1, R3, R4, R13 | T10 | Not started |
| T12 | Run usability testing with at least two observers and record findings for improvement | Risk: Usability testing does not identify important problems, Constitution 3, R1-R15 | T10 | Not started |
| T13 | Execute acceptance-criteria testing, correct defects, and re-check the affected trails flow | R1-R15, Definition of Done | T11, T12 | Not started |
| T14 | Review the final application scope, expected costs, and readiness for optional deployment | ADR-07, Budget/Timeline, Constitution 1, Scope limitations | T13 | Not started |

**Status values:** Not started · In progress · Done · Blocked

## Definition of Done (applies to every task)

- Matches its linked requirement's acceptance criteria in the specification.
- Reviewed by a human before marked done
- No task marked done without a test passing

## Blocked / Questions

| Task | Blocker | Raised | Resolved |
|------|---------|--------|----------|
| T1 | The final set of trails, approved source(s), and whether bookmarks should persist after browser close remain open decisions in the specification and plan. | 2026-09-20 | |

## Quick Self-Check Before You Start Building

- [ ] Every task traces to a requirement, ADR, constitutional principle, or documented constraint.
- [ ] Every task is small enough to finish in under a day.
- [ ] Order matches the plan's sequencing, with data decisions and uncertain requirements first.
- [ ] No task is vague enough that "done" is a judgment call.
- [ ] Blocked items are logged, not silently skipped.
