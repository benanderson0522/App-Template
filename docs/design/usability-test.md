# Usability Test — Hiking Trail Explorer

## Goal

Observe at least two people using the main trail-browsing flows. Record what they can do, where they get stuck, and 2–3 findings to consider for improvement. Do not change the application during a session.

## Before each session

- Ask an adult to be an observer and explain that this is a prototype, so you are testing the app—not the person.
- Do not record names or other personal information. Use Observer 1 and Observer 2.
- Use a fresh browser profile or private window so saved bookmarks from another session do not affect the test.
- Use the app's current trail data. Do not add or make up trail information to complete a task.
- If possible, run one session on a desktop-sized screen and one on a mobile-sized screen. Write down the screen type.
- Read the opening script, then let the observer try each task without coaching. Ask what they expect or notice, but do not suggest which button to use.

### Opening script

“Thanks for helping test this trail-exploring app. I’m checking whether the app is easy to use, not testing you. Please try each task and say what you are looking for or thinking. It’s okay if you can’t finish something. I’ll take notes without recording your name.”

## Tasks to read aloud

1. “You want to look for a trail. Show me where you would start.”
2. “Find Creek’s Edge Trail. What can you learn about it from the trail list?”
3. “Use the filters to look at trails with unavailable difficulty information that are under one mile. What happens to the list?”
4. “Search for a trail named ‘Not a real trail’. What happens?”
5. “Open Jackson Creek Trail. Find your way back to the trail list.”
6. “Look at the information for Creek’s Edge Trail. What information, if any, is unavailable?”
7. “Bookmark Creek’s Edge Trail. Return to the list, then open that trail again. How can you tell whether it is bookmarked?”
8. “Use the navigation to visit the About page, then return to the trail list.”

After each task, ask: “Was anything confusing or harder than you expected?” Do not explain the interface until the observer has finished the task.

## Session record

Copy this section once for each observer.

### Observer [1 or 2]

- Date: 9/28/26
- Screen type (desktop/mobile): Desktop
- Tasks attempted: 1-8
- Tasks completed without help: 1-8
- Places where the observer paused, tried something unexpected, or needed help: They tried to bookmark every trail option and tried to change the size of their browser window.
- Observer's own comments (optional; do not include their name or personal details): There is a lot of green

- Date: 9/28/26
- Screen type (desktop/mobile): Mobile
- Tasks attempted: 1-8
- Tasks completed without help: 1-8
- Places where the observer paused, tried something unexpected, or needed help: None
- Observer's own comments (optional; do not include their name or personal details): The boxes for each trail are large and it is difficult to see many trails.

## Findings

After both sessions, write down 2–3 findings total. Base each finding on something an observer did or said. Do not record guesses as observed results.

### Finding 1

- What happened: My first observer said there was too much green.
- Which task: 2
- Evidence (what the observer did or said): There is too much green on the search screen.
- Why it may make the app harder to use: It might be a turn off for some users if the app is not visually flattering.

### Finding 2

- What happened: My second observer had issues with the search page.
- Which task: 2
- Evidence (what the observer did or said): They got visually upset that they had to scroll to look through all the trail options.
- Why it may make the app harder to use: It is a accessibility error and I do not want users to become frustrated while using the app.

## Specification acceptance checks

Use these checks during or after the sessions. A pass means the listed behavior was observed. If the current sample data cannot demonstrate a check, mark it **Not testable with current sample data** rather than assuming it passes.

| Requirement | Manual check | Pass condition |
|---|---|---|
| R1 | Open the Home, Explore Trails, About, and a trail detail page. Try the navigation on each. | Primary navigation is visible and usable on each page. |
| R2 | Find a trail card with complete information. | Trail name, difficulty, distance, and location are displayed. |
| R3 | Select a trail from the collection. | The selected trail's detail page opens. |
| R4 | Open a trail detail page and select the return option. | The user returns to the trail collection. |
| R5 | Open a trail containing optional information. | Available optional information is displayed without preventing access to required trail information. |
| R6 | Select “Explore Trails” from the homepage. | The trail collection is displayed. |
| R7 | Enter a search term for a trail. | Trails matching the search term are displayed. |
| R8 | Select a difficulty filter. | Only trails matching the selected difficulty are displayed. |
| R9 | Select a distance filter. | Only trails within the selected distance range are displayed. |
| R10 | Select a trail from the collection. | The trail detail page displays the selected trail. |
| R11 | Select the bookmark option. | The selected trail changes to a bookmarked state. |
| R12 | Bookmark a trail, leave its detail page, and return to it. | The trail remains identified as bookmarked during the supported session. |
| R13 | Bookmark a trail. | A clear visual indicator shows that the trail is bookmarked. |
| R14 | Open a trail with missing information. | The missing field displays “Information unavailable” or an equivalent message. |
| R15 | Search for a trail that does not exist. | A clear “No matching trails found” message is displayed. |

### Sample-data note

The current CSV sample has unavailable difficulty and optional-information values for its trails. It can be used to try the unavailable-difficulty filter and missing-information behavior, but it does not contain a trail with complete basic information, available optional information, or a known difficulty level. Mark R2, R5, and the known-difficulty cases for R8 as **Not testable with current sample data** unless approved data is available; do not change the dataset as part of this test.

## Completion record

Do not mark T12 Done until two observer sessions have been completed and 2–3 evidence-based findings have been recorded above.
