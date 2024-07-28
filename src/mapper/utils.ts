export const ex = (str: string) => `http://trustprovenance.io/ns#${str}`;

export const stripEx = (str: string) =>
  str.replace("http://trustprovenance.io/ns#", "");

export const rdf = (str: string) =>
  `http://www.w3.org/1999/02/22-rdf-syntax-ns#${str}`;
