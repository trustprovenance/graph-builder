import { Quad } from "n3";

const findNode = (
  quads: Quad[],
  subId: string,
  predId: string,
  objectId: string,
): Quad | undefined => {
  return quads?.find(
    (q) =>
      q.subject.id == subId &&
      q.predicate.id == predId &&
      q.object.id == objectId,
  );
};

export const assertQuadDefine = (
  quads: Quad[],
  subId: string,
  predId: string,
  objectId: string,
) => {
  try {
    expect(findNode(quads, subId, predId, objectId)).toBeDefined();
  } catch (error) {
    console.log(`Not found: ${subId}, ${predId}, ${objectId}`);
    throw error;
  }
};
