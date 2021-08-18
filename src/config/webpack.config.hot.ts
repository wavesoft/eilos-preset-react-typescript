import webpack from "webpack";

import type { ConfigFileContents } from "eilos";
import type { PresetRuntimeContext } from "../options";

export default function (ctx: PresetRuntimeContext): ConfigFileContents {
  return {
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
      hot: true,
    },
  };
}
