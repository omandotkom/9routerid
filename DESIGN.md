---
name: Ember Studio Design System
colors:
  surface: '#F5F5F4'
  surface-dim: '#eed5cd'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1ed'
  surface-container: '#ffe9e3'
  surface-container-high: '#fce3db'
  surface-container-highest: '#f7ddd6'
  on-surface: '#261814'
  on-surface-variant: '#59413a'
  inverse-surface: '#3c2d28'
  inverse-on-surface: '#ffede8'
  outline: '#8d7168'
  outline-variant: '#e1bfb5'
  surface-tint: '#ac3400'
  primary: '#9b2f00'
  on-primary: '#ffffff'
  primary-container: '#c2410c'
  on-primary-container: '#ffece7'
  inverse-primary: '#ffb59d'
  secondary: '#855300'
  on-secondary: '#ffffff'
  secondary-container: '#fea619'
  on-secondary-container: '#684000'
  tertiary: '#0051af'
  on-tertiary: '#ffffff'
  tertiary-container: '#0069de'
  on-tertiary-container: '#ecf0ff'
  error: '#DC2626'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd0'
  primary-fixed-dim: '#ffb59d'
  on-primary-fixed: '#390c00'
  on-primary-fixed-variant: '#832600'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a41'
  on-tertiary-fixed-variant: '#004494'
  background: '#fff8f6'
  on-background: '#261814'
  surface-variant: '#f7ddd6'
  terracotta: '#C2410C'
  burnt-sienna: '#9A3412'
  amber: '#F59E0B'
  stone: '#78716C'
  warm-white: '#FAFAF9'
  surface-raised: '#E7E5E4'
  text-primary: '#1C1917'
  text-secondary: '#57534E'
  border-warm: '#D6D3D1'
  success: '#16A34A'
  warning: '#D97706'
typography:
  display:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  section-heading:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.3'
  subhead:
    fontFamily: Source Sans 3
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.5'
  body:
    fontFamily: Source Sans 3
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  small:
    fontFamily: Source Sans 3
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  caption:
    fontFamily: Source Sans 3
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
  overline:
    fontFamily: Source Sans 3
    fontSize: 11px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  max-width: 1200px
  gutter: 24px
---

# Ember Studio

## Overview
A warm, craft-focused design system for creative project management tools. The aesthetic blends terracotta warmth with modern minimalism — soft earth tones anchor the interface while amber accents draw attention to actions and progress. Designed for teams that value aesthetics alongside productivity. Both light and dark modes feel intentional, not just inverted. The overall mood is calm, focused, and subtly luxurious.

