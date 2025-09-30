# HatchPoint Solutions - Typography Guide

## Font System

### Primary Fonts

#### **Quicksand** - Brand & Headings
- **Usage**: Logo text, brand name, main headings, section titles
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Character**: Friendly, modern, approachable
- **Class**: `font-quicksand`

#### **Inter** - Body & UI
- **Usage**: Body text, descriptions, UI elements, navigation
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Character**: Clean, highly readable, professional
- **Class**: `font-sans` (default)

#### **Space Grotesk** - Special Headings (Optional)
- **Usage**: Large display text, special callouts
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Character**: Modern, geometric, distinctive
- **Class**: `font-display`

---

## Typography Hierarchy

### Logo & Brand Name
- **Font**: Quicksand Medium (500)
- **Color**: Orange (#F77531) for "hatch", Gray (#7D7D7D) for "POINT"

### Main Headings (H1)
- **Font**: Quicksand Medium/Semibold (500-600)
- **Size**: 2.5rem - 5rem (responsive)
- **Color**: Gray-800

### Section Headings (H2)
- **Font**: Quicksand Semibold (600) or Space Grotesk Semibold
- **Size**: 2rem - 3.5rem (responsive)
- **Color**: Gray-800 with Orange accents

### Subsection Headings (H3)
- **Font**: Quicksand Medium (500) or Inter Semibold
- **Size**: 1.25rem - 1.5rem
- **Color**: Gray-800

### Body Text
- **Font**: Inter Regular (400)
- **Size**: 1rem - 1.125rem
- **Color**: Gray-600 (#525252)
- **Line Height**: 1.6-1.75

### Navigation
- **Font**: Inter Medium (500)
- **Size**: 0.875rem - 1rem
- **Color**: Gray-600, hover Orange-500

### Buttons
- **Font**: Inter Semibold (600)
- **Size**: 1rem - 1.125rem
- **Color**: White on orange background

### Small Text / Captions
- **Font**: Inter Regular (400)
- **Size**: 0.75rem - 0.875rem
- **Color**: Gray-500

---

## Usage Examples

```jsx
// Brand Name
<h1 className="font-quicksand font-medium text-4xl">HatchPoint Solutions</h1>

// Main Hero Heading
<h1 className="font-quicksand font-semibold text-5xl text-gray-800">
  Transform Your Business
</h1>

// Section Heading
<h2 className="font-quicksand font-semibold text-4xl text-gray-800">
  Our Services
</h2>

// Body Text
<p className="font-sans text-lg text-gray-600 leading-relaxed">
  Description goes here...
</p>

// Navigation Link
<a className="font-sans font-medium text-sm text-gray-600 hover:text-orange-500">
  Services
</a>

// Button
<button className="font-sans font-semibold text-lg text-white bg-orange-500">
  Get Started
</button>
```

---

## Best Practices

1. **Consistency**: Use Quicksand for all brand touchpoints and main headings
2. **Readability**: Use Inter for body text - it's optimized for screen reading
3. **Hierarchy**: Maintain clear visual hierarchy through size and weight
4. **Contrast**: Pair Quicksand's friendliness with Inter's professionalism
5. **Performance**: Fonts are loaded from Google Fonts with display=swap for optimal loading
