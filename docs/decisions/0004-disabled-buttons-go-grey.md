# 0004 · Disabled buttons go grey, not transparent

**Status:** accepted · 16 Oct 2026 (design system 1.6.0)

**Context.** There were three disabled styles, one per app: two faded the brand green, one turned light grey. I compared them in
light and dark before deciding.

**Decision.** Primary disabled: light grey with muted text, no transparency. Secondary disabled: dashed grey border with muted text.
Icon disabled: muted icon. One style for all three apps.

**Why.** Grey says "switched off". The app has to be intuitive, and a faded green still looks pressable, especially in dark mode.
The dashed border changes the shape, not only the colour.

**Trade-offs.** Low contrast for people with low vision (WCAG does not require it for disabled controls, but the cost is real);
a dashed border is a less familiar convention.

**Disable or hide.** Disabled means the action exists and something is missing. Hide it when that person can never use it —
e.g. a team member never sees "Invite as owner".
