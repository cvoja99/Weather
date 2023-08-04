type EntriesType = [PropertyKey, unknown][] | (readonly (readonly [PropertyKey, unknown])[])[];

type DeepWritable<ObjT> = { -readonly [P in keyof ObjT]: DeepWritable<ObjT[P]> };
type UnionToIntersection<UnionT> = (UnionT extends unknown ? (k: UnionT) => void : never) extends (k: infer I) => void
  ? I
  : never;

type UnionObjectFromArrayOfPairs<ArrT extends EntriesType> = DeepWritable<ArrT> extends (infer R)[]
  ? R extends [infer key, infer val]
    ? { [prop in key & PropertyKey]: val }
    : never
  : never;
type MergeIntersectingObjects<ObjT> = { [key in keyof ObjT]: ObjT[key] };
type EntriesToObject<ArrT extends EntriesType> = MergeIntersectingObjects<
  UnionToIntersection<UnionObjectFromArrayOfPairs<ArrT>>
>;

// ~~~~~~~~~~~~~~~~~~~~~ Typed Functions ~~~~~~~~~~~~~~~~~~~~~

export function createTypedObjectFromEntries<ArrT extends EntriesType>(arr: ArrT): EntriesToObject<ArrT> {
  return Object.fromEntries(arr) as EntriesToObject<ArrT>;
}
