# Plan Prompt

Create a complete plan.md document for the Neeto application by using the approved business case, software specification, plan.md template, and plan-guide.md as your sources. Follow the plan guide from beginning to end in the exact order provided, treating it like a structured form that must be completed one section at a time. Do not jump ahead, skip sections, or move between different parts of the guide out of sequence.

## Project Goal

Create a responsive Hiking Trail Explorer web application for hikers who want to quickly find and compare trails before deciding where to hike. Users must be able to:

- Access the major application pages through primary navigation.
- Open the homepage and select “Explore Trails.”
- Browse a group of hiking trails.
- Search for trails.
- Use filters based on available trail information.
- Select a trail from the collection and view its detail page.
- View available trail location, description, distance, elevation change, difficulty, and points of interest.
- Bookmark a trail and see a clear bookmarked state.
- Return to a previously bookmarked trail while preserving its bookmarked state during the supported application session.
- Receive an “Information unavailable” message when trail information is missing.
- Receive a clear message when a search produces no matching trails.
- Use the core browsing and viewing features on desktop and mobile devices.

The first version must remain focused. Do not add real-time GPS tracking, active navigation, emergency services, payment capabilities, messaging, guaranteed real-time weather or trail conditions, a database containing every trail, or advanced mapping. Treat trail information as informational and potentially outdated.

## Testing and Acceptance Strategy

Provide test cases for:

- Primary navigation
- Trail name, difficulty, distance, and location display
- Selecting a trail
- Returning to the collection
- Optional information display
- Explore Trails navigation
- Search
- Trail-information filters
- Bookmarking
- Preserving bookmarked state
- Visual bookmark indication
- Missing information
- No matching search results
- Desktop and mobile usability

## Technology Direction

Use the decisions in the plan guide as the default direction:

- Frontend: HTML, CSS, and JavaScript, with optional Bootstrap
- Data: Static JSON or JavaScript data for the initial trail collection
- Bookmarks: Browser localStorage
- External APIs: None required for the core prototype
- Estimated initial budget: Approximately $800
- Estimated recurring cost: Approximately $150 per year
- Estimated schedule: Approximately 6–8 weeks

## Approach Summary

Begin by completing the Approach Summary section. Write two to four professional sentences explaining the overall development strategy for the Neeto application. Make sure the approach aligns with the approved business case and software specification, and avoid introducing features or technical decisions that are not supported by the provided materials.

## Tech Stack

After completing the Approach Summary, move to the Tech Stack section. Identify the proposed frontend technology, backend and database, hosting platform, and any additional services or APIs that may be needed. Clearly distinguish confirmed technologies from proposed or unverified options. If the source materials do not establish a specific technology, label it as pending, proposed, or open rather than presenting an assumption as a final decision.

## Key Decisions (ADRs)

Next, complete the Key Decisions (ADRs) section using the existing table format. Document each major architectural or technical decision, the requirement ID it traces back to, the alternatives considered, and the reason for selecting or proposing the decision. Ensure that decisions are supported by the business case, software specification, or plan guide. If a decision cannot yet be confirmed, identify it as pending or requiring further review instead of inventing an answer.

## Components / Building Blocks

Once the ADR section is complete, continue to Components / Building Blocks. Use the existing table to identify the major application components, explain the purpose of each component, and connect each one to its related requirement IDs. Describe the components at a planning level only. Do not include application code, implementation scripts, or unnecessary technical details that belong in later development tasks.

## Dependencies & Assumptions

After the components section, complete Dependencies & Assumptions. Identify external services, tools, data sources, authentication requirements, hosting needs, APIs, and other dependencies that may affect development. Separate confirmed dependencies from assumptions that still need verification. Do not treat missing information as confirmed, and clearly mark any details that require additional research, approval, or clarification.

## Risks

Next, complete the Risks section using the provided table. Identify relevant risks involving technology, security, budget, schedule, testing, usability, external services, and other factors that could affect the project. For each risk, provide its likelihood, potential impact, mitigation strategy, and owner when that information is available. If an owner or mitigation has not been established in the source materials, mark it as pending or unconfirmed rather than fabricating information.

## Sequencing

After completing the risk section, move to Sequencing. Explain the logical order in which the application should be planned and developed. Include dependencies between implementation steps, tasks that may be completed in parallel, testing stages, and review checkpoints. Ensure that the sequence is consistent with the decisions, components, dependencies, assumptions, and risks already documented in the previous sections. Do not introduce steps that conflict with the earlier parts of the plan.

## Review & Approval

Finally, complete the Review & Approval section using the existing table containing the reviewer, date, and approval status. Only include information that is provided or confirmed in the source materials. If a reviewer, date, or approval status is unknown, leave it blank or mark it as pending. Do not create fictional names, dates, or approvals.

## Final Review and Output Requirements

After completing every section in order, review the entire plan.md document to ensure that all sections have been completed or explicitly marked as pending, the content remains consistent with the approved business case and software specification, and all major decisions trace back to the appropriate requirement IDs whenever possible. Confirm that no unsupported features, fabricated decisions, invented approvals, or unverified information have been presented as fact. Ensure that the plan contains enough detail to support the later creation of tasks.md, while still remaining a planning document rather than an application implementation. Preserve the template’s gate: “Do not generate tasks until this plan is done.” Output only the completed plan.md document. Do not provide application code, tasks.md, or a separate explanation of your work.