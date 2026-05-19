# WEB 001: Single Page Student Project Showcase Website Frontend Only

*Category:* Web Development  
*Timeline:* 3 to 4 Days

## Context

We are building a lightweight Student Project Showcase website that can be shared publicly as a simple portfolio style showcase for student work.

This is an MVP validation project intended to test the format and gather feedback. The website should feel modern, clean, and easy to browse while remaining technically simple and fully frontend only.

The goal is not to create a large production platform or web application. We only need a polished single page responsive showcase website displaying student project cards loaded from a provided static JSON file.

The final website should work smoothly on both desktop and mobile devices and should be easy to open locally in a browser or deploy as a static frontend site.

Reference website inspiration:

https://projexa.ai/showcase/

## Requirements

Build a responsive single page showcase website containing the following sections and functionality.

### Required Sections

1. Hero section introducing the student showcase

2. Header with navigation anchor links

3. Project showcase grid

4. Category filter section

5. Footer with basic information

### Project Grid Requirements

1. Display project cards dynamically using the provided JSON data.

2. Project cards must not be manually hardcoded individually.

3. Each project card must display:
   * Project title  
   * Category tag  
   * Short description or preview text

4. Project descriptions may be truncated consistently for card previews if needed.

5. Cards must appear in a clean responsive grid layout.

6. Grid spacing and alignment must remain visually consistent across screen sizes.

7. Cards must remain readable on both desktop and mobile screens.

8. No broken images, missing fonts, or missing asset references.

### Filtering Requirements

1. Category filter buttons or tabs must be included.

2. Categories may be generated dynamically from the JSON data if available.

3. Filtering must work entirely on the client side.

4. Clicking a category filter should:
   * Show matching projects  
   * Hide non matching projects  
   * Update immediately without page reload

5. Include an “All Projects” filter option.

6. Filter buttons must remain readable and usable on mobile screen sizes without overlap issues.

### Layout and Navigation Requirements

1. Include a simple top header navigation.

2. Navigation links must scroll to page sections using anchor links.

3. Smooth scrolling behavior must work on both desktop and mobile browsers.

4. All navigation links and anchor links must function correctly.

5. Layout must remain responsive across:
   * Desktop screens  
   * Tablet screens  
   * Mobile screens

6. Layout must remain functional at a minimum screen width of 320px.

7. Website must avoid:
   * Horizontal scrolling  
   * Overlapping elements  
   * Broken card layouts  
   * Unreadable text scaling

### Visual Style Requirements

1. Use clean modern typography.

2. Typography must remain readable and visually consistent throughout the page.

3. Maintain consistent spacing and alignment throughout the page.

4. Project cards should maintain consistent padding and spacing.

5. Sections should have clear visual separation.

6. Use readable colour contrast between text and background elements.

7. Overall presentation should feel modern, lightweight, and professional.

8. Default browser styling should not be used without customization.

### Accessibility and Usability Requirements

1. Use semantic heading structure where appropriate.

2. Buttons and navigation links must remain clearly clickable on desktop and mobile devices.

3. Text contrast should remain readable across all sections.

4. Interactive elements must remain visually distinguishable from non interactive content.

## Technical Requirements

1. Frontend only implementation.

2. No backend usage.

3. No database integration.

4. No CMS setup.

5. No authentication systems.

6. No admin panel functionality.

7. No API integrations.

8. All project data must remain static.

9. Data must load from the provided JSON file.

10. Filtering must remain fully client side.

11. Website must function locally without requiring backend setup.

12. Website must not produce visible console errors during normal browser usage.

13. Avoid unnecessarily heavy dependencies or excessive animation libraries.

14. Assets must remain lightweight and suitable for fast loading.

### Browser Compatibility

The website must function correctly on the latest versions of:

1. Google Chrome

2. Microsoft Edge

3. Mozilla Firefox

4. Safari

### Allowed Tech Stack

Any of the following approaches are acceptable:

1. Framer

2. Webflow

3. HTML CSS JavaScript

4. React

5. Lightweight frontend frameworks

6. Static site generators

The final result must remain a static frontend website regardless of implementation method.

## Data Source Requirements

The project data file will be provided in:

`/resources/student_projects_showcase.json`

Google Drive reference:

https://drive.google.com/file/d/1zjIXhU2tvXNqKLtkZTxdhmeDm8b7MO1n/view?usp=sharing

The JSON file will contain:

1. Project titles

2. Categories

3. Descriptions

4. Team names

5. Student member names

6. Tech stacks

This JSON file is the only required data source for the website.

## Deliverables

Deliver one complete frontend project containing:

1. Fully working single page responsive website

2. Project cards populated dynamically from the provided JSON data

3. Working client side category filtering

4. Responsive mobile and desktop layouts

5. Smooth scrolling navigation

6. All frontend source files required to run the project locally

### Optional Deliverables

1. Live preview deployment link using platforms such as Vercel or Netlify

2. README or setup instructions

## File Naming and Organization

Suggested structure:

`/assets`

`/resources`

`/styles`

`/scripts`

`/components`

The provided JSON file should remain inside:

`/resources/student_projects_showcase.json`

Suggested naming examples:

1. `index.html`

2. `styles.css`

3. `main.js`

4. `projects.js`

Use clear and consistent lowercase file naming.

## Scope Boundaries

### DO

1. Build a clean responsive frontend showcase page.

2. Use the provided static JSON data.

3. Create client side filtering functionality.

4. Implement responsive layouts and smooth scrolling.

5. Deliver production ready frontend files.

6. Maintain consistent typography and spacing across all sections.

### DO NOT

1. Backend development

2. Hosting setup

3. Database integration

4. Authentication systems

5. User accounts

6. CMS implementation

7. API integrations

8. Admin dashboards

9. Server side rendering requirements

10. Multi page website expansion outside listed scope

11. Dark or light mode system requirements unless included optionally

## Revision Policy

Up to 1 revision round after initial delivery.

A revision is defined as:

1. Spacing adjustments

2. Typography refinements

3. Layout refinements

4. Responsiveness fixes

5. Filter interaction adjustments

6. Styling improvements

7. Minor content positioning updates

Major redesigns or rebuilding using a different framework are outside project scope.

## Reference Materials

Reference website inspiration:

https://projexa.ai/showcase/

### How to Use the Reference

1. Use the reference for layout inspiration, spacing quality, section hierarchy, and modern presentation style.

2. Exact visual duplication is not required.

3. Maintain a similarly clean and minimal showcase structure.

4. Focus on readability and project discoverability.

5. Use responsive card layouts and clear category separation similar to the reference.

## Delivery Terms

Expected delivery: 3 to 4 business days from project acceptance.

Estimated workload includes:

1. Frontend page setup

2. Responsive layout implementation

3. JSON integration

4. Project card rendering

5. Filter functionality

6. Responsive testing

7. Minor revision adjustments