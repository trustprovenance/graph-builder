import { Store } from "n3";
import { MapperRegistry } from "./mapper-registry";

type TData = {
  type: string[];
  [key: string]: any;
};

type GraphBuilderProps = {
  readonly registry: MapperRegistry;
};

export class GraphBuilder {
  private store: Store = new Store();
  private registry: MapperRegistry;

  constructor({ registry }: GraphBuilderProps) {
    this.registry = registry;
  }

  public addNode(data: TData) {
    const mappers = data.type.map((type) => this.registry.getMapper(type));
    mappers.forEach((mapper) => mapper.map(data, this.store));
  }

  public getGraph() {
    return this.store;
  }
}
