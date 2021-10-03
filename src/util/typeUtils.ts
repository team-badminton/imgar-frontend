export type TypePrefixer<Type, S extends string> = {
  [Property in keyof Type as `${S}${Capitalize<string & Property>}`]: Type[Property];
};
