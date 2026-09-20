# Tasks Prompt

Now we will complete the `docs/design/tasks.md` file based on the `docs/design/plan.md`, `docs/design/specification.md`, and `docs/design/reference/tasks-guide.md` files. Let's focus on creating tasks that adapt the existing template application into a compelling, functional front-end prototype for the **Hiking Trail Explorer** application. The goal is to complete and validate the front end before moving on to any future database or backend work.

Use the `docs/design/reference/tasks-guide.md` as the required guide for structuring the task list. Follow its format, organization, Definition of Done, and Quick Self-Check requirements. Adapt the task list below into small, atomic, actionable tasks that can be implemented and tested independently.

Avoid creating redundant tasks, duplicating existing functionality, introducing conflicting technologies, or requiring a complete rewrite of the template application.

## Task List

- Adapt the existing data model and CSV dataset to support the Hiking Trail Explorer requirements, including trail name, difficulty, distance, location, description, elevation change, and points of interest when available. Use placeholder data where appropriate and provide clear handling for unavailable information.
- Adapt the collection page and trail cards to display relevant trail information in a clear, responsive, and visually appealing layout.
- Implement client-side trail search using the requirements in `docs/design/specification.md`.
- Implement difficulty and distance filtering, including appropriate behavior when no trails match the selected criteria.
- Adapt the existing item detail page and routing to display complete trail information, provide a way to return to the collection, and handle missing optional information.
- Implement trail bookmarking using browser `localStorage`, including visual bookmark indicators and preservation of bookmark state during supported sessions.
- Add loading states, error handling, accessibility improvements, responsive design refinements, and an appropriate application disclaimer where required.
- Include tasks for usability testing with at least two observers, acceptance-criteria testing, defect correction, and final review of the application's scope and costs.
- Ensure every task traces to one or more relevant requirements (`R#`), ADRs, constitutional principles, or documented constraints.

Follow the plan's intended sequence and do not silently resolve unanswered questions. Use only the status values `Not started`, `In progress`, `Done`, and `Blocked`. Do not mark a task as `Done` unless its implementation has been successfully tested or reviewed.
