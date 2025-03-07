export interface AgentCapability {
  name: string;
  description: string;
  parameters: Record<string, unknown>;
}

export class Agent {
  constructor(
    private readonly id: string,
    private readonly name: string,
    private readonly capabilities: AgentCapability[],
  ) {}

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getCapabilities(): AgentCapability[] {
    return [...this.capabilities];
  }

  public hasCapability(capabilityName: string): boolean {
    return this.capabilities.some((cap) => cap.name === capabilityName);
  }
}