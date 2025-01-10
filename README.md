# Architect Project

Welcome to **Architect**, an advanced AI tool for building modular agents, plugins, and orchestrators. This project, maintained by **Coding Butter LLC**, is designed to empower developers to create scalable, extensible systems for complex workflows.

---

## **Overview**

Architect is a monorepo containing:

- **Frontend**: A React-based interface for interacting with agents and plugins.
- **Backend**: A Node.js server for managing orchestrators, agents, and workflows.
- **Agents**: Modular, task-specific entities capable of utilizing plugins and tools.
- **Plugins**: Extensible modules to enhance agent functionality.

The project also includes a **Dockerized environment** for seamless setup and deployment.

---

## **Features**

- **Modular Architecture**: Build custom agents, plugins, and tools with ease.
- **Scalable Framework**: Orchestrate complex workflows with reusable components.
- **Extensible Design**: Integrate external APIs and services through plugins.
- **Developer-Friendly**: Includes comprehensive documentation and examples.

---

## **Getting Started**

Follow these steps to set up Architect on your local machine.

### **Prerequisites**

- **Node.js** (v16 or later)
- **Docker** and **Docker Compose**
- **Git**

### **Clone the Repository**

```bash
git clone https://github.com/codingbutter/architect.git
cd architect
```

### **Run the Application**

Start the Dockerized environment:

```bash
docker-compose up
```

Once the services are running:

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:5000](http://localhost:5000)

---

## **Repository Structure**

```plaintext
architect/
├── packages/
│   ├── frontend/       # React frontend application
│   ├── server/         # Node.js backend server
│   ├── agents/         # Modular agents
│   ├── plugins/        # Extendable plugins for agents
├── docs/               # Documentation files
├── docker-compose.yml  # Docker Compose setup
├── Dockerfile          # Dockerfile for the core environment
└── README.md           # Project overview and setup guide
```

---

## **Documentation**

Detailed documentation is available in the [docs/](./docs) folder and on the [GitHub Pages site](https://codingbutter.github.io/architect).

Explore:

- [System Architecture](./docs/system_architecture.md)
- [Agent Workflow](./docs/agent_workflow.md)
- [Plugin System](./docs/plugin_system.md)
- [Quickstart Guide](./docs/quickstart.md)
- [Advanced Development](./docs/advanced_development.md)

---

## **Contributing**

We welcome contributions to Architect! To get started:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a detailed description of your changes.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## **Contact**

For questions or support, reach out to **Coding Butter LLC** at [contact@codingbutter.com](mailto:contact@codingbutter.com).

---

## **Acknowledgments**

- **Lead Developer**: Jamie Nichols
- **Contributor**: Caleb Barnes (potential)

Thank you for using Architect! Together, let's build something incredible.
