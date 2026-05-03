# 2-DO | Team Task Manager

A minimal VS Code extension for real-time team collaboration.

## EXTENSION (in VSC)

![alt text](<Screenshot 2026-05-03 204813.png>)

## FIREBASE POV

![alt text](<Screenshot 2026-05-03 204133.png>)

![alt text](<Screenshot 2026-05-03 204223.png>)

![alt text](<Screenshot 2026-05-03 204231.png>)

## How this helps me as a dev 
- I like to work together with people everytime,me and my friends as a group,we do multiple projects and to keep track of our progress ,this extension will be a great help to me and my teamates, we dont have to worry about going to other platforms to check the to-do list ,through this extension it can accessed any time we want ,tht too in vsc ,where we all code.

## MY MOTIVATION
i am a guy who uses task-completion type of app a lot and i have to switch every time to that app from vsc and sometimes this makes me lose pace,so i decided to combine todo app with vsc and that has resulted in this extension.

## 🚀 Features

*   **Team Isolation**: Use unique "Join Codes" to create private task environments for your specific group.
*   **Real-time Sync**: Tasks update instantly for all team members without needing to refresh VS Code.
*   **Persistent Login**: Your Team ID is saved locally via `globalState`, so you stay connected to your team every time you open the editor.
*   **Regional Performance**: Optimized for the **Asia-Southeast1** region to ensure low-latency updates for users in India and Southeast Asia.

## 🛠 Setup & Installation

### 1. Database Configuration
The extension is pre-configured to connect to the Firebase project `team-todo-ff249`. It utilizes the regional database URL:
`https://team-todo-ff249-default-rtdb.asia-southeast1.firebasedatabase.app/`

### 2. Joining a Team
To start collaborating, you must join a team:
1.  Open the **Team To-Do** explorer in the Activity Bar.
2.  Click the **Join Team** (Person) icon at the top of the view.
3.  Enter a unique code (e.g., `it-project-group-1`).
4.  Share this code with your teammates so they can see the same list.

### 3. Managing Tasks
*   **Add Task**: Click the **+** icon and enter a task title.
*   **Complete Task**: Use the inline checkmark icon to toggle the status.
*   **Delete Task**: Use the trash icon to remove tasks from the shared list.

## 📁 Technical Overview

*   **Language**: TypeScript
*   **Backend**: Firebase Firestore (NoSQL)
*   **State Management**: VS Code `ExtensionContext.globalState` for persistent Team IDs.
*   **Data Architecture**:
    ```text
    teams/
    └── {teamId}/
        └── tasks/
            └── {taskId}: { title, completed, createdAt }
    ```

## 📜 Development Commands

*   `npm run compile`: Build the TypeScript source into the `dist` folder.
*   `npx @vscode/vsce package`: Generate the `.vsix` file for local distribution and installation.

###  Manual Installation (VSIX)
* Download the `.vsix` installer from the **[GitHub Releases](https://github.com/shanmugesh10/2-DO-list/releases)** section.
* In VS Code, click the **three dots (...)** in the Extensions pane.
* Select **Install from VSIX...** and choose the downloaded file.