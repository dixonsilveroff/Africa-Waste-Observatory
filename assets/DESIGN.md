# Design System Documentation

## 1. Overview & Creative North Star: "The Environmental Editorial"
This design system moves away from the clinical, "portal-style" aesthetics of traditional environmental reporting. Instead, it adopts a **High-End Editorial** approach. The Creative North Star is **The Environmental Editorial**—a philosophy that treats data and waste management intelligence with the prestige of a luxury architectural journal. 

We break the "template" look through:
*   **Intentional Asymmetry:** Using generous, uneven white space to guide the eye.
*   **Tonal Depth:** Replacing harsh lines with sophisticated surface layering.
*   **Authoritative Scale:** High-contrast typography that makes a statement before a single word is read.
*   **Brutalist Design:** Using raw, unpolished elements to create a sense of authenticity and rawness.

## 2. Colors & Surface Architecture
The color palette is grounded in the deep greens of dense foliage (#154212) and the dark, slate tones of professional governance.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section content. Boundaries must be defined solely through background color shifts or subtle tonal transitions. For instance, a `surface-container-low` section should sit directly against a `surface` background to create a clean, modern break without visual clutter.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers, like stacked sheets of fine, heavy-weight paper.
*   **Base:** `surface` (#F9F9FF)
*   **Lowest Priority Content:** `surface-container-low` (#f1f3ff)
*   **Standard Cards/Modules:** `surface-container` (#e9edff)
*   **Floating/High Importance:** `surface-container-highest` (#dce2f7)

### The "Glass" Rule
To elevate the experience beyond "standard flat UI," use semi-transparent `surface` colors with a `backdrop-filter: blur(12px)` for floating navigation or overlays.

## 3. Typography
The system utilizes a dual-typeface approach to balance authority with readability.

*   **Display & Headlines (Public Sans):** This is our "voice." Public Sans provides a sturdy, geometric foundation. Use `display-lg` (3.5rem) for hero statements to create an immediate editorial impact.
*   **Body & Labels (Inter):** Inter is our "engine." It is chosen for its exceptional legibility in data-heavy contexts.
*   **The Hierarchy:** Use extreme weight contrast. Pair a `headline-lg` in Bold with a `body-md` in Regular. This gap in scale creates the "premium" feel found in high-end magazines.

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering**, not structural lines.

*   **The Layering Principle:** Stacking tiers creates natural lift. Place a `surface-container-lowest` card atop a `surface-container-low` section. The subtle shift in hex value provides enough contrast for the human eye to perceive depth without the need for a stroke.
*   **Ambient Shadows:** When a component must "float" (e.g., a dropdown or a primary modal), use shadows with a blur radius of at least 24px and an opacity between 4% and 8%. The shadow color should be a tinted version of `on-surface` (#141B2B) to mimic natural light.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` token at 15% opacity. Never use 100% opaque borders.
*   **Glassmorphism:** Use for "Utility Overlays" (tooltips, hovering nav). A `surface-variant` color at 70% opacity with a blur effect allows background colors to bleed through, making the UI feel integrated.

## 5. Components

### Buttons
*   **Primary:** Subtle gradient from `primary` (#154212) to `primary_container` (#2D5A27). White text. Roundedness: Moderate (0.375rem / JSON `roundedness: 2`).
*   **Secondary:** No background. `outline-variant` Ghost Border (20% opacity). Text in `primary`.
*   **Tertiary:** No background or border. Text in `primary`. Interaction state is shown via a subtle `surface-container-high` background shift on hover.

### Chips
*   **Selection/Filter:** Use `secondary_container` with `on_secondary_container` text. No borders. Use `full` roundedness (9999px) to contrast against the sharper corners of cards.

### Input Fields
*   **Styling:** Use `surface_container_low` as the field background. Instead of a bottom line or full border, use a 2px `primary` accent bar only on the *left* edge during the `:focus` state to signal intentionality.

### Cards & Lists
*   **Strict Rule:** No divider lines. Separate list items using generous vertical white space (JSON `spacing: 3`) or by alternating background colors.
*   **Editorial Cards:** Use `surface-container` with a `lg` (0.5rem) corner radius. Ensure padding is spacious (at least 24px–32px) to maintain the "premium" feel.

### Additional Components: Data Visualizers
*   **Trend Indicators:** Use `primary` for positive environmental trends and `error` for negative waste impact data. These should be housed in `surface-container-high` pods to draw the eye.

## 6. Do's and Don'ts

### Do
*   **Do** prioritize "negative space" through spacious padding (level 3).
*   **Do** use `primary_fixed_dim` for subtle background accents in data-heavy areas.

### Don't
*   **Don't** use standard 1px #000000 or #CCCCCC borders.
*   **Don't** use pure black for text. Always use `on-surface` (#141B2B) to keep the aesthetic professional and "inky."
*   **Don't** use default Material shadows. Always use the Ambient Shadow rules (low opacity, high blur).
*   **Don't** use more than two font weights on a single screen. Let size and color define the hierarchy instead.