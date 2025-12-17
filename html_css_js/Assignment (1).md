# Frontend Project Handbook

## Project List
## 1) GitHub User Finder

A small app that fetches public GitHub user data and displays profile info, repos, and follower counts.

- Fetch without async: fetch().then().catch()
- DOM updates: createElement, textContent, appendChild
- Events: input, click
- Error handling: 404 users, rate limits
- Minimal CSS layout/grid
- API: `https://api.github.com/users/{username}`
- Interface description (extended):
    - Full-page layout with a sticky top bar containing the app logo/title, a theme toggle (light/dark stored in localStorage), and a small “Last searched user” label that auto-updates.
    - The search section includes: username input, “Search” button, and a small “Search history” dropdown listing last 5 users (stored in localStorage) that auto-fills when selected.
    - Main profile area designed as a responsive two-column layout:
        - Left column shows avatar (large circle), name, username, location, join date, and a “Profile on GitHub” button.
        - Right column shows follower/following/repo counts in three stat cards and a bio section with truncation/“Read more” behavior.
    - Below, a tabbed interface with tabs like “Repositories”, “Pinned Repos”, “Gists”; each tab shows a different list, with per-page pagination (“Next/Prev”) and a loading skeleton when changing pages.
    - A toast notification system using setTimeout that shows brief messages (e.g., “User loaded successfully”, “User not found”) and auto-hides after a few seconds.
    - Session-based welcome banner (using sessionStorage) that appears only once per session with a short explanation of how to use the tool.


## 2) Public Quotes Viewer

Displays random quotes from a public API with author filtering and copy-to-clipboard.

- Fetch without async (GET)
- DOM manipulation and filtering
- Clipboard API (navigator.clipboard)
- Buttons and event listeners
- Basic state (current quote)
- API: `https://api.quotable.io/random`
- Interface description (extended):
    - Split-screen layout: left side shows the current quote card; right side shows “Favorites” and “History” lists.
    - Quote card includes quote text, author, tags, a “New Quote” button, a “Copy” button, and a “Favorite” toggle icon. Favorite quotes persist via localStorage and show a small badge.
    - Tag filter bar at the top with multiple tag chips (e.g., “inspirational”, “wisdom”, “life”) that can be selected/deselected; selected tags are saved in localStorage as user preference.
    - History pane lists the last 10 quotes viewed in this session (sessionStorage), with a small “Restore” button on each to bring it back to the main card.
    - A subtle auto-rotate mode: when enabled via a toggle, setInterval fetches a new quote every X seconds, with a visible countdown timer and a progress bar below the card.
    - A settings modal (accessible via small gear icon) where learners can implement options like rotation speed, max history length, and whether to show author images (static placeholders).


## 3) Simple Weather Lookup

Fetches current weather by city and renders icon, temperature, and condition.

- Fetch without async + query params
- Form handling and validation
- Conditional DOM rendering
- Loading and error states
- Responsive card UI
- API: `https://api.open-meteo.com/v1/forecast?latitude=..&longitude=..&current_weather=true`
- Interface description (extended):
    - Multi-section layout: top search bar with “Saved Cities” dropdown, main current-weather card, and a 24-hour mini timeline area.
    - Search form with city input, “Use my location” button (geolocation API), and a “Save city” star icon; saved cities are persisted in localStorage and appear as selectable chips.
    - Current-weather card shows temperature, condition, feels-like, wind, humidity, plus a large weather icon and dynamic background gradient based on temperature and time of day.
    - A horizontal scrollable hourly forecast strip showing temperature and icon for each hour, implemented with a smooth scrolling container and subtle CSS transitions.
    - A “Last updated” timestamp that refreshes every time a new call is made, with a small auto-refresh toggle driven by setInterval.
    - Error banner that slides down from the top on invalid city or network errors and auto-hides after a few seconds using setTimeout.


## 4) News Headlines Ticker

Pulls top headlines and animates a horizontal ticker with clickable links.

