# Autovault Studio — Car Detailing Website

A responsive, frontend-only demo built with HTML5, CSS3 and vanilla JavaScript.

## Run locally
1. Extract the `car-detailing-website` folder.
2. Open `index.html` in a modern browser. For best results, run a local static server (for example, VS Code Live Server or `python -m http.server` from this folder).
3. Internet access is required for Google Fonts and the sample Unsplash photographs.

## Before publishing — edit these sample values
- **Brand:** Search `Autovault` in `index.html` and `script.js`.
- **WhatsApp:** In `script.js`, update `CONFIG.whatsappNumber` to your business number in international digits only (India: `91` + 10-digit number).
- **Phone, address, hours, Instagram:** Update the contact and footer content in `index.html`, plus `CONFIG.instagramUrl` in `script.js`.
- **Prices and products:** Edit `services` and `productData` arrays in `script.js`. Product images are illustrative sample images; replace them with genuine product photography.
- **Gallery and before/after:** Replace the `galleryItems` array and comparison images with real photographs from your studio.
- **Reviews:** The three testimonials are explicitly sample content. Replace them with verified customer reviews before launch.
- **Map:** Replace the map placeholder in `index.html` with an official Google Maps embed for your exact business location.
- **SEO:** Update the page title, meta description, Open Graph image and LocalBusiness JSON-LD contact/address details in `index.html`.

## Functionality and limitations
- Responsive navigation, service and product filters, product search/sorting, gallery filters/lightbox, interactive image comparison, booking form validation, cart quantity controls, cart persistence with `localStorage`, toast notifications, and WhatsApp message generation are implemented.
- Appointment requests and orders open WhatsApp with a prefilled message. The customer must press **Send**, and the business must acknowledge the appointment/order.
- No payment is processed, and there is no database, secure account system, inventory sync, or server-side booking storage. For real online payments, connect a payment gateway and secure backend.
- Product availability, prices, service prices and all contact information are editable sample data.
- Images are loaded from Unsplash URLs, so an internet connection is required for them. Confirm image usage/licensing and replace with your own optimized assets for production.

## File structure
```
car-detailing-website/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── images/
    └── icons/
```
