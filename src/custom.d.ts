declare module '*.svg' {
  const url: string;
  interface SVGRProps {
    title?: string;
    titleId?: string;
  }
  export const ReactComponent: React.FC<SVGRProps & React.SVGProps<SVGSVGElement>>;
  export default url;
}

declare module '*.png' {
  const url: string;
  export default url;
}
