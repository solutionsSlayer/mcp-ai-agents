import { Request, Response } from 'express';
import { CreateAgentUseCase, CreateAgentDTO } from '../../application/use-cases/CreateAgentUseCase';

export class AgentController {
  constructor(private readonly createAgentUseCase: CreateAgentUseCase) {}

  async createAgent(req: Request, res: Response): Promise<void> {
    try {
      const dto: CreateAgentDTO = req.body;
      const agent = await this.createAgentUseCase.execute(dto);
      res.status(201).json(agent);
    } catch (error) {
      res.status(400).json({ error: 'Failed to create agent' });
    }
  }
}