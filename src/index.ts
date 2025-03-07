import 'reflect-metadata';
import express from 'express';
import { InMemoryAgentRepository } from './infrastructure/persistence/InMemoryAgentRepository';
import { CreateAgentUseCase } from './application/use-cases/CreateAgentUseCase';
import { AgentController } from './presentation/api/AgentController';

const app = express();
app.use(express.json());

// Dependencies
const agentRepository = new InMemoryAgentRepository();
const createAgentUseCase = new CreateAgentUseCase(agentRepository);
const agentController = new AgentController(createAgentUseCase);

// Routes
app.post('/agents', (req, res) => agentController.createAgent(req, res));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});