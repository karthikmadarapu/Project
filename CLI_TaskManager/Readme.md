# 🚀 Robust CLI Task/Todo Manager

A resilient, modular Command Line Interface (CLI) task manager built with native Node.js. It features safe file-system persistence, robust error handling, and clean separation of concerns using a three-file architecture.

---

## 📂 Project Architecture

The project follows a clean, layered architectural pattern to separate data handling, business logic, and CLI input routing:

```text
CLI_TaskManager/
│
├── storage.js        # Layer 1: Data Persistence (fs module, try...catch, JSON parsing)
├── taskController.js # Layer 2: Core Business Logic (.map, .filter, destructuring)
└── todo.js           # Layer 3: Entry Point & CLI Interface (process.argv routing)
```

### File Responsibilities:
1. **`storage.js`**: Handles reading from and writing to the local `tasks.json` file. Uses `try...catch` blocks to gracefully handle missing files or corrupt data on the first run.
2. **`taskController.js`**: Contains the core application logic. Uses modern JavaScript ES6 features like `.map()`, `.filter()`, the spread operator (`...`), and object destructuring.
3. **`todo.js`**: The main execution entry point. Parses terminal arguments using `process.argv` and routes them to the correct controller functions via a `switch` statement.

---

## ✨ Features & Skills Used

* **Safe File Persistence**: Automatically initializes and updates a local `tasks.json` database using Node.js's native `fs` module.
* **Resilient Error Handling (`try...catch`)**: Intercepts missing file errors on initial execution to prevent crashing and automatically provisions a clean state.
* **Immutable State Updates (`.map` & Spread)**: Toggles task completion states safely without mutating the original task objects directly.
* **Declarative Filtering (`.filter`)**: Removes specific tasks cleanly by excluding matching IDs.
* **Modern ES6 Syntax**: Implements object destructuring during print/formatting loops and the rest operator (`...`) for command arguments.

---

## 🛠️ Installation & Setup

1. **Clone the repository** (or navigate to your local directory):
   ```bash
   cd CLI_TaskManager
   ```
2. Ensure you have **Node.js** installed (v14+ recommended).
3. Run the application using the entry point file `todo.js`.

---

## 📖 Usage & Commands

| Command | Description | Example |
| :--- | :--- | :--- |
| `list` | Displays all current tasks with formatted completion statuses (`[ ]` / `[✓]`). | `node todo.js list` |
| `add` | Creates a new task with an auto-incremented ID. | `node todo.js add "Learn Node.js modules"` |
| `toggle` | Flips a task's completed status between true and false by ID. | `node todo.js toggle 1` |
| `delete` | Permanently removes a task from storage by ID. | `node todo.js delete 1` |

---

## ⚙️ How It Works Under the Hood

1. **Invocation**: Running `node todo.js add "Task Name"` hands execution to Node.js.
2. **Module Chaining**: `todo.js` loads `taskController.js` via `require()`, which in turn loads `storage.js`.
3. **Argument Parsing**: `process.argv` strips the execution paths, isolating the command (`add`) and arguments (`["Task", "Name"]`), which are joined back into a single string.
4. **Execution**: The controller processes the task array, calls `storage.js` to save the state, and `fs.writeFileSync` commits the changes to `tasks.json`.
