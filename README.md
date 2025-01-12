<div align="center">
  <br />
  
  <br />

  <div>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-NVIDIA_NIM-black?style=for-the-badge&logoColor=white&logo=nvidia&color=76B900" alt="nvidia-neMo" />
  </div>

  <h3 align="center">MediCare- Research Management platform</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🧬 [Protein Data Processing](#molecule-data)
6. 🚀 [More](#more)


## <a name="introduction">🤖 Introduction</a>

**MediCare** is a research discovery and  prediction tool built with the latest in machine learning and natural language processing (NLP) technology. Powered by NVIDIA NIM and molecule structure prediction models, this project enables users to simulate molecular interactions and predict molecule structures.

The platform is designed to help researchers accelerate drug discovery by leveraging cutting-edge AI models for protein folding, docking, and molecular dynamics.

## <a name="tech-stack">⚙️ Tech Stack</a>

- **Next.js**
- **TypeScript**
- **NVIDIA** (for molecule structure prediction)
- **Tailwind CSS**
- **React Chart.js** (for visualizing protein data)

## <a name="features">🔋 Features</a>

👉 **Molecule Structure Prediction**: Predicts 2D chemical compounds structures using NVIDIA models.

👉 **Collaborative Research**: Researches can create groups and colloborate with other research online

👉 **Responsive Design**: Ensures seamless experience across all devices, from desktops to mobile.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

### **Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### **Cloning the Repository**

```bash
git clone 
cd proteinbind
```

### **Installation**

Install the project dependencies using npm:

```bash
npm install
```

### **Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_NVIDIA_API_KEY=your-nvidia-api-key

ABLY_API_KEY='your-ably-api-key'

MONGODB_URL='your-mongodb-url'

NEXT_PUBLIC_API_BASE_URL=http://localhost:3000

RESEND_KEY='your-resend-api-key'
```

### **Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="molecule-data">🧬 Molecule Data Processing</a>

This section covers the protein data processing pipeline, including loading protein structure files (e.g., PDB format), performing molecular docking simulations, and visualizing the result.

### **Molecule Structure Input**

Users can upload PDB files for molecule structures, which will then be processed by NVIDIA NeMo's molecule-folding models.

### **Docking Simulation**

Using molecular docking algorithms, the system predicts how small molecules (such as drug candidates) bind to molecule target.

