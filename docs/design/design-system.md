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