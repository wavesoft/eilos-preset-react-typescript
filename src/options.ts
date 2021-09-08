import { DefinePresetOptions, PresetOptionsRuntimeContext } from "eilos";

/**
 * User-configurable options for this preset
 */
export const Options = DefinePresetOptions({
  hot: {
    defaultValue: false,
    description: "Enable hot module loading in the emitted source",
    schema: {
      type: "boolean",
    },
  },
  embedAssets: {
    defaultValue: false,
    description:
      "Enable this flag to embed all assets as base64 blobs into the bundle",
    schema: {
      type: "boolean",
    },
  },

  entry: {
    defaultValue: "./src/index.ts",
    description: "The entry point(s) to the project sources",
    schema: [
      {
        type: "string",
      },
      {
        values: {
          type: "string",
        },
      },
    ],
  },

  library: {
    defaultValue: false,
    description:
      "When set to string instead of 'false', will build a library bundle",
    schema: [
      {
        type: "string",
      },
      {
        type: "boolean",
      },
    ],
  },

  output: {
    defaultValue: "[id].js",
    description: "The name of the output bundle",
    schema: {
      type: "string",
    },
  },

  outputDir: {
    defaultValue: "./dist",
    description: "The directory were to emit the output bundle",
    schema: {
      type: "string",
    },
  },

  staticSrcDir: {
    defaultValue: "./static",
    description:
      "Specifies the static directory that -if exists- will be copied to the build directory",
    schema: {
      type: "string",
    },
  },

  externals: {
    defaultValue: [],
    description:
      "An array of packages from the 'node_modules' directory to include as an external dependency" +
      " instead of bundling the resource into the generated bundle.",
    schema: {
      elements: {
        type: "string",
      },
    },
  },

  sourceModules: {
    defaultValue: [],
    description:
      "An array of packages from 'node_module' modules to include in the processing chain when resolving. " +
      "This is useful when sourcing a typescript source package that must be pre-processed.",
    schema: {
      elements: {
        type: "string",
      },
    },
  },

  prettierFilePatterns: {
    defaultValue: ["src/**/*.js", "src/**/*.ts", "**/*.md"],
    description: "An array of file patterns to consider for the linting phase.",
    schema: {
      elements: {
        type: "string",
      },
    },
  },

  advancedChunkSplitting: {
    defaultValue: false,
    description:
      "When specified it enables dynamic chunk splitting on webpack. " +
      "You can set this to `true` to enable maximum possible chunk splitting, or it can " +
      "be a path to a .js file that exports a function to use for post-build processing of " +
      "the entry points",
    schema: [
      {
        type: "string",
      },
      {
        type: "boolean",
      },
    ],
  },

  //////////////////////////////////////
  // Deprecated parameters
  //////////////////////////////////////
  webpack: {
    deprecated:
      "You should never override this configuration, instead you should create a custom preset for your needs",
    description: "Arbitrary configuration to forward to webpack as-is",
    schema: {
      properties: {},
      additionalProperties: true,
    },
  },
  tsconfig: {
    deprecated:
      "You should never override this configuration, instead you should create a custom preset for your needs",
    description: "Arbitrary configuration to forward to typescript as-is",
    schema: {
      properties: {},
      additionalProperties: true,
    },
  },
  jest: {
    deprecated:
      "You should never override this configuration, instead you should create a custom preset for your needs",
    description: "Arbitrary configuration to forward to jest as-is",
    schema: {
      properties: {},
      additionalProperties: true,
    },
  },
  eslint: {
    deprecated:
      "You should never override this configuration, instead you should create a custom preset for your needs",
    description: "Arbitrary configuration to forward to eslint as-is",
    schema: {
      properties: {},
      additionalProperties: true,
    },
  },
  prettier: {
    deprecated:
      "You should never override this configuration, instead you should create a custom preset for your needs",
    description: "Arbitrary configuration to forward to prettier as-is",
    schema: {
      properties: {},
      additionalProperties: true,
    },
  },
});

export type GlobalRuntimeContext = PresetOptionsRuntimeContext<typeof Options>;