- Fetch without async (list rendering)
- DOM updates and link targets
- CSS animations (marquee-like)
- Interval/timeout for cycling
- Debounced refresh
- API (needs free key): `https://www.thenewsapi.com/` or `https://newsapi.org/`
- Interface description (extended):
    - Full-width dashboard: sticky header with logo, category/region dropdowns, and a “Refresh every X minutes” slider configured via setInterval.
    - Top ticker bar with smooth scrolling headlines; includes “Pause/Play” button and a small indicator of currently selected category.
    - Main body shows headlines in cards arranged in a responsive grid, with image, title, source, published time (relative, e.g., “2h ago”), and a “Read later” bookmark icon.
    - “Read later” items stored in localStorage and accessible from a dedicated sidebar panel that slides in/out using CSS transitions.
    - A “breaking news” area that highlights articles with a specific tag or from a chosen source, with timed auto-highlight animations that use setTimeout to cycle.
    - User preference for theme (compact vs comfortable layout) stored in cookies to demonstrate cookie usage.


## 5) Currency Rate Viewer

Gets exchange rates and converts between two currencies with live calculations.

- Fetch without async (rates endpoint)
- Select inputs and change events
- Basic math and rounding
- DOM updates on input
- Edge cases (same currency)
- API: `https://api.frankfurter.app/latest`
- Interface description (extended):
    - Two-panel interface: left side for simple conversion, right side for a small “Rate Insights” section.
    - Converter panel contains “From” and “To” currency selectors, an amount input, and instant conversion output that updates on input change using debouncing.
    - A mini chart-like visualization (simple bars created with divs) that shows how the selected currency compares to 3–4 major currencies for the current day.
    - A “Conversion history” list below the converter showing last N conversions (amount, from, to, result) stored in localStorage, with a “Clear history” button.
    - Option to set a “default currency pair” (e.g., INR ↔ USD) that auto-loads on refresh (using localStorage or cookies).
    - A small “Rate auto-refresh” toggle that, when enabled, uses setInterval to re-fetch rates every few minutes and briefly highlights updated values with an animation.


## 6) Movie Search Grid

Searches movies by title and shows posters, year, and ratings in a grid.

- Fetch without async (search endpoint)
- Debounce input search
- Grid layout with CSS
- Modal or card expansion
- “No results” handling
- API (needs free key): `http://www.omdbapi.com/?apikey=YOUR_KEY&s=batman`
- Interface description (extended):
    - Hero-style header with background image, big title, search input, advanced search toggle (year, type dropdown).
    - Result section with infinite-scroll or “Load more” grid, each card having poster, title, year, type, and a favorite star icon. Favorites persist via localStorage and appear in a separate “My List” tab.
    - Clicking a card opens a modal with a loader first, then detailed info (rating, genre, runtime, plot, actors) fetched from the full movie endpoint; includes a close button and keyboard escape support.
    - A filter bar above the grid for rating range, year range (custom slider UI), and type; filters update the visible cards without extra API calls.
    - Recent searches bar showing last 5 search queries stored in sessionStorage, each clickable to re-run that search.
    - A “watch later” countdown concept: learners can let users set a reminder time for a movie using setTimeout (just UI feedback, no real notifications).


## 7) Dictionary Lookup

Looks up word definitions and phonetics with example sentences.

- Fetch without async (dictionary API)
- Input + submit handling
- DOM list rendering
- Audio playback for pronunciation
- Error and “not found” cases
- API: `https://dictionaryapi.dev/`
- Interface description (extended):
    - Three main sections: search bar, results area, and a “Recently searched” sidebar.
    - Results area shows word, phonetic, audio icon, and multiple collapsible sections: “Definitions”, “Examples”, “Synonyms”, “Antonyms” (if available). Each section can expand/collapse to keep the page tidy.
    - A “Word of the Day” banner at the top, which automatically loads a random word on page load and updates once per day using localStorage and date comparison.
    - Recently searched words stored in localStorage, displayed as clickable list items; clicking loads that word again.
    - A simple “study mode” toggle that uses setInterval to automatically rotate through recently searched words, with a countdown and ability to pause/resume.
    - Small theme preference (font size, serif vs sans-serif) saved in cookies to give learners practice with cookie handling.


