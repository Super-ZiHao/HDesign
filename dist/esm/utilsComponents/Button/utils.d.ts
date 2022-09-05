import { TinyColor } from '@ctrl/tinycolor';
export declare const getColor: (color: string) => void;
export declare function darken(color: TinyColor, amount?: number): string;
export declare const useNamespace: (block: string) => {
  cssVarName: (name: string) => string;
  cssVarBlock: (object: Record<string, string>) => Record<string, string>;
  cssVarBlockName: (name: string) => string;
};
export declare function useButtonCustomStyle(
  color: string | undefined,
  dark: boolean,
  plain: boolean,
  disabled: boolean,
): Record<string, string> | undefined;
