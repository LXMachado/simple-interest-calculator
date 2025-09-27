# Simple Interest Calculator

A modern, responsive web application for calculating simple interest with an intuitive user interface and real-time validation.

![Simple Interest Calculator](https://img.shields.io/badge/Status-Complete-green)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🚀 Demo

Visit the live application: [Simple Interest Calculator](https://lxmachado.github.io/simple-interest-calculator/)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Code Documentation](#code-documentation)
- [Formula](#formula)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## 🎯 Overview

The Simple Interest Calculator is a web-based tool that calculates simple interest based on principal amount, interest rate, and time period. Built with vanilla HTML, CSS, and JavaScript, it provides an elegant dark-themed interface with real-time calculations and comprehensive input validation.

### Key Highlights

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Real-time Validation**: Instant feedback for invalid inputs
- **Interactive Interface**: Range slider for interest rate selection with live updates
- **Error Handling**: Comprehensive error handling and user feedback
- **Accessibility**: ARIA labels and semantic HTML for screen readers
- **Modern UI**: Clean, professional design with smooth animations

## ✨ Features

### Core Functionality
- **Simple Interest Calculation**: Accurate calculation using the formula: `Interest = (Principal × Rate × Time) / 100`
- **Input Validation**: Ensures all inputs are valid numbers and within acceptable ranges
- **Real-time Updates**: Interest rate slider updates the display value instantly
- **Error Messages**: Clear, contextual error messages for invalid inputs

### User Interface
- **Dark Theme**: Modern dark background with light calculator panel
- **Responsive Layout**: Adapts to different screen sizes (mobile-first approach)
- **Interactive Elements**: Hover effects and smooth transitions
- **Professional Typography**: Uses system fonts for optimal readability

### Input Controls
- **Principal Amount**: Number input with minimum value validation
- **Interest Rate**: Range slider (1% - 20%) with 0.25% increments
- **Time Period**: Number input for years (1-100 years)
- **Calculate Button**: Form submission with keyboard accessibility

### Validation Features
- Prevents negative or zero principal amounts
- Ensures positive time periods
- Validates numeric inputs
- Provides clear error messaging
- Maintains form state during validation

## 🛠 Technologies Used

| Technology | Purpose | Version |
|------------|---------|---------|
| **HTML5** | Structure and semantics | Latest |
| **CSS3** | Styling and responsive design | Latest |
| **JavaScript (ES6+)** | Logic and interactivity | ES2018+ |

### CSS Features Used
- CSS Grid and Flexbox for layout
- CSS Custom Properties (variables)
- CSS Transitions and Animations
- Media Queries for responsive design
- Modern CSS selectors and pseudo-classes

### JavaScript Features Used
- DOM manipulation
- Event handling
- Form validation
- Error handling with try-catch
- ES6+ arrow functions and const/let
- Template literals

## 📦 Installation

### Option 1: Direct Download

1. **Clone the repository**:
   ```bash
   git clone https://github.com/LXMachado/simple-interest-calculator.git
   cd simple-interest-calculator
   ```

2. **Open in browser**:
   ```bash
   # On macOS
   open index.html
   
   # On Windows
   start index.html
   
   # On Linux
   xdg-open index.html
   ```

### Option 2: Local Server

For development or testing purposes, you can serve the files using a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

### Option 3: GitHub Pages

The project is automatically deployed via GitHub Pages. Any commits to the main branch will trigger a new deployment.

## 💻 Usage

### Basic Usage

1. **Enter Principal Amount**: Input the initial amount of money in dollars
2. **Set Interest Rate**: Use the slider to select the annual interest rate (1% - 20%)
3. **Enter Time Period**: Input the number of years for the investment
4. **Calculate**: Click the "Compute Interest" button or press Enter
5. **View Result**: The calculated interest amount will be displayed

### Example Calculation

```
Principal: $1,000
Interest Rate: 5.5%
Time: 3 years

Calculation: (1000 × 5.5 × 3) / 100 = $165.00
```

### Input Validation

The calculator validates inputs and provides helpful error messages:

- **Invalid Amount**: "Amount must be greater than 0"
- **Invalid Years**: "Years must be greater than 0"
- **Non-numeric Input**: "Please enter valid numbers"

## 📁 File Structure

```
simple-interest-calculator/
├── index.html          # Main HTML file with form structure
├── script.js           # JavaScript logic and calculations
├── style.css           # CSS styling and responsive design
├── README.md           # Project documentation
├── LICENSE             # MIT License file
├── .gitignore          # Git ignore rules
└── .github/
    └── workflows/
        └── main.yml     # GitHub Actions workflow
```

### File Descriptions

| File | Purpose | Lines of Code |
|------|---------|---------------|
| `index.html` | Application structure, form elements, and semantic markup | ~65 |
| `script.js` | Business logic, validation, and DOM manipulation | ~85 |
| `style.css` | Responsive design, animations, and theming | ~120 |

## 📖 Code Documentation

### JavaScript Functions

#### `updateRateDisplay(value)`
Updates the rate display value when the slider is moved.

**Parameters:**
- `value` (string|number): The current rate value

**Returns:** `void`

```javascript
function updateRateDisplay(value) {
    const rateDisplay = document.getElementById('rate_val');
    if (rateDisplay) {
        rateDisplay.textContent = parseFloat(value).toFixed(2);
    }
}
```

#### `compute()`
Main calculation function that validates inputs and calculates simple interest.

**Returns:** `boolean` - True if calculation successful, false if validation fails

**Features:**
- Input validation and sanitization
- Business logic validation
- Error handling and user feedback
- Result formatting and display

### CSS Architecture

The CSS follows a modular approach with clear sections:

1. **Reset and Base Styles**: Normalize browser defaults
2. **Layout**: Main container and responsive design
3. **Typography**: Font families and text styling
4. **Form Elements**: Input styling and interactions
5. **Components**: Specialized components like sliders and buttons
6. **Utilities**: Helper classes and responsive utilities

### HTML Structure

The HTML uses semantic elements and ARIA attributes for accessibility:

- `<main>` for the primary content area
- `<form>` with proper validation attributes
- `<label>` elements properly associated with inputs
- ARIA attributes for screen reader support
- Semantic input types (`number`, `range`)

## 🧮 Formula

The simple interest calculation uses the standard financial formula:

```
Simple Interest = (Principal × Rate × Time) / 100
```

Where:
- **Principal (P)**: The initial amount of money
- **Rate (R)**: The annual interest rate (as a percentage)
- **Time (T)**: The time period in years

### Example Calculations

| Principal | Rate | Time | Interest |
|-----------|------|------|----------|
| $1,000 | 5% | 2 years | $100.00 |
| $5,000 | 7.5% | 3 years | $1,125.00 |
| $10,000 | 10.25% | 1 year | $1,025.00 |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Guidelines

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature-name`
3. **Make your changes** with proper testing
4. **Commit your changes**: `git commit -m 'Add feature'`
5. **Push to the branch**: `git push origin feature-name`
6. **Submit a pull request**

### Code Style

- Use consistent indentation (2 spaces)
- Follow semantic HTML practices
- Use meaningful variable and function names
- Comment complex logic
- Maintain responsive design principles

### Testing

Before submitting changes, please test:
- All input validation scenarios
- Responsive design on different screen sizes
- Accessibility with screen readers
- Cross-browser compatibility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Alexandre Machado**
- GitHub: [@LXMachado](https://github.com/LXMachado)
- LinkedIn: [Alexandre Machado](https://linkedin.com/in/alexandre-machado)

## 🙏 Acknowledgments

- Inspired by financial education tools
- Built as part of IBM's software development coursework
- Thanks to the open-source community for best practices and inspiration

---

⭐ **Star this repository if you found it helpful!**