## 8) Image Gallery (API)

Displays paginated images from a free image API with load-more and basic filtering.

- Fetch without async + pagination
- DOM virtualization basics (append vs replace)
- IntersectionObserver or button load-more
- Skeleton loaders
- Simple filter by keyword
- API (needs free key): `https://api.unsplash.com/search/photos?query={term}&client_id=YOUR_KEY`
- Interface description (extended):
    - Full-page gallery with a search bar, suggested tag buttons, and a filter row for orientation (portrait/landscape), color, and sort order.
    - Masonry or uniform grid with hover overlays showing photographer name, likes, and a “Save” heart icon. Saved images go into a “Favorites” drawer that slides from the side and persists via localStorage.
    - Pagination handled by a “Load more” button and an optional infinite scroll mode toggle; when infinite scroll is on, IntersectionObserver triggers loading and shows a loading spinner at the bottom.
    - A detail overlay with a dark backdrop showing large image, description, photographer link, and a “Download” button (just linking to provided URL).
    - A “Slideshow” mode that, when activated, cycles through current search results automatically using setInterval, with play/pause and next/previous buttons.
    - User preference for grid size (small/medium/large thumbnails) stored in localStorage and applied on page load.


## 9) Minimal To-Do with Persistence

Classic to-do app with localStorage persistence and simple filters.

- DOM CRUD (add, toggle, delete)
- localStorage get/set
- Filter views (all/active/done)
- Event delegation
- Basic CSS states
- API: not required (optional seed): `https://jsonplaceholder.typicode.com/todos`
- Interface description (extended):
    - Three-column layout on large screens: left sidebar for lists (Work, Personal), center for tasks, right for task details/notes; collapses to single-column on mobile.
    - Each list in the sidebar can be created/renamed/deleted; lists stored in localStorage, with current active list highlighted.
    - Task items support due dates, priority (low/medium/high color labels), and optional description shown in the right panel when selected.
    - A small progress bar at the top showing completion percentage of the active list, animated when tasks are toggled.
    - “Clear completed” button and a settings modal where the user can enable “Auto-archive completed” using setTimeout (e.g., completed tasks fade out after a delay).
    - Optional “Session summary” panel (sessionStorage) that shows how many tasks were completed in current session and time spent (using timestamps and setInterval to track).


## 10) Link Checker Tool

Fetches a list of URLs and reports their HTTP status codes in a table.

- Fetch without async (HEAD or GET)
-  error handling
- Table DOM construction
- Status color coding
- Input of URLs (textarea)
- API: uses user-provided URLs; for testing, `https://jsonplaceholder.typicode.com/posts`
- Interface description (extended):
    - App shell with left-side input panel, right-side results panel, and a top toolbar containing presets and history.
    - Input area includes: multi-line textarea, “Import sample URLs” button (loads a predefined set), and “Run Check” button.
    - Results table with sortable columns (URL, Status Code, Status Text, Response Time ms). Clicking on column headers sorts the table.
    - Visual badges or icons for status groups (OK, Redirect, Client Error, Server Error), plus a filter row to show/hide certain groups.
    - A small “History” tab that shows past runs (timestamp + how many URLs) stored in localStorage; clicking a history entry reloads that set into the textarea.
    - Progress indicator that updates as each URL completes, with a timed snackbar notification when the whole batch is done.


## 11) JSON Placeholder Admin

CRUD-like UI using JSONPlaceholder to simulate posts: list, view, add, edit, delete.

