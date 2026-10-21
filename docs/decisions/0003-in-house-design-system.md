# 0003 · An in-house design system

**Status:** accepted · 8 Oct 2026 (tokens) · 20 Oct 2026 (components) · reviewed 20 Oct 2026

**Context.** Three apps — customer, business and back office — must feel like one product. The options were an off-the-shelf
component library (Material UI, Bootstrap, shadcn/ui) or a system of our own.

**Decision.** `@otra-mesa/diseno`: tokens from the brand (logo colours, one typeface, 9 type sizes, 12 spacing steps, 5 radii,
4 shadows), a dark mode for the business tools, a colour-blind-safe chart palette, and 11 React + TypeScript components used by
all three apps, with a public catalogue and tests.

**Why.** I wanted an identity I chose myself, a studied colour palette and my design judgement built into the code.
Off-the-shelf libraries carry their own accent; here every contrast, state and rule is a decision, and one change reaches all three apps.

**Trade-offs.** Every component takes time to build and document, and maintenance is ours.

**What I would do differently.** Start complex components (dialogs, menus, date pickers) from an unstyled library such as
Radix UI or React Aria — proven keyboard, focus and screen-reader behaviour — and put my design on top.
