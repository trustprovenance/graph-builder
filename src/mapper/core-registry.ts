import { MapperRegistry } from "../mapper-registry";
import { DigitalProductPassportMapper } from "./digital-product-passport";

export class CoreRegistry extends MapperRegistry {
  constructor() {
    super();

    this.mappers.set(
      "DIGITAL_PRODUCT_PASSPORT",
      new DigitalProductPassportMapper(),
    );
  }
}