- Fetch without async (GET/POST/PUT/DELETE)
- Form binding and validation
- Table/list rendering
- Optimistic UI updates
- Error rollbacks
- API: `https://jsonplaceholder.typicode.com/`
- Interface description (extended):
    - Full admin dashboard layout with top navigation (Posts, Users, Settings) and left sidebar (filters, search). Focus mostly on the Posts section.
    - Posts list as a table with search box, filter by userId, and pagination controls at the bottom. Pagination state saved in sessionStorage.
    - A combined “Create/Edit Post” form with validation messages, character counters, and a “Draft autosave” feature using localStorage + setInterval (autosave every few seconds).
    - Clicking a post opens a detailed view with title, body, fake author info, and a comments section that can be lazily loaded on demand via another fetch().
    - Toast notifications for actions like create/update/delete with auto-hide via setTimeout.
    - A simple settings panel where admin can toggle “compact table”, “show comments by default” etc., stored in localStorage or cookies.


## 12) Habit Tracker (Calendar)

Track a daily habit with a simple monthly calendar view and streaks in localStorage.

- Calendar generation logic
- Click to toggle day complete
- localStorage persistence
- Streak computation
- Minimal responsive grid
- API: not required (fully local)
- Interface description (extended):
    - Multi-habit support: sidebar listing multiple habits (e.g., Drink Water, Exercise), each with its own color and calendar; active habit highlighted, stored in localStorage.
    - Main calendar view shows month grid with color-coded dots or filled cells for completion; includes hover tooltips showing date and note for that day.
    - Daily notes: clicking on a day opens a small modal to add a short note (“Did 20 pushups”) saved per-date per-habit.
    - Streak panel with badges for milestones (3-day streak, 7-day streak, 30-day streak) and a small animation when a new badge is unlocked.
    - A “Reminder” toggle that mimics reminder behavior: when enabled, a top banner appears at a chosen time using setTimeout, simulating a daily reminder while the page is open.
    - Option to export habit data to JSON (download) and import it again, giving learners more DOM/file input practice.


## 13) Color Palette Picker

Generate random color palettes, lock colors, and copy hex codes.

- DOM rendering of swatches
- Random color generation
- Clipboard copy
- Local save/load (localStorage)
- Contrast text legibility checks
- API: not required (optional): `https://www.colr.org/json/colors/random/7`
- Interface description (extended):
    - Main palette strip with 5–7 swatches, each with hex and RGB values, lock icon, copy icon, and a small name input so users can label colors.
    - A sidebar listing saved palettes with mini-previews; clicking a saved palette loads it into the main strip.
    - Keyboard shortcuts (e.g., space to generate, L to lock currently focused swatch) for extra interaction.
    - A “Palette history” section that stores last N generated palettes in sessionStorage and allows reverting with one click.
    - Optional timed animation mode: when enabled, setInterval generates a new palette every few seconds like a “screensaver”, until user stops it.
    - Settings dialog to choose color generation mode (fully random, pastel, dark) and default number of swatches, persisted in localStorage.


## 14) Random User Profile Cards

Fetches random users and shows them as profile cards with basic filters (e.g., gender, country).

- Fetch without async and parse JSON
- DOM card creation and list rendering
- Filter controls (select/radio) and events
- Loading and error states
- Basic responsive grid layout
- API: `https://randomuser.me/api/?results=20`
- Interface description (extended):
    - Dashboard layout with top filters (gender, nationality), a search box for name, and a “Regenerate” button.
    - Cards show avatar, name, email, location, age, and a “More” button that opens a drawer or modal with extended data (login info, registration date).
    - Favorite users feature: heart icon on each card; favorites persist in localStorage and can be viewed in a separate tab.
    - Sort controls (by name, age, country) that reorder the cards with a smooth animation.
    - A small “Stats” panel summarizing count by gender and country, updated dynamically when filters change.
    - Lazy loading or infinite scroll when many users are loaded, showing skeleton cards while fetching more.


## 15) Country Info Explorer

Search countries by name and show flag, population, region, capital, and currencies.

