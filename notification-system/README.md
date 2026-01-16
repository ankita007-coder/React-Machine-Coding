Got it 👍
Here’s a **SHORT, CLEAN, INTERVIEW-FRIENDLY `README.md`** — no fluff, no over-documentation.

---

````md
# 🔔 Notification Toast System

A reusable toast notification system built in React using Context.  
Allows any component to trigger notifications without coupling UI logic.

---

## Features
- Global `notify()` function
- Auto-dismiss + manual close
- Multiple types (success, error, warning, info)
- Configurable position
- Simple and reusable

---

## Setup

Wrap your app once:

```jsx
<NotificationProvider position="top-right">
  <App />
</NotificationProvider>
````

---

## Usage

Trigger a notification from anywhere:

```jsx
const { notify } = useNotification();

notify({
  message: 'Saved successfully',
  type: 'success',
  duration: 3000
});
```

---

## Positions Supported

`top-right`, `top-left`, `bottom-right`, `bottom-left`,
`top-center`, `bottom-center`

---

## Design Notes

* State managed via Context
* UI rendered through a single container
* Position handled via CSS (presentation only)

---

## Summary

Lightweight, scalable notification system suitable for dashboards and apps.

```

---

### ✅ This is perfect for:
- Interviews  
- Personal projects  
- GitHub reviewers  

If you want an **even more minimal (5–6 lines)** version, say the word.
```
