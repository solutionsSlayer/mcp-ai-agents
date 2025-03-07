import { Agent } from '../../domain/entities/Agent';
import { IAgentRepository } from '../../domain/interfaces/IAgentRepository';

export class InMemoryAgentRepository implements IAgentRepository {
  private agents: Map<string, Agent> = new Map();

  async findById(id: string): Promise<Agent | null> {
    return this.agents.get(id) || null;
  }

  async save(agent: Agent): Promise<void> {
    this.agents.set(agent.getId(), agent);
  }

  async findAll(): Promise<Agent[]> {
    return Array.from(this.agents.values());
  }

  async delete(id: string): Promise<void> {
    this.agents.delete(id);
  }
}