- Fetch without async from REST Countries
- Search input and results list
- Detail panel/card for selected country
- Handling “no results” and invalid input
- Optional region filter dropdown
- API: `https://restcountries.com/v3.1/name/{name}`
- Interface description (extended):
    - Top control bar with search, region filter, and sort options (population, area, name). Sort order persists using localStorage.
    - Countries displayed as cards with flag, name, population, region; clicking opens a detailed panel that includes border countries rendered as clickable chips to navigate between neighbors.
    - A mini “Compare” mode where users can select two countries (checkboxes on cards) and open a side-by-side comparison view.
    - A “Visited” toggle per country, stored in localStorage, and a small badge that shows how many countries are marked visited.
    - Dark-mode toggle that changes background, card colors, and flag drop shadows; choice saved in localStorage.
    - Scroll-to-top button that appears when the list is long; smooth scrolling implemented for better UX.


## 16) SpaceX Launches Timeline

Displays recent and upcoming SpaceX launches with mission name, date, rocket, and status.

- Fetch without async from JSON API
- Date formatting and status color coding
- DOM timeline or table layout
- Filter: past vs upcoming launches
- Basic sorting (by date)
- API: `https://api.spacexdata.com/v5/launches`
- Interface description (extended):
    - Split layout: left-side vertical timeline with launches, right-side details panel for selected launch.
    - Each timeline item shows mission name, date, icon for status; clicking the item populates the details panel with more info (rocket, launchpad, links).
    - Filter bar for past/upcoming, success/failure, and a search box for mission name; filters combine and update timeline in real-time.
    - A “Launch countdown” widget for the nearest upcoming launch, using setInterval to update days/hours/minutes/seconds left.
    - Favorites/bookmarks for specific launches, stored in localStorage, visible in a separate “Bookmarked launches” section.
    - An option to show launches in table view instead of timeline, controlled by a switch and persisted as a user preference.


## 17) Pokémon Mini Pokédex

Search Pokémon by name/id and show sprite, types, stats, and abilities.

- Fetch without async with dynamic path params
- DOM rendering with tags for types and stat bars
- Error handling (invalid Pokémon)
- Optional next/previous navigation
- Basic responsive card layout
- API: `https://pokeapi.co/api/v2/pokemon/{name}`
- Interface description (extended):
    - Layout with top search + next/prev navigation, left side main Pokémon card, right side “Pokémon list” showing a scrollable list of names to jump quickly.
    - Card shows sprite, name, ID, types as colored badges, base stats with animated bars, height, weight, and abilities as pill-shaped labels.
    - “Recently viewed” section below main card, showing thumbnails and names of last N Pokémon, stored in sessionStorage.
    - A “Random” button that fetches a random Pokémon and uses a short flash animation when updating the card.
    - Theme accent color automatically based on primary Pokémon type (e.g., water = blue, fire = red), applied to buttons and borders.
    - Optional “auto-play” demo mode using setInterval to cycle through a range of Pokémon IDs for display purposes.


## 18) Public Holidays Calendar

Displays public holidays for a selected country and year in a list or calendar view.

- Fetch without async with country/year params
- DOM table or list generation
- Select dropdowns for country and year
- Handling empty or missing data
- Optional highlight of “today” if within range
- API: `https://date.nager.at/api/v3/PublicHolidays/{year}/{countryCode}`
- Interface description (extended):
    - Top controls with country and year dropdowns, plus “View mode” toggle (List / Calendar). Preferences stored in localStorage.
    - List view: grouped by month with sticky month headers, each holiday shown with date, local name, English name, and type badge.
    - Calendar view: month grid with holidays highlighted; clicking a holiday opens a side panel with full details, plus a small note field saved per holiday (using localStorage).
    - A summary area that counts total holidays, shows number of holidays per month, and highlights longest gap between holidays.
    - Option to mark certain holidays as “important” with star icons; these appear in a separate “Important holidays” quick list.
    - A “Next upcoming holiday” widget powered by setInterval/setTimeout that keeps updating as time passes (if the app stays open).


