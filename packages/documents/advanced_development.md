---
layout: default
title: System Architecture
---

## Custom Agents

Learn how to create and integrate custom agents into the system.

### Steps

1. Create a new agent package:

   ```bash
   mkdir packages/agents/my-agent
   cd packages/agents/my-agent
   ```

2.Extend the base agent:

```typescript
import BaseAgent from "@architect/core-agent"

class MyAgent extends BaseAgent {
  async onHandle(context) {
    console.log("Handling task", context)
    // Custom logic here
  }
}

export default MyAgent
```

3.Register the agent in the orchestrator.

## Debugging Techniques

- Use structured logging to track the flow of tasks and identify errors.
- Enable verbose logging in the orchestrator and agents to gather detailed information.
- Utilize a debugger (e.g., Node.js inspector) to step through agent code during execution.

## Optimizing Agent Performance

- Minimize unnecessary calls to external tools or APIs.
- Cache reusable data to reduce redundant processing.
- Profile the agent's execution using performance monitoring tools to identify bottlenecks.

## Testing Strategies

- Write unit tests for individual agent methods and plugins.
- Use integration tests to verify interactions between agents and the orchestrator.
- Mock external dependencies (e.g., APIs or databases) during testing to isolate behavior.
