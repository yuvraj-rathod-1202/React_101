# React 101 - Interactive Learning Platform

Welcome to React 101! This is an interactive learning platform that combines comprehensive React tutorials with hands-on coding exercises and quizzes. Perfect for beginners starting their React journey.

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Git](https://git-scm.com/)
- A code editor (VS Code recommended)

## 📥 How to Fork and Run Locally

### 1. Fork the Repository
1. Click the **Fork** button at the top right of this repository
2. This creates a copy of the repository in your GitHub account

### 2. Clone Your Fork
```bash
# Replace 'your-username' with your GitHub username
git clone https://github.com/your-username/React_101.git
cd React_101
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start the Development Server
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000) 🎉

## 📚 What's Inside

- **Interactive Slides**: Learn React concepts with beautiful, interactive presentations
- **Quiz Application**: Test your knowledge with hands-on React quizzes
- **Code Examples**: Real-world examples covering all React fundamentals

## 🎯 TODOs

Here are the current tasks that need to be completed:

- [ ] **Create QuestionCard component** - Design and implement a reusable QuestionCard component for the quiz
- [ ] **Add Logic to show score** - Implement functionality to display final score when quiz is completed
- [ ] **Design App.css** - Create comprehensive styling for the main App component
- [ ] **Complete handleAnswerClick function** - Implement the logic for handling answer clicks in the quiz

## 🤝 How to Contribute (Pull Request Guide)

### Step 1: Complete the TODOs
- Look at the TODOs above and Solve them

### Step 2: Create a Feature Branch
```bash
# Make sure you're on the main branch
git checkout main
git pull origin main

# Create a new branch for your feature
git checkout -b feature/your-feature-name
# Example: git checkout -b feature/add-quiz-timer
```

### Step 3: Make Your Changes
- Write clean, readable code
- Follow existing code style and conventions
- Test your changes thoroughly
- Add comments where necessary

### Step 4: Commit Your Changes
```bash
git add .
git commit -m "Add meaningful commit message"
# Example: git commit -m "Add timer functionality to quiz questions"
```

### Step 5: Push to Your Fork
```bash
git push origin feature/your-feature-name
```

### Step 6: Create a Pull Request
1. Go to your fork on GitHub
2. Click **Pull Request** button
3. Choose your feature branch
4. Write a clear title and description:
   - What changes did you make?
   - Which TODO does it address?
   - How to test your changes?
5. Click **Create Pull Request**

### Pull Request Guidelines
- **Title**: Be descriptive (e.g., "Add timer functionality to quiz")
- **Description**: Explain what you changed and why
- **Screenshots**: Include screenshots for UI changes
- **Testing**: Describe how to test your changes

## 📁 Project Structure

```
React_101/
├── public/                 # Static files
├── src/
│   ├── components/         # React components
│   ├── data.js            # Quiz questions data
│   ├── App.js             # Main application component
│   └── index.js           # Entry point
├── _layouts/              # Jekyll layouts for slides
├── slides.md              # React tutorial content
├── index.md               # Jekyll homepage
└── README.md              # This file
```

## 🔧 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner

### `npm run build`
Builds the app for production

## 🎓 Learning Path

1. **Read the Slides**: Start with `/slides/` to learn React fundamentals
2. **Practice with Quiz**: Test your knowledge with the interactive quiz
3. **Explore the Code**: Check out the source code to see React in action
4. **Contribute**: Pick a TODO and contribute back to the project!

## 🐛 Found a Bug?

1. Check if it's already reported in [Issues](https://github.com/yuvraj-rathod-1202/React_101/issues)
2. If not, create a new issue with:
   - Clear description of the bug
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

## 💬 Questions or Suggestions?

- Open an [Issue](https://github.com/yuvraj-rathod-1202/React_101/issues)
- Start a [Discussion](https://github.com/yuvraj-rathod-1202/React_101/discussions)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🌟 Show Your Support

If you found this helpful, please ⭐ star this repository and share it with others!

---

**Made with ❤️ by [Yuvraj Rathod](https://github.com/yuvraj-rathod-1202)**
