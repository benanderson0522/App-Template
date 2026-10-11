# Module 1 Portfolio — Ben Anderson

## Part 1: Traceability Audit

| Business case benefit | Requirement | Acceptance test | ADR | Task |
| :---- | :---- | :---- | :---- | :---- |
| Reduce the time a user spends searching multiple websites by putting everything, information-wise, in one place. | R7 | Enter text into the search field. PASS: The app shows the correct trails that match the search text. | ADR-02 | T4 |
| Help users find trails that match their preferences. | R8 | Select a difficulty filter. PASS: The app displays trails that match the selected filter. | ADR-02 | T5 |
| Allow users to save trails that they are interested in so they can easily find them later. | R11 | Select the bookmark option on a trail. PASS: The selected trail becomes marked and remains marked after page reloads. | ADR-03 | T9 |

## 

## Part 2: AI Collaboration Evidence

### **Prompt A: One That Worked Well**

Prompt:  
Use the structure in `design-system-guide.md` to complete `design-system.md` for my Hiking Trail Explorer application. Create a cohesive outdoor-inspired design system based on a dark, natural palette of deep pine green (\#16302A, \#1F3D31), moss (\#5C7A5A), sand (\#E7DCC0), clay (\#C0602E), and cream (\#F5F1E5). Use Fraunces for headings and the wordmark, and Work Sans for body text and interface elements. Maintain a consistent 8px spacing system and responsive 12-column grid. Use rounded buttons, rectangular trail cards and search-result listings, clear headings, and visible hover and keyboard-focus states. Incorporate the landing page's topographic contour lines, winding dashed trail, and clay destination pin as recurring visual elements without compromising readability. Define reusable component styles, concise outdoors-oriented voice and tone, and accessibility standards targeting WCAG 2.1 AA with explicit contrast ratios. Complete all nine sections of the guide, including logo usage, version history, and change log. Make reasonable assumptions where necessary, but keep the design consistent with the existing landing page and avoid introducing unnecessary colors, fonts, or decorative elements.

Provided Context:  
I was trying to have the AI build the website with the colors and style I wanted.

What the AI Produced:  
The AI produced a product that I was visually very happy with. The functionality of the website was poor at the moment, but it was very close to my idea of design.

Reflection:  
From this I realized that you need high levels of specificity for an AI to function how you would like. I also learned that the structure of the prompt is important as, putting the important items in the front of the prompt, allows the AI to continue with that style and thinking for the rest of the result. I also have realized that giving items, like specific fonts or hex keys for colors, saves the AI from overthinking things and, in my experience, has led to better results. It only takes a minute to find the hex keys of the colors I like too, but it saved me a lot of headache.

### **Prompt B: One That Did Not**

Prompt:  
 Now we will complete the `docs/tasks.md` file based on the `docs/plan.md`, `docs/specification.md`, and `docs/reference/tasks-guide.md` files. Let's focus on creating tasks that adapt the existing template application into a compelling, functional front-end prototype for the Hiking Trail Explorer application. The goal is to complete and validate the front end before moving on to any future database or backend work.

Use the `docs/reference/tasks-guide.md` as the required guide for structuring the task list. Follow its format, organization, Definition of Done, and Quick Self-Check requirements. Adapt the task list below into small, atomic, actionable tasks that can be implemented and tested independently.

Be very mindful of the existing template code in this workspace. Inspect the repository and its current components before creating tasks. The application currently uses Vue 3, Vue Router, Bootstrap 5.3.3, Bootstrap Icons, JavaScript modules, and a CSV-backed dataset. Avoid creating redundant tasks, duplicating existing functionality, introducing conflicting technologies, or requiring a complete rewrite of the template application.

Follow the plan's intended sequence and do not silently resolve unanswered questions. Use only the status values `Not started`, `In progress`, `Done`, and `Blocked`. Do not mark a task as `Done` unless its implementation has been successfully tested or reviewed.

Output only the completed `docs/tasks.md` content.

Provided Documents/Context:  
I gave the AI the project plan, specification, task guide, and the existing documents from the template.

What the AI produced:  
The AI produced a task list that was organized around the app’s requirements, but it was lacking specificity.

Reflection:  
The prompt did not work well because I was not specific enough in my prompt regarding details like the requirements and the individualities of each one. I ended up redoing the prompt and adding this section: “
**Task List**

* Adapt the existing data model and CSV dataset to support the Hiking Trail Explorer requirements, including trail name, difficulty, distance, location, description, elevation change, and points of interest when available. Use placeholder data where appropriate and provide clear handling for unavailable information.  
* Adapt the existing landing page, navigation, and About page to reflect the Hiking Trail Explorer application while preserving the template's reusable Vue components and responsive structure.  
* Adapt the collection page and trail cards to display relevant trail information in a clear, responsive, and visually appealing layout.  
* Implement client-side trail search using the requirements in `docs/specification.md`.  
* Implement difficulty and distance filtering, including appropriate behavior when no trails match the selected criteria.  
* Adapt the existing item detail page and routing to display complete trail information, provide a way to return to the collection, and handle missing optional information.  
* Implement trail bookmarking using browser `localStorage`, including visual bookmark indicators and preservation of bookmark state during supported sessions.  
* Add loading states, error handling, accessibility improvements, responsive design refinements, and an appropriate application disclaimer where required.  
* Include tasks for usability testing with at least two observers, acceptance-criteria testing, defect correction, and final review of the application's scope and costs.  
* Ensure every task traces to one or more relevant requirements (`R#`), ADRs, constitutional principles, or documented constraints.”

Doing this fixed the output and gave me something that I only had to make minor tweaks to.

## 

## Part 3: Document Reflection

### **Which document paid off the most?**

I believe that the [specification.md](http://specification.md) document paid off the most because it established what my app needed to become before any implementation began. Having things like the target user, problems of having to comb multiple websites and sources for information, and needed features allowed the rest of the project to have a clear direction. R7-R9 involved different means of searching or filtering and these requirements made it much easier to create acceptance tests and merge the implementation tasks into outcomes that could be analyzed.

### **Which document needed the most improvement?**

The document that needed the most improvement was definitely the [design-system.md](http://design-system.md) document. I made close to seven different prompts to try and convey the image I had in my mind with little success. My first design was focused on the preferences for style like wanting “dark colors” and “clear headings with hover effects” but the AI did not interpret these how I wanted, which was largely my fault. I then slowly added more specificity like the specific colors and fonts along with weirder and even more specific items like topographic contour lines with dashed trail imagery to help influence the rest of the application. That last part sadly was not incorporated properly, but I believe if I used a different AI tool like Claude design, I would be able to merge the two AI’s and have them create a beautiful website that followed the idea I had in my head.

## Part 4: Appendix

# Business Case — Hiking Trail Explorer

## 1. Problem / Opportunity

Finding a hiking trail, whether local or foreign, that can adequetly match a person's interests, experience level, and time can be hard. Trail information is often times spread across multiple websites and be inconsistent with it's level of detail. A hiker most often has to search through multiple sources and comb through the information to find the trail's length, difficulty, elevation gain, location, and POIs.

The app would provide a central web application where users can browse a collection of hiking trails and select an individual trail to view detailed information. The application would make it easier for users to compare trails and decide which one best fits their needs. Users could also have the ability to upload their own trail information to help improve the experience for others.

## 2. Proposed Solution

The proposed solution is a web application called **Hiking Trail Explorer**.

The application would display a collection of hiking trails that users can browse and search. When a user selects a trail, they would be taken to a detailed page containing information such as:

- Trail name
- Location
- Distance
- Difficulty level
- Elevation gain
- Estimated hiking time
- Trail description
- Points of interest
- Trail conditions
- Available amenities
- User rating

The initial version would focus on a limited collection of trails rather than attempting to include every hiking trail. This would keep the project manageable while providing a foundation that could be expanded in the future.

## 3. Options Considered

### Option A — Continue Using General Internet Searches

Users could continue searching multiple websites and applications to find hiking information.

**Advantages:**
- No development cost
- Large amount of information is already available
- Users can access many different sources

**Disadvantages:**
- Information is spread across multiple websites or requires reading long booklets from parks
- Information may be presented inconsistently
- Users may have difficulty comparing trails
- Finding specific information can take considerable time

### Option B — Hiking Trail Explorer

Develop a centralized application that organizes hiking trails and provides detailed information about each trail.

**Advantages:**
- Information is organized consistently
- Users can easily browse and compare trails
- Individual trails have dedicated detail pages
- The application can be expanded with additional features

**Disadvantages:**
- Requires development time
- Trail information would need to be maintained and updated
- The initial application would contain fewer trails than large existing services

### Recommended Option

**Option B — Hiking Trail Explorer** is recommended because it directly addresses the difficulty of finding and comparing hiking trails while remaining small enough to be practical for an initial web application.

## 4. Feasibility Analysis

### Operational Feasibility

The project is operationally feasible because hikers regularly need information about trails before deciding where to go. The application would use a straightforward interface that allows users to browse trails and select individual trails for more information. The demographic of hikers also would allow for easier use as most hikers are more than willing to help support a system like this. Users would not require specialized training to use the system.

### Technical Feasibility

The project is technically feasible using standard web development technologies. The initial prototype could use a small database containing trail information.

Potential technologies could include:

- HTML
- CSS
- JavaScript
- A relational database
- A web server/backend

The initial version would not require complex technologies or integrations. Additional features could be added later if the application is expanded.

### Economic Feasibility

The project is economically feasible because the initial application can be developed with relatively low costs. A prototype could use inexpensive or free development tools and a small amount of hosting and storage.

The primary benefits would come from reducing the amount of time users spend searching for trail information and making that information easier to understand and compare.

### Schedule Feasibility

A basic functional prototype could reasonably be completed within approximately **6–8 weeks** if the project is kept to a small collection of trails and core functionality.

## 5. Costs and Benefits

### Estimated Costs

| Cost | Estimated Amount |
|---|---:|
| Web application development | $500 |
| Initial trail information preparation | $200 |
| Hosting and domain | $100/year |
| Content maintenance and updates | $50/year |
| **Initial Cost** | **$800** |
| **Annual Operating Cost** | **$150** |

### Tangible Benefits

The application could provide measurable benefits by reducing the amount of time users spend searching for hiking information.

Estimated annual benefits:

| Benefit | Estimated Annual Value |
|---|---:|
| Reduced trail research time | $1,000 |
| Reduced effort spent comparing information | $500 |
| **Total Estimated Annual Benefit** | **$1,500** |

### Intangible Benefits

The application could also provide benefits that are more difficult to assign a specific dollar value to, including:

- Improved user experience
- Easier access to hiking information
- Convenient trip planning
- Consistent presentation of trail information
- Ability to save favorite trails
- Improved organization of trail information

### Three-Year Financial Estimate

Estimated three-year costs:

**$800 + ($150 × 3) = $1,250**

Estimated three-year tangible benefits:

**$1,500 × 3 = $4,500**

Estimated net benefit:

**$4,500 − $1,250 = $3,250**

Estimated ROI:

**($4,500 − $1,250) ÷ $1,250 × 100 ≈ 260%**

The estimated payback period would be approximately **6 months**.

These financial figures are estimates.

## 6. Priority and Urgency

The Hiking Trail Explorer should be considered a **medium-high priority** project.

The application would improve access to hiking information which would be convenient but is not a necessity. The project also has a manageable scope and could be developed as a relatively small web application. The project is not an emergency system, so delaying development would not create an immediate critical problem.

Potential risks include:

- Not having enough trail information to attract users
- Difficulty obtaining reliable trail data
- Scope becoming too large

These risks could be reduced by starting with a small number of trails and gradually expanding the application.

## 7. Recommendation

The recommended course of action is to proceed with the **Hiking Trail Explorer**.

## 8. Approval

| Role | Name | Date | Decision |
|---|---|---|---|
| Sponsor | __________________ | __________ | ☐ Go ☐ No-Go |


### Primary sources
- *Systems Analysis and Design*, 10th ed. (Cengage, 2017) — Ch. 2 "Analyzing the
Business Case" and Toolkit Part C "Financial Analysis Tools"

# Hiking Trail Explorer — Specification
 
> **How to use this template:** The specification is meant to be detailed before building anything and to represent the core "source of truth". It should be written for a non-technical author, but clear enough for an AI agent (or a team) to build from.
 
---
 
## 0. Constitution
 
Non-negotiable principles this product must never violate, regardless of feature.

| # | Principle | Why it exists |
|---|-----------|----------------|
| 1 | The application shall clearly identify trail information as informational and may not reflect current trail conditions. | Prevents users from treating the application as an official or guaranteed source of trail conditions. |
| 2 | The application shall not collect unnecessary personal information. | Protects user privacy and keeps the initial application simple. |
| 3 | Core trail browsing and viewing features shall be usable on both desktop and mobile devices. | Ensures the application is accessible to users on common devices. |

---
 
## 1. Problem & Intent
 
**Who is this for?**
The application is for hikers who want to find and compare hiking trails before deciding where to hike. It will be especially useful for users who want to compare trails based on multiple factors including: difficulty, distance, elevation gain, estimated hiking time, location, and other trail information.
 
**What problem do they have today?**
Hikers often have to search multiple websites to find information about hiking trails. Important information such as difficulty, distance, elevation gain, estimated hiking time, location, trail features, and photos may be spread across different websites. This makes it difficult and time-consuming to compare trails and determine which trail is appropriate. If somebody wants to do a quick day hike, this app will allow them to quickly browse the nearby trails and figure out which one would be the most appropriate.
 
**Why now / why us?**
I chose to create this app because there has been a surge of new hikers with the current generation and many would prefer to have a digital guide to plan trips. People commonly use online resources to plan hiking trips already, but trail information can be inconsistent or spread across multiple sources. The Hiking Trail Explorer will organize commonly needed trail information into one simple application, allowing users to search, filter, compare, and view trails without having to search multiple websites or park pamphlets.

**What does success look like?**
The application will be successful if users can find a trail that matches their preferences without needing to search multiple sources.
 
---
 
## 2. Scope
 
**In scope** 

- Provide a homepage with a navigation bar.
- Provide a group of hiking trails.
- Allow users to have a search function for trails.
- Give a filter option for various trail information.
- Allow users to select a trail and view its information.
- Display trail location, description, distance, elevation change, and difficulty.
- Display POI's on the trail or near it.
- Allow users to bookmark trails.
 
**Out of scope**

- Real-time GPS tracking.
- Active navigation.
- Emergency services.
- Payment capabilities.
- Messaging.
- Guaranteed real-time weather/trail conditions.
- A database containing every trail.
- Advanced mapping.
 
---
 
## 3. User Scenarios
 
Write each as a short story: who, what they're trying to do, what "done" looks like.
 
**Scenario 1: Find a suitable trail**
- Actor: Hiker looking for a trail.
- Trigger: The user wants to find a hiking trail that matches their experience level and is nearby.
- Steps:
  1. The user opens the Hiking Trail Explorer.
  2. The user selects the option to explore trails.
  3. The user searches or filters the available trails.
  4. The user reviews the basic information displayed for each trail.
  5. The user selects a trail.
  6. The application displays the trail's detailed information.
- Success outcome: The user finds a trail with information that matches their preferences.
- Failure outcome: No trails match the user's search or filter criteria, and the application displays a clear message.

**Scenario 3: Save a trail**
- Actor: Hiker who finds a trail they want to visit later.
- Trigger: The user finds a trail they are interested in.
- Steps:
  1. The user opens the trail's detail page.
  2. The user selects the bookmark option.
  3. The application changes the trail to a bookmarked state.
  4. The user can later identify that the trail has been bookmarked.
- Success outcome: The trail is clearly marked as bookmarked.
- Failure outcome: The bookmark action does not change the trail's state, and the user can continue using the application without losing the trail information.

**Scenario 4: Handle unavailable information**
- Actor: Hiker viewing a trail.
- Trigger: A trail does not have information available for a particular field.
- Steps:
  1. The user opens the trail detail page.
  2. The application checks which information is available.
  3. The application displays available information.
  4. The application displays an "Information unavailable" message for missing information.
- Success outcome: The user understands which information is available and which information is missing.
- Failure outcome: The application displays misleading or fabricated information.
 
---
 
## 4. Requirements (EARS notation)
 
Patterns:
- **Ubiquitous:** *The system shall [always do X].*
- **Event-driven:** *When [trigger], the system shall [response].*
- **State-driven:** *While [state], the system shall [response].*
- **Unwanted behavior:** *If [condition], then the system shall [response].*
- **Optional:** *Where [feature is present], the system shall [response].*

| ID | Requirement | Pattern |
|----|-------------|---------|
| R1 | The system shall display the primary navigation on all major pages. | Ubiquitous |
| R2 | The system shall display each trail's name, difficulty, distance, and location when that information is available. | Ubiquitous |
| R3 | The system shall allow users to select a trail from the trail collection to view additional information. | Ubiquitous |
| R4 | The system shall provide a way for users to return from a trail detail page to the trail collection. | Ubiquitous |
| R5 | Where additional trail information such as conditions, amenities, points of interest, ratings, or reviews is available, the system shall display that information. | Optional |
| R6 | When a user selects the "Explore Trails" option from the homepage, the system shall display the trail collection. | Event |
| R7 | When a user enters text into the trail search field, the system shall display trails that match the search text. | Event |
| R8 | When a user selects a difficulty filter, the system shall display trails matching the selected difficulty. | Event |
| R9 | When a user selects a distance filter, the system shall display trails matching the selected distance range. | Event |
| R10 | When a user selects a trail from the trail collection, the system shall display the trail's detail page. | Event |
| R11 | When a user selects the bookmark option, the system shall mark the selected trail as bookmarked. | Event |
| R12 | When a user returns to a previously bookmarked trail, the system shall preserve its bookmarked state during the supported application session. | Event |
| R13 | While a trail is bookmarked, the system shall visually indicate that the trail is bookmarked. | State |
| R14 | While trail information is unavailable, the system shall display an "Information unavailable" message for the missing information. | State |
| R15 | If a search produces no matching trails, then the system shall display a message indicating that no matching trails were found. | Unwanted behavior |


 
---
 
## 5. Acceptance Criteria
 
For each requirement, define the test that proves it's done. If you can't write a pass/fail test, the requirement is still too vague.
 
| Requirement | Test | Pass condition |
|-------------|------|-----------------|
| R1 | Open each major page | Primary navigation is visible and usable on each page. |
| R2 | Open a trail card with complete information | Trail name, difficulty, distance, and location are displayed. |
| R3 | Select a trail from the collection | The selected trail's detail page opens. |
| R4 | Open a trail detail page and select the return option | The user returns to the trail collection. |
| R5 | Open a trail containing optional information | Available optional information is displayed without preventing access to required trail information. |
| R6 | Select "Explore Trails" from the homepage | The trail collection is displayed. |
| R7 | Enter a search term | Trails matching the search term are displayed. |
| R8 | Select a difficulty filter | Only trails matching the selected difficulty are displayed. |
| R9 | Select a distance filter | Only trails within the selected distance range are displayed. |
| R10 | Select a trail from the collection | The trail detail page displays the selected trail. |
| R11 | Select the bookmark option | The selected trail changes to a bookmarked state. |
| R12 | Bookmark a trail, leave the detail page, and return to it | The trail remains identified as bookmarked during the supported session. |
| R13 | Bookmark a trail | A clear visual indicator shows that the trail is bookmarked. |
| R14 | Open a trail with missing information | The missing field displays "Information unavailable" or an equivalent message. |
| R15 | Search for a trail that does not exist | A clear "No matching trails found" message is displayed. |
 
---
 
## 6. Constraints & Non-Functional Requirements
 
- **Performance:** Main pages should load within a reasonable amount of time under normal internet conditions. Search and filtering should provide results without requiring a full page reload. Images and other assets should be appropriately sized.
- **Security/Privacy:** The initial version should not require users to provide sensitive personal information. Bookmark information may be stored locally in database. No passwords or sensitive account information are required for the prototype.
- **Accessibility:** Text should have sufficient contrast. Buttons and links should have descriptive labels. Images should include alternative text where appropriate. The application should support standard keyboard navigation and should not rely solely on color to communicate information.
- **Compliance/Legal:** Trail information and images should only be used when the application has permission or an appropriate source/license. The application shall state that trail information is for planning purposes and may not represent current trail conditions. The application shall not present itself as an emergency, rescue, or official trail-management service.
- **Budget/Timeline:** The initial prototype should remain within the estimated project budget of approximately \$800. Estimated recurring costs should remain close to $150 per year. The initial prototype should be achievable within approximately 6–8 weeks, with core browsing, searching, filtering, trail details, and bookmarking prioritized before optional features.
- 
---
 
## 7. Open Questions
 
Anything unresolved. Don't let AI or a builder guess silently — list it and get an answer before build starts.
 
| Question | Owner | Status |
|----------|-------|--------|
| What trails should be included in the initial trail database? | Project team | Resolved (T1, 2026-09-28): Creek's Edge Trail, Ninth Street Loop, Southeast Trail, Jackson Creek Trail, and Leonard Springs Nature Park Trail. |
| How many trails should be included in the first version? | Project team | Resolved (T1, 2026-09-28): five. |
| Should bookmarks persist after the browser is closed? | Project team | Open |
| Should users be able to sort trails by distance, difficulty, rating, or other attributes? | Project team | Open |
| What source will provide the trail information? | Project team | Resolved (T1, 2026-09-28): City of Bloomington Open Data "Park Trails & Paths" dataset, licensed under Open Data Commons PDDL 1.0; initial distances use sums of mapped trail-label segments. Difficulty is unavailable in this dataset and will not be guessed. |
| How frequently should trail condition information be updated? | Project team | Open |
| Should users be able to submit ratings or reviews? | Project team | Open |
| Should the application include a map in a future version? | Project team | Open |
| Should the trail collection use a list view, card view, map view, or a combination? | Project team | Open |
| Should users eventually be able to create accounts to synchronize bookmarks across devices? | Project team | Open |

---
 
## 8. Plan (derived from this spec — separate document once approved)
 
Once the spec above is approved, translate it into:
- **`plan.md`** — the approach and key decisions, each traced back to a requirement ID above
- **`tasks.md`** — atomic, ordered, checkable tasks derived from the plan
Do not skip from spec straight to a build without reviewing the plan first.
 
---
 
## 9. Approval
 
| Role | Name | Date | Signed off? |
|------|------|------|-------------|
| Spec owner | | | |
| Reviewer | | | |
 
---
 
### Primary sources this template draws on
- [GitHub Spec Kit](https://github.com/github/spec-kit) — open-source spec/plan/tasks toolkit
- [Spec-Driven Development methodology](https://github.com/github/spec-kit/blob/main/spec-driven.md) — GitHub's explainer
- [EARS notation](https://alistairmavin.com/ears/) — requirements syntax
- [Microsoft: Spec-Driven Development for AI-Native Engineering](https://developer.microsoft.com/blog/spec-driven-development-ai-native-engineering/)

# Plan — Hiking Trail Explorer

> Written after specification. Every decision here must trace back to a requirement ID.

## 1. Approach Summary

We will build a responsive web application that allows hikers to browse a collection of trails, search and filter available trails, and select an individual trail to view more information. The application will focus on helping users quickly compare trail difficulty, distance, elevation change, location, and points of interest. Users will also be able to bookmark trails, while optional information will be displayed only when it is available.

## 1.5 Tech Stack

- Frontend: HTML, CSS, and JavaScript; optional Bootstrap
- Backend/DB: Static JSON or JavaScript data for the initial trail collection; browser localStorage for bookmark information
- Hosting: GitHub Pages or Netlify
- Other services/APIs: None required for the core prototype

## 2. Key Decisions (ADRs)

| ADR # | Decision | Traces to (R#) | Alternatives considered | Why this one |
|---|---|---|---|---|
| ADR-00 | Use HTML, CSS, and JavaScript for the application | R1–R15 | React, Vue, or another frontend framework | The project has a limited first-version scope and straightforward interactions, so a simple stack reduces setup and implementation complexity. |
| ADR-01 | Store initial trail information in a static data file | R2, R3, R5–R10 | Hosted SQL database or external trail API | A static dataset is sufficient for the prototype and avoids unnecessary external infrastructure. |
| ADR-02 | Use client-side search and filtering | R7–R9 | Server-side search or database queries | The initial trail collection is expected to be small, so client-side filtering can provide immediate results without a full page reload. |
| ADR-03 | Use browser localStorage for bookmarks | R11–R13 | User accounts and cloud-based bookmark storage | Local storage avoids collecting personal information or requiring passwords. It does not support cross-device synchronization. |
| ADR-04 | Use a responsive collection of trail cards | R1, R2, R3, R5, R7–R9 | Map-first interface or table-only interface | Cards allow users to quickly scan trail names, difficulty, distance, and location while supporting desktop and mobile use. |
| ADR-05 | Use separate collection and detail views | R3, R4, R6, R10 | One long page containing all trail information | Separate views keep browsing simple and provide space for detailed information about a selected trail. |
| ADR-06 | Display optional information only when available | R5 | Require every trail to contain every optional field | The specification identifies conditions, amenities, points of interest, ratings, and reviews as optional, so the application should not imply that unavailable information exists. |
| ADR-07 | Keep GPS, active navigation, emergency services, payments, messaging, guaranteed live conditions, complete trail coverage, and advanced maps out of the first version | Scope limitations; R1–R15 | Include these features in version one | These features add complexity and external dependencies without being necessary to test the core browsing, filtering, detail, and bookmarking experience. |
| ADR-08 | Use approved images or image placeholders where images are included | R2, R3, R6 | Require every trail to have an image | This allows the application to remain usable when an image is missing and helps address image licensing and availability concerns. |

## 3. Components / Building Blocks

| Component | Purpose | Related requirements |
|---|---|---|
| Primary navigation | Provides access to the major application pages | R1 |
| Homepage | Introduces the application and provides the Explore Trails action | R1, R6 |
| Trail collection | Displays the available group of trails | R2, R3, R7–R9 |
| Search control | Allows users to search for trails using text | R7 |
| Trail-information filters | Allows users to narrow the trail collection using available trail information | R4, R8, R9 |
| Trail card | Displays available basic trail information and allows a user to select a trail | R2, R3, R10 |
| Trail detail page | Displays information for the selected trail, including location, description, distance, elevation change, difficulty, and available points of interest | R3, R5, R10, R14 |
| Trail data source | Stores the initial group of trail records and their available information | R2, R3, R5, R7–R10, R14 |
| Bookmark control | Marks a selected trail as bookmarked | R11–R13 |
| Bookmark state indicator | Visually identifies a bookmarked trail | R12, R13 |
| Missing-information message | Displays “Information unavailable” for missing trail information | R14 |
| No-results message | Informs users when a search returns no matching trails | R15 |
| Responsive layout | Supports core browsing and viewing on desktop and mobile devices | Constitution principle 3 |
| Informational disclaimer | Explains that trail information may not reflect current conditions and is not official or emergency guidance | Constitution principle 1; Compliance/Legal constraint |

## 4. Dependencies & Assumptions

- External services/tools needed:
  - Code editor
  - Modern web browser
  - GitHub Pages or Netlify for optional hosting
  - Approved trail information sources
  - Approved image sources, if images are used
  - Optional Bootstrap library
- Assumptions being made:
  - The initial trail collection will be small enough for client-side search and filtering.
  - The initial collection contains five source-backed trails—Creek's Edge Trail, Ninth Street Loop, Southeast Trail, Jackson Creek Trail, and Leonard Springs Nature Park Trail—plus ten clearly labeled fictional sample trails for testing.
  - The City of Bloomington Open Data "Park Trails & Paths" dataset is the approved source for the initial trail names, locations, and distances. Its catalog lists the Open Data Commons Public Domain Dedication and License (PDDL) 1.0. Distances are the sums of mapped segments for each trail label, rounded to three decimal places.
  - The required trail fields are name, difficulty, distance, and location. Difficulty is not available in the approved dataset and will remain unavailable unless a suitable source is confirmed; optional information will not be invented.
  - Trail information will be obtained from sources that permit reuse or will be rewritten as original sample data.
  - The application will not require user accounts or cross-device bookmark synchronization in the first version.
  - Bookmark information will be stored locally in the browser rather than in a remote database.
  - Some optional information may be unavailable for certain trails.
  - The first version will not provide guaranteed live weather or trail conditions, GPS tracking, active navigation, emergency services, payments, messaging, complete trail coverage, or advanced mapping.
  - Image permissions must be confirmed before adding images or public deployment; approved images or placeholders will be used as described in ADR-08.
  - The initial prototype budget is approximately $800, with recurring costs estimated near $150 per year.
  - The project is expected to be completed in approximately 6–8 weeks.

### T1 Dataset Confirmation

The initial five-trail selection and source were confirmed on 2026-09-28. Distances below are sums of the selected trail-label segments in the City dataset; these can differ from rounded totals shown on the City's trail summary page.

| Trail | Distance | Dataset location |
|---|---:|---|
| Creek's Edge Trail | 0.676 mi | Creeks Edge Trail Corridor |
| Ninth Street Loop | 0.196 mi | Rev Ernest D Butler Park |
| Southeast Trail | 0.285 mi | Southeast Park |
| Jackson Creek Trail | 1.374 mi | Goat Farm and Sherwood Oaks Park |
| Leonard Springs Nature Park Trail | 1.158 mi | Leonard Springs Nature Park |

Source: [City of Bloomington Open Data — Park Trails & Paths](https://data.bloomington.in.gov/Parks-Recreation/Park-Trails-Paths/s3cs-my2d). The dataset is identified as official and licensed under [Open Data Commons PDDL 1.0](https://opendatacommons.org/licenses/pddl/1-0/).

## 5. Risks

| Risk | Likelihood | Impact | Mitigation | Owner |
|---|---|---|---|---|
| Trail data is incomplete or inconsistent | High | Medium | Define required fields, validate sample records, and label unavailable information clearly | Development team |
| Trail information becomes outdated | High | High | Display the informational disclaimer, identify data sources, and avoid claiming that conditions are current | Project team |
| Image sources are unavailable or lack reuse permission | Medium | Medium | Use approved images, verify permissions, test image links, and provide placeholders when needed | Development team |
| Search and filters produce incorrect results | Medium | Medium | Test search and each filter separately, then test combinations using known sample data | Development team |
| Bookmarks do not persist as expected | Medium | Medium | Test localStorage and document that bookmarks are browser-based in the first version | Development team |
| Mobile users have difficulty browsing the application | Medium | Medium | Test desktop and mobile layouts, readable controls, keyboard navigation, and contrast | Development team |
| The generic filter requirement is interpreted too narrowly | Medium | Medium | Confirm which trail-information filters are required before implementation and document the decision | Project team |
| Project scope expands beyond the budget or timeline | High | High | Prioritize navigation, collection, search, filtering, details, points of interest, and bookmarks before advanced features | Project team |
| Users mistake the app for an official or emergency service | Medium | High | Display a clear disclaimer and avoid official-status, emergency, or guaranteed-current-condition claims | Project team |
| Usability testing does not identify important problems | Medium | Medium | Test the primary flows with at least two additional observers and record 2–3 findings | Project team |

## 6. Sequencing

1. Confirm the interpretation of the generic trail-information filter requirement and finalize required trail fields.
2. Select the initial trail sources, number of trails, and image sources. Verify permissions and data consistency.
3. Create and validate the sample trail dataset, including records with unavailable optional information.
4. Build the shared navigation, homepage, About/information content, and responsive page structure.
5. Build the trail collection and trail cards with available name, difficulty, distance, and location information.
6. Implement search and the selected trail-information filters. Add the no-results message.
7. Build the trail detail page with location, description, distance, elevation change, difficulty, and available points of interest.
8. Implement bookmarking, the bookmarked state indicator, and browser-local storage.
9. Add missing-information handling, accessibility checks, responsive improvements, and the informational disclaimer.
10. Conduct usability testing with at least two additional observers.
11. Test the acceptance criteria, correct defects, review scope and costs, and prepare optional deployment.

## 7. T14 Scope, Cost & Optional Deployment Review

Reviewed 2026-09-28 after acceptance-criteria testing.

### Scope

- The application remains focused on the planned trail collection, search, filters, trail details, and browser-local bookmarks.
- The exclusions in ADR-07 remain out of scope: GPS tracking, active navigation, emergency services, payments, messaging, guaranteed live conditions, complete trail coverage, and advanced mapping.
- The ten records named "Sample Data Trail" are clearly identified as fictional test data; they do not claim to expand real trail coverage. The original five records remain tied to the approved City of Bloomington dataset described above.

### Cost and timeline

- The planning estimates remain approximately $800 for the prototype, $150 per year in recurring costs, and 6–8 weeks to complete.
- The project documents do not include an itemized actual or forecast cost breakdown, selected hosting plan, or evidence that actual costs are within those estimates. These figures remain targets, not verified totals.
- The app does not require a backend, database, or application API for its core flows. The page does load Vue, Vue Router, Bootstrap, Bootstrap Icons, and Papa Parse from CDNs, and one sample image from an external host; those assets depend on network and third-party availability. Hosting/CDN charges have not been priced in this review.

### Optional deployment readiness

- The app uses static HTML, CSS, JavaScript, CSV data, and hash-based routes, which is compatible in principle with the static hosting options listed in this plan.
- No hosting provider has been selected and no deployment configuration or workflow is present. The app has only been checked in a local browser preview; it has not been tested at a deployed URL.
- Before any public deployment, select a host, verify its cost against the budget, test the deployed asset and CSV paths (including a project subpath if applicable), and confirm that external CDN assets and the user-approved sample image are available.
- Keep the informational disclaimer in place, do not present the app as official or emergency guidance, and preserve the fictional sample-data labels. Do not imply that sample ratings, reviews, amenities, or conditions describe real trails.

**Review outcome:** The current prototype is suitable for optional static-host evaluation, but public deployment and budget compliance are not yet confirmed. The project owner should choose a host, verify actual costs and asset permissions, test the hosted app, and complete the pending approvals in Section 8 before public launch. No deployment was performed as part of T14.

## 8. Review & Approval

| Reviewer | Date | Approved? |
|---|---|---|
| Project owner/student | TBD | Pending |
| Instructor or teammate | TBD | Pending |

**Gate:** Do not generate tasks until this plan is done.

## Quick Self-Check

- [x] Every ADR cites one or more requirement IDs or clearly identifies a scope/constitution constraint.
- [x] Every component maps to at least one requirement or constitutional principle.
- [x] Every risk includes a mitigation.
- [x] Sequencing places data decisions and uncertain requirements before implementation.
- [ ] Section 8 is signed off.

# Tasks — Hiking Trail Explorer

> Derived from the plan document. Each task is small, checkable, and traceable to a requirement, ADR, constitutional principle, or documented constraint.

## Task List

| ID | Task | Traces to (R# / ADR#) | Depends on | Status |
|----|------|--------------------------|------------|--------|
| T1 | Confirm the initial trail dataset, required fields, and approved source permissions | ADR-01, ADR-08, R2, R5, R7-R10, R14, Constitution 1, Compliance/Legal constraint | — | Done |
| T2 | Create the sample trail dataset with required fields and placeholder values for missing optional data | ADR-01, ADR-06, ADR-08, R2, R5, R10, R14 | T1 | Done |
| T3 | Build the shared primary navigation and homepage flow for the Hiking Trail Explorer | R1, R6, ADR-05 | T2 | Done |
| T4 | Build the responsive trail collection layout and trail cards with name, difficulty, distance, and location | R2, R3, ADR-04, ADR-05 | T2 | Done |
| T5 | Implement client-side text search across the trail collection | R7, ADR-02 | T4 | Done |
| T6 | Implement difficulty and distance filters and display the no-results message when needed | R8, R9, R15, ADR-02 | T4, T5 | Done |
| T7 | Build the trail detail page with required information, return navigation, and available optional details | R3, R4, R5, R10, ADR-05, ADR-06 | T4 | Done |
| T8 | Add missing-information handling for unavailable fields and the informational disclaimer | R5, R14, Constitution 1, Compliance/Legal constraint | T7 | Done |
| T9 | Implement trail bookmarking with browser localStorage and clear visual bookmark states | R11, R12, R13, ADR-03 | T7 | Done |
| T10 | Add loading, error, accessibility, and responsive refinements for the full trail browsing flow | R1-R15, Constitution 3, Performance, Accessibility | T5, T6, T7, T9 | Done |
| T11 | Validate keyboard access, contrast, and mobile usability across the core screens | Constitution 3, Accessibility, R1, R3, R4, R13 | T10 | Done |
| T12 | Run usability testing with at least two observers and record findings for improvement | Risk: Usability testing does not identify important problems, Constitution 3, R1-R15 | T10 | Done |
| T13 | Execute acceptance-criteria testing, correct defects, and re-check the affected trails flow | R1-R15, Definition of Done | T11, T12 | Done |
| T14 | Review the final application scope, expected costs, and readiness for optional deployment | ADR-07, Budget/Timeline, Constitution 1, Scope limitations | T13 | Done |

**Status values:** Not started · In progress · Done · Blocked

## Definition of Done (applies to every task)

- Matches its linked requirement's acceptance criteria in the specification.
- Reviewed by a human before marked done
- No task marked done without a test passing

## Blocked / Questions

| Task | Blocker | Raised | Resolved |
|------|---------|--------|----------|
| T1 | Trail selection, required fields, and licensed data source were confirmed. The separate bookmark-persistence question remains open and is not a T1 dependency. | 2026-09-20 | 2026-09-28 |
| T11 | Resolved: the Cream-on-Clay button/hover text contrast and search/filter focus contrast were corrected and re-tested. Ratios are 5.01:1, 4.52:1, and 8.70:1 respectively. | 2026-09-28 | 2026-09-28 |

## Quick Self-Check Before You Start Building

- [ ] Every task traces to a requirement, ADR, constitutional principle, or documented constraint.
- [ ] Every task is small enough to finish in under a day.
- [ ] Order matches the plan's sequencing, with data decisions and uncertain requirements first.
- [ ] No task is vague enough that "done" is a judgment call.
- [ ] Blocked items are logged, not silently skipped.

# Design System — Hiking Trail Explorer

## 1. Brand Principles

Hiking Trail Explorer should feel adventurous, grounded, natural, and welcoming. The visual identity is inspired by topographic maps, hiking trails, natural landscapes, and trail markers, using deep pine greens with warm sand, cream, and clay accents. The interface should feel polished and modern while retaining a sense of exploration and the outdoors.

## 2. Color Palette

| Name | Hex | Use |
|------|-----|-----|
| Pine Dark | #16302A | Main application background, dark navigation areas |
| Pine | #1F3D31 | Primary surfaces, hero sections, primary brand color |
| Moss | #5C7A5A | Secondary accents, supporting text, links, subtle highlights |
| Sand | #E7DCC0 | Trail lines, secondary highlights, light accents |
| Clay | #C0602E | Primary action accents, trail markers, destination pins, important highlights |
| Cream | #F5F1E5 | Main text, headings, light backgrounds when needed |

The application should primarily use Pine Dark and Pine as its dark foundation. Cream should be the primary text color rather than pure white to maintain the warm outdoor aesthetic established by the landing page.

Clay should be used sparingly for important interactive elements and visual landmarks. Sand and Moss should provide secondary contrast and supporting visual hierarchy.

Topographic lines may use a darker or lighter variation of the Pine palette with reduced opacity, similar to the landing page.

## 3. Typography

| Role | Font | Size | Weight |
|------|------|------|--------|
| Display / Wordmark | Fraunces | 48–76px | Medium/Semibold |
| Heading 1 | Fraunces | 36px | Semibold |
| Heading 2 | Fraunces | 26px | Semibold |
| Heading 3 | Fraunces | 21px | Medium |
| Body | Work Sans | 16px | Regular |
| Navigation | Work Sans | 15–16px | Medium |
| Small / Supporting Text | Work Sans | 14px | Regular |

Use **Fraunces** for major headings and brand-oriented text. Its warm serif appearance reinforces the outdoor, editorial character of the landing page.

Use **Work Sans** for navigation, buttons, forms, trail information, descriptions, filters, and other interface elements.

Do not introduce additional font families unless there is a documented reason.

## 4. Logo Usage

- File(s): '/docs/design/reference/hiking-trail-explorer-logo-hte.png'
- The primary wordmark should use the Fraunces typeface and Cream coloring when displayed against dark Pine backgrounds.
- The logo should retain the visual relationship between the hiking/trail imagery and the wordmark established by the landing page.
- Do NOT stretch, distort, rotate, or arbitrarily recolor the logo.
- Do NOT place the logo on visually busy backgrounds where it becomes difficult to read.
- Maintain adequate clear space around the logo.
- The topographic-line and trail imagery may be used as supporting brand elements, but should not interfere with logo readability.

## 5. Spacing & Grid

- Base unit: 8px
- Grid/columns: Responsive 12-column grid, maximum content width of approximately 1200px.
- Standard spacing scale: 8 / 16 / 24 / 32 / 48px
- Major page sections should generally use 48px or more of separation.
- Related content should use 8–16px spacing.
- Cards and information sections should use consistent internal padding.
- Mobile layouts should reduce horizontal spacing while maintaining the same spacing hierarchy.
- Avoid arbitrary spacing values when an existing spacing value from the scale can be used.

## 6. Core Components

| Component | Rules |
| ----------- | ------- |
| Button (primary) | Clay (#C0602E) background with Cream text, 8px rounded corners, medium Work Sans weight, and a noticeable hover state that becomes slightly lighter/brighter. |
| Button (secondary) | Pine surface with Sand or Cream text and a subtle border. Use 8px rounded corners and a Moss or Sand hover accent. |
| Button (text/link) | Cream or Sand text with Clay or Moss hover state. Avoid unnecessary borders or backgrounds. |
| Card | Pine (#1F3D31) or a slightly lighter Pine surface, rectangular shape with approximately 12px corner radius, subtle border, and consistent internal padding. |
| Trail Card | Rectangular card containing the trail name, difficulty, distance, location, and available summary information. Hovering should brighten the surface and/or reveal a subtle Clay or Moss accent. |
| Search Result | Rectangular trail listing using the same Trail Card styling. Results should have consistent spacing and a clear visual hover state. |
| Form Field | Dark Pine/Pine Dark background, Cream text, subtle Sand/Moss border, 8px rounded corners, and a Clay or Moss focus state. |
| Search Bar | Prominent dark field with Cream text, clear placeholder text, rounded corners, and a visible focus state. |
| Filter Control | Dark Pine surface with Cream text. Selected controls should use Clay or Moss to clearly communicate their active state. |
| Navigation | Pine Dark or Pine background with Cream text. Active navigation items should use Sand or Clay as an accent. Navigation links should visibly change when hovered. |
| Bookmark | Use a recognizable bookmark icon. Unselected bookmarks should use Sand or Moss; selected bookmarks should use Clay. Hovering should provide a clear visual change. |
| Trail Detail Section | Use clear Fraunces headings for sections such as Description, Distance, Difficulty, Elevation, Location, and Points of Interest. Use Work Sans for supporting information. |
| Trail Marker | Clay may be used for trailhead or destination markers, reinforcing the destination-pin imagery from the landing page. |
| Topographic Background | Use subtle contour lines as a decorative background element on selected pages or hero sections. Lines should remain low-contrast so they do not interfere with content. |
| Hover State | All interactive cards, buttons, navigation items, links, and controls should visibly respond to hovering through changes in brightness, background, border, text, or accent color. Avoid excessive animations. |

Buttons should be rounded, while trail information cards and search-result listings should remain primarily rectangular to provide a structured information-dense layout.

Interactive elements should feel responsive without relying on large animations.

## 7. Voice & Tone

- Tone: Friendly, adventurous, informative, and concise.
- Use language that encourages exploration without being overly promotional.
- Avoid corporate or overly technical terminology in user-facing content.
- Button labels should clearly describe the action, such as:
  - "Explore Trails"
  - "View Trail"
  - "Search Trails"
  - "Clear Filters"
  - "Bookmark Trail"
- Trail information should be presented directly and clearly.
- Error messages should explain what happened and provide a useful next step when possible.
- Use "Information unavailable" when optional trail information is not available.
- The product should feel like a helpful trail guide rather than a social media platform.

## 8. Accessibility Standards

- Minimum contrast ratio: 4.5:1 for normal body text and 3:1 for large text and graphical interface elements.
- Standard to meet: WCAG 2.1 AA.
- Cream text should be preferred over low-contrast green or gray text on dark backgrounds.
- Do not communicate important information through color alone.
- Interactive elements must have visible hover and keyboard focus states.
- Buttons and controls must have descriptive labels.
- Images that communicate meaningful information should include appropriate alternative text.
- Headings must follow a logical hierarchy.
- Form controls must have associated labels.
- The application must remain usable on desktop and mobile screen sizes.
- Decorative topographic lines must not reduce the readability of foreground content.
- Text placed over imagery or decorative backgrounds must maintain sufficient contrast.

## 9. Version & Change Log

| Version | Date | Change | Approved by |
|---------|------|--------|--------------|
| 1.0 | | Initial version | Ben Anderson |

---

**Referenced by:** spec.md Section 6 (Constraints — Branding), Design step of each project.
