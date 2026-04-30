# 2-DO | Team Task Manager

A minimal VS Code extension for real-time team collaboration.

## How this helps me as a dev
- I like to work together with people everytime,me and my friends as a group,we do multiple projects and to keep track of our progress ,this extension will be a great help to me and my teamates, we dont have to worry about going to other platforms to check the to-do list ,through this extension it can accessed any time we want ,tht too in vsc ,where we all code.

## 🛠 Setup & Development

- **Install Deps:** `npm install`
- **Build:** `npm run compile`
- **Test:** Press `F5` to open the Extension Development Host.

## ☁️ Firebase Config

1. Create a project at [Firebase Console](https://console.firebase.google.com/).
2. Enable **Firestore Database** in **Test Mode**.
3. Copy your `firebaseConfig` into `src/extension.ts`.

## 📦 Distribution

To share this extension as a `.vsix` installer:

1. **Install tool:** `npm install -g @vscode/vsce`
2. **Package:** `vsce package`
3. **Install:** Drag the `.vsix` file into your VS Code Extensions view.

## ⌨️ Commands

- `Add Task`: Click the **+** in the sidebar.
- `Complete`: Click the **Check** icon on hover (toggles status).
- `Delete`: Click the **Trash** icon to remove from cloud.

###  Manual Installation (VSIX)
* Download the `.vsix` installer from the **[GitHub Releases](https://github.com/shanmugesh10/2-DO-list/releases)** section.
* In VS Code, click the **three dots (...)** in the Extensions pane.
* Select **Install from VSIX...** and choose the downloaded file.