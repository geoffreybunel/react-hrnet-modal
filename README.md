# react-hrnet-modal

A lightweight and controlled React modal component, created as part of the HRNet application modernization.
This component replaces a legacy jQuery modal plugin with a fully React-based, reusable solution.
The modal is designed to be simple, predictable, accessible, and easy to integrate into any React application.

## ✅ Prerequisites

Before installing this package, make sure your environment meets the following requirements:

- Node.js >= 18
- React >= 18
- React DOM >= 18

## ✨ Features

- Controlled component (isOpen / onClose)
- Overlay click to close (optional)
- Escape key support (optional)
- Scroll locking when the modal is open
- Optional close button
- Basic accessibility support (role="dialog", aria-modal)
- Styles provided via a dedicated CSS file
- Published as an npm package via GitHub Packages

## 📦 Installation

This package is published on npmjs.com.

### Install the package
```ini
npm install @geoffreybunel/react-hrnet-modal
```

## 🚀 Usage

Import the component and its styles
```ini
import Modal from "@geoffreybunel/react-hrnet-modal";
import "@geoffreybunel/react-hrnet-modal/style.css";
```

## 🔧 Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `isOpen` | boolean | ✅ | — | Controls whether the modal is displayed |
| `onClose` | function | ✅ | — | Callback triggered when the modal requests to close |
| `children` | ReactNode | ✅ | — | Content displayed inside the modal |
| `title` | ReactNode | ❌ | — | Optional title displayed at the top of the modal |
| `closeOnOverlayClick` | boolean | ❌ | `true` | Allows closing the modal by clicking the overlay |
| `closeOnEsc` | boolean | ❌ | `true` | Allows closing the modal using the Escape key |
| `showCloseButton` | boolean | ❌ | `true` | Displays a close button inside the modal |

## ♿ Accessibility

This modal includes basic accessibility features:
- role="dialog"
- aria-modal="true"
- aria-labelledby when a title is provided
The component follows common accessibility conventions for modal dialogs.

## 🧱 Styling

The component ships with a standalone CSS file:
```ini
import "@geoffreybunel/react-hrnet-modal/style.css";
```
Styles are namespaced to avoid collisions with host applications.

## 🛠️ Development notes

- Built with React and Vite
- React and React DOM are declared as peerDependencies
- Distributed as compiled ES and UMD builds
- Intended to be reusable outside of the HRNet application