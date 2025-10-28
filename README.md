# The 4 Cs of Computational Sense-Making

An interactive React component exploring the Four Cs Framework—a comprehensive approach to making informed and critical meaning with AI outputs.

![License](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)
![React](https://img.shields.io/badge/React-18+-blue.svg)

## 📖 Overview

This interactive educational tool explores the Four Cs Framework created by R. Horst (2025):

- **Computation** - How generative systems assemble meaning through probability rather than understanding
- **Composition** - How systems assemble responses through prompts, retrieval, sampling, and context
- **Constraints** - The technical, epistemic, and policy boundaries that shape what models can generate
- **Calibration** - How models express confidence and how we interpret that certainty

## ✨ Features

- **Interactive Tooltips** - Hover over key terms to see detailed definitions
- **Expandable Sections** - Deep dive into each of the 4 Cs with rich content
- **Student-Friendly Explanations** - Simplified explanations available on hover for complex concepts
- **Visual Design** - Modern, animated interface with floating particles and smooth transitions
- **Comparative Analysis** - Explores parallels between machine and human pattern recognition
- **Practical Applications** - Includes guiding questions and "why it matters" sections

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- React 18+

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/four-cs-framework.git
cd four-cs-framework
```

2. Install dependencies:
```bash
npm install
```

3. The component requires the following dependencies:
```bash
npm install react lucide-react
```

### Usage

Import and use the component in your React application:

```jsx
import FourCsFramework from './FourCsFramework-fixed__4_';

function App() {
  return (
    <div>
      <FourCsFramework />
    </div>
  );
}

export default App;
```

## 🎨 Styling

The component uses:
- **Tailwind CSS** for utility styling (ensure Tailwind is configured in your project)
- **Lucide React** for icons
- Custom CSS animations included inline

## 📚 Content Structure

The framework is organized into four main sections:

### 1. Computation
- Pattern Recognition
- Boundaries of Knowing
- Centring and the Normative
- Inheritance and History

### 2. Composition
- The Material Basis of Meaning
- Prompt Engineering as Rhetorical Design
- Context as Constraint
- Retrieval and Recombination

### 3. Constraints
- Safety as Shaping
- Policy and Refusal
- The Agreeable Machine
- Epistemic Boundaries

### 4. Calibration
- Confidence and Hedging
- Verification as Interpretation
- Trust and Variance
- Epistemic Humility

## 🎓 Educational Use

This tool is designed for:
- Students learning about AI and computational thinking
- Educators teaching critical AI literacy
- Researchers exploring human-AI interaction
- Anyone interested in understanding how AI systems work

## 📄 License

This work is licensed under the **Creative Commons Attribution 4.0 International License** (CC BY 4.0).

You are free to:
- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material for any purpose, even commercially

Under the following terms:
- **Attribution** — You must give appropriate credit to R. Horst (2025), provide a link to the license, and indicate if changes were made.

Read the full license at: https://creativecommons.org/licenses/by/4.0/

## 📝 Citation

If you use this framework in your work, please cite:

```
Horst, R. (2025). The 4 Cs of Computational Sense-Making: A framework for making 
informed and critical meaning with AI outputs.
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📧 Contact

For questions or feedback about this framework, please open an issue in this repository.

## 🙏 Acknowledgments

- Framework created by R. Horst (2025)
- Built with React and Lucide React icons
- Designed for educational and research purposes

---

**Note**: This is an educational tool designed to promote critical thinking about AI systems. It is not affiliated with any specific AI company or platform.
