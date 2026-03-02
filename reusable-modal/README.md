# 🧩 Reusable Modal Component (React)

A fully accessible, reusable Modal component built with:

- Portal mounting
- Focus trapping
- Keyboard navigation (ESC + Tab support)
- Overlay click handling
- Scroll locking
- ARIA accessibility support

Designed for production-level UI systems and LLD interviews.

---

## ✨ Features

- ✅ Rendered using `React Portal`
- ✅ Overlay background with click-to-close
- ✅ Focus trap (keyboard-safe)
- ✅ Supports `Tab` and `Shift + Tab`
- ✅ ESC key closes modal
- ✅ Prevents background scroll
- ✅ Accessible (`role="dialog"`, `aria-modal="true"`)
- ✅ Handles zero-focusable-element edge case

---

## 🧠 Architecture

```

Modal
├── Portal (document.body)
│    └── Overlay
│         └── Modal Container
│              ├── Header
│              ├── Body
│              └── Footer

````

### Responsibilities

- **Portal** → Avoids stacking & overflow issues
- **Overlay** → Blocks background interaction
- **Focus Trap Hook** → Keeps keyboard navigation inside modal
- **Escape Listener** → Closes modal on ESC
- **Scroll Lock** → Prevents background scrolling

---

## 🚀 Usage

### 1️⃣ Wrap Modal in Component

```jsx
<Modal
  isOpen={isOpen}
  title="Delete Item"
  onClose={handleClose}
>
  <button>Confirm</button>
  <button>Cancel</button>
</Modal>
````

---

## ⚙️ Props

| Prop     | Type     | Description                    |
| -------- | -------- | ------------------------------ |
| isOpen   | boolean  | Controls visibility            |
| onClose  | function | Called on ESC or overlay click |
| title    | string   | Optional modal title           |
| children | node     | Modal content                  |

---

## 🔒 Focus Trap Behavior

When modal opens:

1. Focus moves to first focusable element.
2. `Tab` cycles forward inside modal.
3. `Shift + Tab` cycles backward.
4. Focus never escapes modal.
5. If no focusable elements exist:

   * Modal container receives focus.

When modal closes:

* Focus should be restored to trigger element.

---

## ⌨️ Keyboard Support

| Key         | Behavior                 |
| ----------- | ------------------------ |
| Tab         | Cycle focus inside modal |
| Shift + Tab | Reverse cycle            |
| Escape      | Close modal              |

---

## 🛑 Scroll Lock

When modal opens:

```js
document.body.style.overflow = "hidden";
```

Restored on cleanup.

Prevents background scrolling.

---

## ♿ Accessibility

* `role="dialog"`
* `aria-modal="true"`
* Keyboard navigable
* Screen-reader friendly focus management

Complies with accessibility best practices (WCAG modal behavior).

---

## 🧩 Edge Cases Handled

* Zero focusable elements
* Dynamic children content
* Cleanup of event listeners
* Portal mounting safety
* Multiple re-renders

---

## 🛠 Focus Trap Implementation Strategy

1. Query all focusable elements inside modal.
2. Identify first and last elements.
3. Intercept `Tab` key:

   * If on last → move to first
   * If on first + Shift → move to last
4. Prevent default behavior when cycling.

---

## 📦 File Structure

```
components/
 └── Modal/
      ├── Modal.jsx
      ├── Modal.css
hooks/
 └── useFocusTrap.js
```

---

## 🔁 Trade-offs

### Custom Focus Trap vs Library

* Implemented manually for learning and interview clarity.
* In production, a library like `focus-trap` may be safer for edge cases.

### Controlled Modal Design

* Parent controls open/close state.
* Ensures predictable lifecycle.

---

## 🧪 Future Improvements

* Animation support
* Modal stacking
* Focus restoration to trigger element
* TypeScript version
* Headless modal variant

---

## 🎯 Interview Notes

This modal demonstrates:

* Separation of concerns
* Accessibility awareness
* Keyboard navigation management
* Proper portal usage
* Production-level UI thinking

---

## 📝 Summary

A scalable, accessible, and reusable Modal component built with React best practices.
Suitable for dashboards, SaaS apps, and frontend system design interviews.