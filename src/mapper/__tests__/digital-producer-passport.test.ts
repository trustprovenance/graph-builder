import { Store } from "n3";
import { assertQuadDefine } from "../../test-utils";
import { DigitalProductPassport } from "../../types/digital-product-passport";
import { DigitalProductPassportMapper } from "../digital-product-passport";
import { ex, rdf } from "../utils";

describe("digital-product-passport", () => {
  let mapper: DigitalProductPassportMapper;

  // Boiler plate test, to be properly resolved.
  const payload: Partial<DigitalProductPassport> = {
    id: "test-id",
    type: ["DigitalProductPassport", "VerifiableCredential"],
  };

  beforeEach(() => {
    mapper = new DigitalProductPassportMapper();
  });

  it("should extract a DIGITAL_PRODUCT_PASSPORT type", () => {
    const store = new Store();
    mapper.map(payload as DigitalProductPassport, store);

    const quads = store.getQuads(undefined, undefined, undefined, undefined);

    assertQuadDefine(
      quads,
      ex("test-id"),
      rdf("type"),
      ex("DIGITAL_PRODUCT_PASSPORT"),
    );
  });
});
