declare module '*.svg' {
  const url: string;
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default url;
}

declare module '*.png' {
  const url: string;
  export default url;
}
