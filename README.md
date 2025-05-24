### 🧪 MediCare - A Collaborative Drug Discovery Platform :
  ![medicare banner](https://github.com/user-attachments/assets/b683254e-b426-4bb0-9f90-a8eeda17c9ea)
  
   
### ♠️ Purpose: 
 Empowering researchers, educators, and contributors in the field of drug discovery through molecular visualization, real-time collaboration, and data-driven insights.

### 📖 Table of Contents: 
1. [🔬 About MediCare](#description)
2. [🛠 Features](#features)
3. [📸 Screenshots](#screenshots)
4. [🚀 Tech Stack](#techstack)
5. [📦 Installation](#install)
6. [🔧 Usage](#usage)
7. [🤝 Contributing](#contribution)
8. [📜 License](#license)
9. [📬 Contact](#contact)

## <a name="description"> 🔬 About MediCare: </a>
MediCare is an open-source platform designed to facilitate drug discovery and molecular research. It provides a Molecule Bank where researchers can visualize compounds using SMILE technology, a Records Section storing essential chemical data, and a real-time communication space for researchers to collaborate.
Mainly for: 
✅ Researchers in pharmaceuticals & drug discovery
✅ Educators teaching chemical sciences
✅ Contributors interested in computational chemistry
✅ Open-source enthusiasts in healthcare & chemistry

## <a name="features"> 🛠 Features: </a>
 -  🧪 Molecule Bank – Visualize chemical compounds using SMILE technology.
 -  📑 Comprehensive Compound Records – Access compound name, weight, structure, and chemical properties.
 -  💬 Live Chat & Group Meetings – Collaborate with other researchers in real time.
 -  🔍 Advanced Search – Find molecules by name, weight, or structure.
 -  🔗 Open Contribution – Researchers can add, edit, and validate molecular data.

## <a name="screenshots"> 📸 Screenshots: </a>

 ## Dashboard: 
  ![image](https://github.com/user-attachments/assets/e3d5171f-41a1-4e54-88ba-1fd815b412b3)
  
 ## 🧪 Molecule Bank: 
   ![molecule bank page ](https://github.com/user-attachments/assets/1cd5b290-9477-4988-b5da-99984b70787b)

 ## 📑 Comprehensive Compound Records: 
  ![research records page ](https://github.com/user-attachments/assets/f6199c38-439b-4192-8c7e-e9c003859a54)

 ## 💬 Live Chat & Group Meetings: 
   ![image](https://github.com/user-attachments/assets/eea720d6-51c5-4d95-9b02-5a0af94d950b)
 

## <a name="techstack"> 🚀 Tech Stack: </a>
     
  <div>
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="nodejs" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-NVIDIA_NIM-black?style=for-the-badge&logoColor=white&logo=nvidia&color=76B900" alt="nvidia-neMo" />
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="reactjs" />
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />
    <img src="https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink" alt="jwt" />
  </div>


## <a name="install">📦 Installation: </a>

Follow these steps to set up the project locally on your machine.

### *🔧 Prerequisites:*

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)
  

### ⬇ Clone Repository:

```bash
git clone https://github.com/your-username/MediCare.git
cd MediCare
```

### 📌 Install Dependencies:

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

NEXT_PUBLIC_API_BASE_URL= http://localhost:3000

RESEND_KEY= 'your-resend-api-key'

NEXT_NVIDIA_URL=your-nvidia-model-url
```

### 🚀 Start the Application:

```bash
npm run dev
Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
```

## <a name="usage"> 🔧 Usage: </a> 
1️⃣ Browse & Search for molecules using SMILE-based visualization.
2️⃣ Access Chemical Records – Get compound properties like weight, structure, and name.
3️⃣ Collaborate in Real-time – Join live chat rooms & meetings with other researchers.
4️⃣ Contribute New Compounds – Add and validate new molecular data.

## <a name="contribution"> 🤝 Contributing:  </a>
  🔬 Contributions are highly encouraged! If you're a researcher, educator, or developer, feel free to improve MediCare.
```
Fork the repository.
Create a new branch (git checkout -b feature-name).
Commit your changes (git commit -m "Added new feature").
Push to your branch (git push origin feature-name).
Open a Pull Request.
```
## 🛂 Contribution Guidelines: 

##  📌Reporting Issues:

Search for existing issues: Before creating a new issue, search the issue tracker to see if the problem has already been reported. Provide clear and concise information: When creating a new issue, please include as much detail as possible, such as: Clear description of the problem Steps to reproduce the issue Expected behavior Actual behavior Screenshots or logs (if applicable) Use issue templates: If available, use the provided issue templates to structure your report.

## 📌Submitting Pull Requests:

Fork the repository: Create a fork of the project on your GitHub account. Create a new branch: Create a new branch based on the main branch or a feature branch. Make changes: Implement your changes and commit them with clear commit messages. Push changes to your fork: Push your changes to your forked repository. Open a Pull Request: Create a pull request from your branch to the main repository. Provide details: Clearly describe the changes you've made and the benefits they bring. Address code review feedback: Be open to feedback and make necessary changes.

## 📌Testing:

Write unit tests for any new features or bug fixes. Ensure existing tests pass after your changes.

## <a name="license"> 📜 License: </a> 
 
 MediCare is licensed under the MIT License – open for research and educational purposes.

## <a name="molecule-data">🧬 Molecule Data Processing</a>

This section covers the medicare data processing pipeline, including loading protein structure file (e.g., PDB format), performing molecular docking simulations, and visualizing the result.

## 📌 Molecule Structure Input

Users can upload PDB files for molecules structures, which will then be processed by NVIDIA NeMo's molecule-folding model.

##📌 Docking Simulation

Using molecular docking algorithms, the system predicts how small molecules (such as drug candidates) bind to molecules target.

🚀 Let's revolutionize drug discovery together! 🌍💊


## <a name="contact"> 📬 Contact: </a>

🔗 GitHub: CodeWithRajDeep

🌐 Website: https://deepraj-portfolio-red.vercel.app


