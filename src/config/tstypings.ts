import type { ConfigFileContents } from "eilos";
import type { PresetRuntimeContext } from "../options";

export default function (ctx: PresetRuntimeContext): ConfigFileContents {
  return [
    'declare module "*.react.svg" {',
    "  const content: React.FunctionComponent<React.SVGAttributes<SVGSVGElement>>",
    "  export default content;",
    "}",
    'declare module "*.png" {',
    "  const content: any;",
    "  export default content;",
    "}",
    'declare module "*.gif" {',
    "  const content: any;",
    "  export default content;",
    "}",
    'declare module "*.jpg" {',
    "  const content: any;",
    "  export default content;",
    "}",
    'declare module "*.svg" {',
    "  const content: any;",
    "  export default content;",
    "}",
  ].join("\n");
}
