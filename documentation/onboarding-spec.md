# 📲 CatchUp Mobile App – Onboarding Flow Spec

This document outlines the onboarding flow for the CatchUp React Native app, designed to help users set up reminders to stay in touch with friends and family.

---

## 🌟 Overview

**Goal:** Guide users through a warm, low-friction onboarding experience that sets up permissions, contact syncing, and lets them choose who they want to keep in touch with.

---

## 🧭 Pages

### 1. Welcome Screen

**Purpose:** Introduce the app’s core mission in a friendly, human tone.

- **Title:** “Let’s help you keep in touch”
- **Subtext:** “Stay close to the people who matter — even when life gets busy.”
- **Action:** `Get Started` button → navigates to permissions explanation

---

### 2. Why We Need Access

**Purpose:** Explain what the app uses and why, to build trust.

- **Title:** “How it works”
- **Text:**
  - “CatchUp uses your contacts and call activity (only the metadata!) to remind you when it’s time to reach out.”
  - “Nothing is uploaded or shared. Everything stays on your phone.”
- **Action:** `Sounds good →` → triggers contact permission request

---

### 3. Contact Permissions Screen

**Purpose:** Request access to contacts (and optionally call logs on Android).

- **Title:** “Sync your contacts”
- **Text:** “We’ll help you prioritize the people you care about most.”
- **Actions:**
  - `Allow Access` → triggers permission prompt
  - If denied: show fallback or retry option
- **After success:** Load contact list, then navigate to selection screen

---

### 4. Select Who to Stay in Touch With

**Purpose:** Let users choose who they want to “track” for reminders.

- **Title:** “Who do you want to stay in touch with?”
- **Subtext:** “Pick the people that matter — we’ll remind you to reach out.”
- **UI:**
  - Scrollable contact list with avatars
  - Top: "Suggested" section based on past activity
  - Each item:
    - Contact name
    - Last contacted info (if available)
    - Select/deselect toggle (e.g. checkbox or heart icon)
- **Actions:**
  - `Next` button (disabled unless ≥1 contact selected)
  - Optional: `Skip for now`

---

### 5. Set Reminder Frequency

**Purpose:** Set default contact intervals (can be per-contact or general).

- **Title:** “How often should we remind you?”
- **Options (select one per contact or globally):**
  - Weekly
  - Every 2 weeks
  - Monthly
  - Custom
- **UI:**
  - List of selected contacts with dropdowns or pills
- **Action:** `Next`

---

### 6. Notification Preferences

**Purpose:** Ask for notification permissions and let user set general rules.

- **Title:** “When should we nudge you?”
- **Options:**
  - Morning reminders
  - Random friendly nudges
  - Streak highlights
  - Do not disturb toggle
- **Action:**
  - `Enable Notifications` → triggers notification permission
  - Option to skip

---

### 7. Final Screen

**Purpose:** Transition from onboarding to home screen with a friendly send-off.

- **Title:** “All set! 🎉”
- **Text:** “We’ll remind you when it’s time to catch up. You’re in control.”
- **Action:** `Take Me to CatchUp` → goes to Home screen

---

## ✅ Implementation Notes

- Store onboarding completion in secure storage (e.g., `AsyncStorage` or `MMKV`)
- Use `react-navigation` for screen flow
- Store selected contacts and their reminder settings in persistent storage
- Use Expo permissions API for contacts and notifications
- Show fallback or retry if permissions are denied
- App should be fully functional even if onboarding is skipped

---

