# SpendWise Dashboard Shell

SpendWise is a responsive personal finance dashboard designed to help users organize and understand their spending.

## What I Built

For this project, I built the first dashboard shell for SpendWise using HTML and modern CSS layout techniques.

The dashboard includes:

- Sidebar navigation
- Dashboard header
- Six financial category cards
- Responsive layout
- Hover and keyboard focus micro-interactions
- CSS custom properties for theming
- Dark theme support

## Dashboard Sections

### Sidebar

The sidebar provides navigation links for:

- Dashboard
- Expenses
- Categories
- Reports
- Settings

### Header

The dashboard header displays the SpendWise application identity, dashboard title, current month, and a welcome message.

### Category Cards

The dashboard contains six realistic financial categories:

- Food
- Transport
- Rent
- Entertainment
- Savings
- Utilities

Each card displays a category name, description, status, and static financial information.

## CSS Grid

CSS Grid is used for the main dashboard structure.

The desktop layout separates the sidebar from the main content area.

Grid is also used to arrange the six financial category cards into three columns.

## Flexbox

Flexbox is used inside the dashboard for:

- Navigation items
- Header content
- Card content
- Card status information
- Responsive navigation

## Responsive Design

The dashboard includes a responsive media query at 768px.

On smaller screens:

- The sidebar and main content become a single-column layout.
- Navigation items become more flexible.
- Category cards stack vertically.
- Header content adapts to smaller screen sizes.

## Theme Variables

CSS custom properties are defined on `:root` for:

- Brand color
- Accent color
- Background color
- Surface color
- Primary text
- Secondary text
- Borders
- Shadows

This makes the visual design easier to maintain and update.

## Micro-interactions

The category cards include subtle hover and keyboard focus animations.

The animation uses:

- `transform`
- `box-shadow`
- 200ms transitions

Cards are keyboard accessible using `tabindex="0"`.

## Dark Theme

A dark theme is included using:

```css
@media (prefers-color-scheme: dark)