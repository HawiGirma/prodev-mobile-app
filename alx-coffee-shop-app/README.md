# ALX Coffee Shop App

A modern React Native coffee shop application built with Expo Router and NativeWind (Tailwind CSS).

## Features

- 🏠 **Home Screen**: Welcome page with featured coffee items
- ☕ **Coffee Menu**: Browse different coffee types and beverages
- 🛒 **Shopping Cart**: Add items to cart and manage orders
- 👤 **User Profile**: Manage user account and preferences
- 📱 **Responsive Design**: Optimized for mobile devices
- 🎨 **Modern UI**: Built with NativeWind for beautiful styling

## Tech Stack

- **React Native**: Mobile app framework
- **Expo Router**: File-based routing system
- **NativeWind**: Tailwind CSS for React Native
- **TypeScript**: Type-safe development
- **Expo Vector Icons**: Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (or Expo Go app)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd alx-coffee-shop-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Run on your preferred platform:

```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## Project Structure

```
alx-coffee-shop-app/
├── app/
│   ├── _layout.tsx          # Root layout with navigation
│   └── index.tsx            # Home screen
├── styles/
│   └── global.css           # Global Tailwind CSS styles
├── assets/                  # Images and static assets
├── babel.config.js          # Babel configuration
├── metro.config.js          # Metro bundler configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json
```

## Features Implementation

### Home Screen

- Hero section with welcome message
- Category navigation
- Featured coffee items
- Bottom navigation bar

### Coffee Items

- Dynamic coffee menu
- Price display
- Add to cart functionality
- Item descriptions

### Navigation

- Tab-based navigation
- Smooth transitions
- Intuitive user experience

## Styling

This app uses NativeWind (Tailwind CSS for React Native) for styling:

- **Utility-first approach**: Rapid UI development
- **Responsive design**: Mobile-first approach
- **Consistent spacing**: Using Tailwind's spacing scale
- **Color system**: Custom coffee-themed color palette

## Development Process

This app was created as part of the ALX ProDev Frontend course, demonstrating:

1. **React Native Fundamentals**: Component creation and state management
2. **Expo Router**: File-based routing implementation
3. **NativeWind Integration**: Tailwind CSS styling in React Native
4. **Mobile UI/UX**: Modern mobile app design patterns
5. **TypeScript**: Type-safe development practices

## Challenges Faced

1. **NativeWind Setup**: Configuring Tailwind CSS for React Native
2. **Navigation Structure**: Implementing proper routing with Expo Router
3. **Responsive Design**: Ensuring proper layout across different screen sizes
4. **Component Architecture**: Creating reusable and maintainable components

## Future Enhancements

- [ ] User authentication system
- [ ] Order tracking functionality
- [ ] Payment integration
- [ ] Push notifications
- [ ] Offline support
- [ ] Dark mode theme
- [ ] Search functionality
- [ ] Favorites system

## Contributing

This is a learning project for the ALX ProDev Frontend course. Feel free to fork and experiment with additional features!

## License

This project is part of the ALX ProDev Frontend curriculum.

---

**Note**: This app was created as a demonstration of React Native development skills using modern tools and best practices.
