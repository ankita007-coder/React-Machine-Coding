# 🛒 Cart Page (E-commerce)

A simple cart page implementation built in React using Context for state management.  
Supports quantity updates, item removal, and dynamic price calculation.

---

## Features
- Centralized cart state
- Increment / decrement item quantity
- Stock validation
- Remove items from cart
- Dynamic price summary (subtotal, tax, total)

---

## Architecture

```

CartProvider
├── CartItemList
│    └── CartItem
└── PriceSummary

```

- `CartProvider` holds cart state
- UI components consume state via `useCart`

---

## State Management
- Cart state managed using **React Context**
- Prices are **derived**, not stored
- Easy to migrate to Redux if complexity increases

---

## Usage

Wrap the app:

```jsx
<CartProvider>
  <App />
</CartProvider>
```

---

## Design Notes

* Quantity is limited by available stock
* Cart logic is separated from UI
* Backend should revalidate price and stock at checkout

---

## Summary

Clean, scalable cart page suitable for frontend LLD interviews and demos.

