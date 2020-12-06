export type OptionalKeys<T> = {
  [P in keyof T]: {} extends Pick<T, P> ? P : never;
}[keyof T];
