import * as vscode from 'vscode';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, doc, deleteDoc, updateDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCOoQ4JrNKGJUKMtK4Hff9eRWpMHsG-eOs",
  authDomain: "team-todo-ff249.firebaseapp.com",
  projectId: "team-todo-ff249",
  storageBucket: "team-todo-ff249.firebasestorage.app",
  messagingSenderId: "15366276456",
  appId: "1:15366276456:web:e7c75af745b412bda102dd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function activate(context: vscode.ExtensionContext) {
    const todoProvider = new TodoTreeDataProvider();
    vscode.window.registerTreeDataProvider('teamTodoList', todoProvider);

    let addTaskCmd = vscode.commands.registerCommand('team-todo.addTask', async () => {
        const taskTitle = await vscode.window.showInputBox({ prompt: 'New Team Task' });
        if (taskTitle) {
            await addDoc(collection(db, 'tasks'), {
                title: taskTitle,
                completed: false,
                createdAt: new Date()
            });
        }
    });

    let completeTaskCmd = vscode.commands.registerCommand('team-todo.completeTask', async (node: TaskItem) => {
        if (node.id) {
            await updateDoc(doc(db, 'tasks', node.id), {
                completed: !node.isCompleted
            });
        }
    });

    let deleteTaskCmd = vscode.commands.registerCommand('team-todo.deleteTask', async (node: TaskItem) => {
        if (node.id) {
            await deleteDoc(doc(db, 'tasks', node.id));
        }
    });

    context.subscriptions.push(addTaskCmd, completeTaskCmd, deleteTaskCmd);
}

class TodoTreeDataProvider implements vscode.TreeDataProvider<TaskItem> {
    private _onDidChangeTreeData: vscode.EventEmitter<TaskItem | undefined | void> = new vscode.EventEmitter<TaskItem | undefined | void>();
    readonly onDidChangeTreeData: vscode.Event<TaskItem | undefined | void> = this._onDidChangeTreeData.event;

    private tasks: {id: string, title: string, completed: boolean}[] = [];

    constructor() {
        const q = query(collection(db, 'tasks'), orderBy('createdAt', 'desc'));
        onSnapshot(q, (snapshot) => {
            this.tasks = snapshot.docs.map(doc => ({ 
                id: doc.id, 
                title: doc.data().title, 
                completed: doc.data().completed || false 
            }));
            this._onDidChangeTreeData.fire();
        });
    }

    getTreeItem(element: TaskItem): vscode.TreeItem {
        return element;
    }

    getChildren(): Thenable<TaskItem[]> {
        return Promise.resolve(this.tasks.map(t => new TaskItem(t.title, t.id, t.completed, vscode.TreeItemCollapsibleState.None)));
    }
}

class TaskItem extends vscode.TreeItem {
    constructor(
        public readonly label: string, 
        public readonly id: string,
        public readonly isCompleted: boolean,
        public readonly collapsibleState: vscode.TreeItemCollapsibleState
    ) {
        super(label, collapsibleState);
        this.contextValue = 'taskItem';
        this.description = isCompleted ? 'Done' : '';
        this.iconPath = new vscode.ThemeIcon(isCompleted ? 'pass-filled' : 'circle-outline');
    }
}

export function deactivate() {}