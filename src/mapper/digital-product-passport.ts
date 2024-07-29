import { DataFactory, Store } from "n3";
import { Mapper } from "../mapper-registry";
import { DigitalProductPassport } from "../types/digital-product-passport";
import { ex, rdf } from "./utils";

export class DigitalProductPassportMapper
  implements Mapper<DigitalProductPassport>
{
  map(data: DigitalProductPassport, store: Store): void {
    store.addQuad(
      DataFactory.quad(
        DataFactory.namedNode(ex(data.id)),
        DataFactory.namedNode(rdf("type")),
        DataFactory.namedNode(ex("DIGITAL_PRODUCT_PASSPORT")),
      ),
    );
  }
}