## Colors
- **Primary** (#C2410C): Terracotta — CTAs, active states, links, focus rings, progress indicators
- **Primary Hover** (#9A3412): Burnt sienna — hover states on primary elements
- **Accent** (#F59E0B): Amber — notifications, badges, highlights, new-item indicators
- **Neutral** (#78716C): Stone — muted text, placeholders, timestamps, metadata
- **Background** (#FAFAF9): Warm white page background with a hint of cream
- **Surface** (#F5F5F4): Cards, panels, modals — slightly warm off-white
- **Surface Raised** (#E7E5E4): Hover states, selected rows, active tabs
- **Text Primary** (#1C1917): Warm near-black — headings, body text, primary labels
- **Text Secondary** (#57534E): Warm gray — descriptions, captions, secondary info
- **Border** (#D6D3D1): Warm gray borders — card edges, dividers, input borders
- **Success** (#16A34A): Completed tasks, approved items, positive states
- **Warning** (#D97706): Due soon, needs attention, caution banners
- **Error** (#DC2626): Overdue, failed, destructive actions

## Typography
- **Display Font**: Playfair Display — loaded from Google Fonts
- **Body Font**: Source Sans 3 — loaded from Google Fonts
- **Code Font**: Fira Code — loaded from Google Fonts

Display and heading text uses Playfair Display at bold weight with tight letter spacing (-0.02em). The serif display font conveys craft and intentionality. Body and UI text uses Source Sans 3 at regular (400) and semibold (600) weights — a clean, highly legible sans-serif. Code blocks use Fira Code with ligatures enabled.

Type scale: Display 64px, Headline 48px, Section heading 28px, Subhead 20px, Body 16px, Small 14px, Caption 12px, Overline 11px uppercase tracking-wide.

## Elevation
Cards rest flat with a 1px warm border (#D6D3D1) and gain a soft shadow on hover (0 4px 16px rgba(28,25,23,0.06)). Active/selected cards get a 2px left border in terracotta. Primary buttons gain a warm glow on hover (0 4px 12px rgba(194,65,12,0.25)). Modals use a larger shadow (0 24px 48px rgba(28,25,23,0.12)) with a backdrop blur. The nav is transparent with backdrop-blur, gaining a 1px bottom border on scroll.

## Components
- **Buttons**: Primary uses terracotta (#C2410C) fill with white text, 8px radius, semibold weight. Secondary uses transparent bg with 1px stone border (#D6D3D1), warm text. Ghost has no border, just text color. Destructive uses red bg with white text. All buttons have 150ms transition. Sizes: small (32px height, 12px padding), medium (40px, 16px), large (48px, 24px).
- **Cards**: Warm white surface (#F5F5F4), 1px border (#D6D3D1), 12px radius, 16px padding. Project cards show a colored left stripe (4px) matching the project's assigned color. Hover lifts 2px with shadow increase. Selected cards have a terracotta left border.
- **Inputs**: 1px border (#D6D3D1), surface background (#F5F5F4), 8px radius, 12px padding, 16px font. Focus: border turns terracotta with a warm ring (0 0 0 3px rgba(194,65,12,0.12)). Error: border turns red. Labels are 14px semibold above the input.
- **Chips**: Pill-shaped (9999px radius). Category chips: stone-100 bg, stone-600 text, 6px/14px padding. Active: terracotta bg, white text. Priority chips use semantic colors with matching text.
- **Progress Bars**: 4px height, rounded-full, stone-200 track, terracotta fill. Animated fill with 300ms ease transition. Percentage label in small text above.
- **Avatars**: Circular (9999px radius), 32px default size. Stack with -8px overlap for team display. Border: 2px solid surface color for separation.
- **Tabs**: Horizontal, underline style. Inactive: stone text, no underline. Active: terracotta text with 2px bottom border. Hover: warm gray background.
- **Navigation**: Sidebar layout, 256px width. Warm white bg with 1px right border. Logo and workspace name at top. Collapsible sections with chevron toggles. Active item: terracotta left accent bar (3px) with warm tinted background.

## Spacing
- Base unit: 4px
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80px
- Component padding: small 8x12, medium 12x16, large 16x24
- Section spacing: 24px mobile, 32px tablet, 48px desktop
- Container max width: 1200px with 24px horizontal padding
- Card grid gap: 16px mobile, 24px desktop

## Border Radius
- 4px: Inline code, small badges
- 8px: Buttons, inputs, selects, dropdowns
- 12px: Cards, panels, modals, popovers
- 9999px: Avatars, chips, pills, progress bars

## Do's and Don'ts
- Do use terracotta (#C2410C) only for interactive elements and active states — never as decoration
- Do maintain the 4px spacing grid consistently
- Do use Playfair Display for headings and Source Sans 3 for body — the serif/sans contrast is the design's signature
- Do keep the warm tone consistent — avoid cool grays or blue-tinted neutrals
- Do use the amber accent sparingly for attention-drawing elements only
- Don't use more than two font weights on a single screen (regular + semibold)
- Don't mix border radius values — buttons get 8px, cards get 12px
- Don't use pure black or pure white — always use the warm palette values
- Don't add decorative elements — the warmth comes from the color palette, not ornament
- Don't place multiple terracotta buttons in the same section — one primary CTA per view
