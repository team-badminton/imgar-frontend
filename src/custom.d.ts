declare module '*.svg' {
  const url: string;
  interface SVGProps {
    title?: string;
    titleId?: string;
  }
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default url;
}

declare module '*.png' {
  const url: string;
  export default url;
}
