import { Agent, AgentCapability } from '../../domain/entities/Agent';
import { IAgentRepository } from '../../domain/interfaces/IAgentRepository';

export interface CreateAgentDTO {
  name: string;
  capabilities: AgentCapability[];
}

export class CreateAgentUseCase {
  constructor(private readonly agentRepository: IAgentRepository) {}

  async execute(dto: CreateAgentDTO): Promise<Agent> {
    const agent = new Agent(
      crypto.randomUUID(),
      dto.name,
      dto.capabilities,
    );

    await this.agentRepository.save(agent);
    return agent;
  }
}