import { Agent } from '../entities/Agent';

export interface IAgentRepository {
  findById(id: string): Promise<Agent | null>;
  save(agent: Agent): Promise<void>;
  findAll(): Promise<Agent[]>;
  delete(id: string): Promise<void>;
}