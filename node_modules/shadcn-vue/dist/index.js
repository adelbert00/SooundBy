#!/usr/bin/env node

// src/index.ts
import process6 from "node:process";
import { Command as Command4 } from "commander";

// src/commands/add.ts
import { existsSync as existsSync2, promises as fs2, rmSync } from "node:fs";
import process3 from "node:process";
import path4 from "pathe";
import { consola as consola3 } from "consola";
import { colors } from "consola/utils";
import { Command } from "commander";
import ora from "ora";
import prompts from "prompts";
import { z as z3 } from "zod";
import { addDependency, addDevDependency } from "nypm";

// src/utils/transformers/index.ts
import { promises as fs } from "node:fs";
import { tmpdir } from "node:os";
import path from "pathe";
import { Project, ScriptKind } from "ts-morph";

// src/utils/transformers/transform-css-vars.ts
import MagicString from "magic-string";
import { parse } from "@vue/compiler-sfc";
import { SyntaxKind } from "ts-morph";
var transformCssVars = async ({
  sourceFile,
  config,
  baseColor
}) => {
  const isVueFile = sourceFile.getFilePath().endsWith("vue");
  if (config.tailwind?.cssVariables || !baseColor?.inlineColors)
    return sourceFile;
  let template2 = null;
  if (isVueFile) {
    const parsed = parse(sourceFile.getText());
    template2 = parsed.descriptor.template;
    if (!template2)
      return sourceFile;
  }
  sourceFile.getDescendantsOfKind(SyntaxKind.StringLiteral).forEach((node) => {
    if (template2 && template2.loc.start.offset >= node.getPos())
      return sourceFile;
    const value = node.getText();
    const hasClosingDoubleQuote = value.match(/"/g)?.length === 2;
    if (value.search("'") === -1 && hasClosingDoubleQuote) {
      const mapped = applyColorMapping(value.replace(/"/g, ""), baseColor.inlineColors);
      node.replaceWithText(`"${mapped}"`);
    } else {
      const s = new MagicString(value);
      s.replace(/'(.*?)'/g, (substring) => {
        return `'${applyColorMapping(substring.replace(/\'/g, ""), baseColor.inlineColors)}'`;
      });
      node.replaceWithText(s.toString());
    }
  });
  return sourceFile;
};
function splitClassName(className) {
  if (!className.includes("/") && !className.includes(":"))
    return [null, className, null];
  const parts = [];
  const [rest, alpha] = className.split("/");
  if (!rest.includes(":"))
    return [null, rest, alpha];
  const split = rest.split(":");
  const name = split.pop();
  const variant = split.join(":");
  parts.push(variant ?? null, name ?? null, alpha ?? null);
  return parts;
}
var PREFIXES = ["bg-", "text-", "border-", "ring-offset-", "ring-"];
function applyColorMapping(input, mapping) {
  if (input.includes(" border "))
    input = input.replace(" border ", " border border-border ");
  const classNames = input.split(" ");
  const lightMode = /* @__PURE__ */ new Set();
  const darkMode = /* @__PURE__ */ new Set();
  for (const className of classNames) {
    const [variant, value, modifier] = splitClassName(className);
    const prefix = PREFIXES.find((prefix2) => value?.startsWith(prefix2));
    if (!prefix) {
      if (!lightMode.has(className))
        lightMode.add(className);
      continue;
    }
    const needle = value?.replace(prefix, "");
    if (needle && needle in mapping.light) {
      lightMode.add(
        [variant, `${prefix}${mapping.light[needle]}`].filter(Boolean).join(":") + (modifier ? `/${modifier}` : "")
      );
      darkMode.add(
        ["dark", variant, `${prefix}${mapping.dark[needle]}`].filter(Boolean).join(":") + (modifier ? `/${modifier}` : "")
      );
      continue;
    }
    if (!lightMode.has(className))
      lightMode.add(className);
  }
  return [...Array.from(lightMode), ...Array.from(darkMode)].join(" ").trim();
}

// src/utils/transformers/transform-import.ts
var transformImport = async ({ sourceFile, config }) => {
  const importDeclarations = sourceFile.getImportDeclarations();
  for (const importDeclaration of importDeclarations) {
    const moduleSpecifier = importDeclaration.getModuleSpecifierValue();
    if (moduleSpecifier.startsWith("@/lib/registry/")) {
      if (config.aliases.ui) {
        importDeclaration.setModuleSpecifier(
          moduleSpecifier.replace(/^@\/lib\/registry\/[^/]+\/ui/, config.aliases.ui)
        );
      } else {
        importDeclaration.setModuleSpecifier(
          moduleSpecifier.replace(
            /^@\/lib\/registry\/[^/]+/,
            config.aliases.components
          )
        );
      }
    }
    if (moduleSpecifier === "@/lib/utils") {
      const namedImports = importDeclaration.getNamedImports();
      const cnImport = namedImports.find((i) => i.getName() === "cn");
      if (cnImport) {
        importDeclaration.setModuleSpecifier(
          moduleSpecifier.replace(/^@\/lib\/utils/, config.aliases.utils)
        );
      }
    }
  }
  return sourceFile;
};

// src/utils/transformers/transform-sfc.ts
import { createRequire } from "node:module";
var require2 = createRequire(import.meta.url);
var { transform } = require2("detype");
async function transformByDetype(content, filename) {
  return await transform(content, filename, {
    removeTsComments: true
  });
}
var transformSFC = async ({ sourceFile, config, filename }) => {
  const output = sourceFile?.getFullText();
  if (config?.typescript)
    return output;
  return await transformByDetype(output, filename);
};

// src/utils/transformers/index.ts
var transformers = [
  transformCssVars,
  transformImport
  // transformTwPrefixes,
];
var project = new Project({
  compilerOptions: {}
});
async function createTempSourceFile(filename) {
  const dir = await fs.mkdtemp(path.join(tmpdir(), "shadcn-"));
  return path.join(dir, filename);
}
async function transform2(opts) {
  const tempFile = await createTempSourceFile(opts.filename);
  const sourceFile = project.createSourceFile(tempFile, opts.raw, {
    scriptKind: ScriptKind.Unknown
  });
  for (const transformer of transformers)
    transformer({ sourceFile, ...opts });
  return await transformSFC({
    sourceFile,
    ...opts
  });
}

// src/utils/get-config.ts
import { existsSync } from "node:fs";
import path2 from "pathe";
import { loadConfig as c12LoadConfig } from "c12";
import { loadConfig } from "tsconfig-paths";
import { z } from "zod";

// src/utils/resolve-import.ts
import { createMatchPath } from "tsconfig-paths";
function resolveImport(importPath, config) {
  return createMatchPath(config.absoluteBaseUrl, config.paths)(
    importPath,
    void 0,
    () => true,
    [".ts", ".tsx", ".vue"]
  );
}

// src/utils/get-config.ts
var DEFAULT_COMPONENTS = "@/components";
var DEFAULT_UTILS = "@/lib/utils";
var DEFAULT_TYPESCRIPT_CONFIG = "./tsconfig.json";
var DEFAULT_TAILWIND_CONFIG = "tailwind.config.js";
var TAILWIND_CSS_PATH = {
  nuxt: "assets/css/tailwind.css",
  vite: "src/assets/index.css",
  laravel: "resources/css/app.css",
  astro: "src/styles/globals.css"
};
var rawConfigSchema = z.object({
  $schema: z.string().optional(),
  style: z.string(),
  typescript: z.boolean().default(true),
  tsConfigPath: z.string().default(DEFAULT_TYPESCRIPT_CONFIG),
  tailwind: z.object({
    config: z.string(),
    css: z.string(),
    baseColor: z.string(),
    cssVariables: z.boolean().default(true),
    prefix: z.string().optional()
  }),
  framework: z.string().default("Vite"),
  aliases: z.object({
    components: z.string(),
    utils: z.string(),
    ui: z.string().default("").optional()
  })
}).strict();
var configSchema = rawConfigSchema.extend({
  resolvedPaths: z.object({
    tailwindConfig: z.string(),
    tailwindCss: z.string(),
    utils: z.string(),
    components: z.string(),
    ui: z.string()
  })
});
async function getConfig(cwd) {
  const config = await getRawConfig(cwd);
  if (!config)
    return null;
  return await resolveConfigPaths(cwd, config);
}
async function resolveConfigPaths(cwd, config) {
  let tsConfig;
  let tsConfigPath = path2.resolve(
    cwd,
    config.tsConfigPath
  );
  if (config.typescript) {
    tsConfig = loadConfig(tsConfigPath);
    if ("paths" in tsConfig && Object.keys(tsConfig.paths).length === 0) {
      tsConfigPath = path2.resolve(cwd, "./tsconfig.app.json");
      if (existsSync(tsConfigPath))
        tsConfig = loadConfig(tsConfigPath);
    }
  } else {
    tsConfigPath = config.tsConfigPath.includes("tsconfig.json") ? path2.resolve(cwd, "./jsconfig.json") : path2.resolve(cwd, config.tsConfigPath);
    tsConfig = loadConfig(tsConfigPath);
  }
  if (tsConfig.resultType === "failed") {
    throw new Error(
      `Failed to load ${tsConfigPath}. ${tsConfig.message ?? ""}`.trim()
    );
  }
  return configSchema.parse({
    ...config,
    resolvedPaths: {
      tailwindConfig: path2.resolve(cwd, config.tailwind.config),
      tailwindCss: path2.resolve(cwd, config.tailwind.css),
      utils: resolveImport(config.aliases.utils, tsConfig),
      components: resolveImport(config.aliases.components, tsConfig),
      ui: config.aliases.ui ? resolveImport(config.aliases.ui, tsConfig) : resolveImport(config.aliases.components, tsConfig)
    }
  });
}
async function getRawConfig(cwd) {
  try {
    const configResult = await c12LoadConfig({
      name: "components",
      configFile: "components.json",
      cwd
    });
    if (!configResult.config || Object.keys(configResult.config).length === 0)
      return null;
    return rawConfigSchema.parse(configResult.config);
  } catch (error) {
    throw new Error(`Invalid configuration found in ${cwd}/components.json.`);
  }
}

// src/utils/handle-error.ts
import { consola } from "consola";
function handleError(error) {
  if (typeof error === "string") {
    consola.error(error);
    process.exit(1);
  }
  if (error instanceof Error) {
    consola.error(error.message);
    process.exit(1);
  }
  consola.error("Something went wrong. Please try again.");
  process.exit(1);
}

// src/utils/registry/index.ts
import process2 from "node:process";
import path3 from "pathe";
import { HttpsProxyAgent } from "https-proxy-agent";
import { ofetch } from "ofetch";
import consola2 from "consola";

// src/utils/registry/schema.ts
import { z as z2 } from "zod";
var registryItemSchema = z2.object({
  name: z2.string(),
  dependencies: z2.array(z2.string()).optional(),
  devDependencies: z2.array(z2.string()).optional(),
  registryDependencies: z2.array(z2.string()).optional(),
  files: z2.array(z2.string()),
  type: z2.enum(["components:ui", "components:component", "components:example"])
});
var registryIndexSchema = z2.array(registryItemSchema);
var registryItemWithContentSchema = registryItemSchema.extend({
  files: z2.array(
    z2.object({
      name: z2.string(),
      content: z2.string()
    })
  )
});
var registryWithContentSchema = z2.array(registryItemWithContentSchema);
var stylesSchema = z2.array(
  z2.object({
    name: z2.string(),
    label: z2.string()
  })
);
var registryBaseColorSchema = z2.object({
  inlineColors: z2.object({
    light: z2.record(z2.string(), z2.string()),
    dark: z2.record(z2.string(), z2.string())
  }),
  cssVars: z2.object({
    light: z2.record(z2.string(), z2.string()),
    dark: z2.record(z2.string(), z2.string())
  }),
  inlineColorsTemplate: z2.string(),
  cssVarsTemplate: z2.string()
});

// src/utils/registry/index.ts
var baseUrl = process2.env.COMPONENTS_REGISTRY_URL ?? "https://www.shadcn-vue.com";
var agent = process2.env.https_proxy ? new HttpsProxyAgent(process2.env.https_proxy) : void 0;
async function getRegistryIndex() {
  try {
    const [result] = await fetchRegistry(["index.json"]);
    return registryIndexSchema.parse(result);
  } catch (error) {
    throw new Error("Failed to fetch components from registry.");
  }
}
async function getRegistryStyles() {
  try {
    const [result] = await fetchRegistry(["styles/index.json"]);
    return stylesSchema.parse(result);
  } catch (error) {
    throw new Error("Failed to fetch styles from registry.");
  }
}
function getRegistryBaseColors() {
  return [
    {
      name: "slate",
      label: "Slate"
    },
    {
      name: "gray",
      label: "Gray"
    },
    {
      name: "zinc",
      label: "Zinc"
    },
    {
      name: "neutral",
      label: "Neutral"
    },
    {
      name: "stone",
      label: "Stone"
    }
  ];
}
async function getRegistryBaseColor(baseColor) {
  try {
    const [result] = await fetchRegistry([`colors/${baseColor}.json`]);
    return registryBaseColorSchema.parse(result);
  } catch (error) {
    throw new Error("Failed to fetch base color from registry.");
  }
}
async function resolveTree(index, names) {
  const tree = [];
  for (const name of names) {
    const entry = index.find((entry2) => entry2.name === name);
    if (!entry)
      continue;
    tree.push(entry);
    if (entry.registryDependencies) {
      const dependencies = await resolveTree(index, entry.registryDependencies);
      tree.push(...dependencies);
    }
  }
  return tree.filter(
    (component, index2, self) => self.findIndex((c) => c.name === component.name) === index2
  );
}
async function fetchTree(style, tree) {
  try {
    const paths = tree.map((item) => `styles/${style}/${item.name}.json`);
    const result = await fetchRegistry(paths);
    return registryWithContentSchema.parse(result);
  } catch (error) {
    throw new Error("Failed to fetch tree from registry.");
  }
}
function getItemTargetPath(config, item, override) {
  if (override)
    return override;
  if (item.type === "components:ui" && config.aliases.ui)
    return config.resolvedPaths.ui;
  const [parent, type] = item.type.split(":");
  if (!(parent in config.resolvedPaths))
    return null;
  return path3.join(
    config.resolvedPaths[parent],
    type
  );
}
async function fetchRegistry(paths) {
  try {
    const results = await Promise.all(
      paths.map(async (path8) => {
        const response = await ofetch(`${baseUrl}/registry/${path8}`, {
          // @ts-expect-error agent type
          agent
        });
        return response;
      })
    );
    return results;
  } catch (error) {
    consola2.error(error);
    throw new Error(`Failed to fetch registry from ${baseUrl}.`);
  }
}

// src/commands/add.ts
var addOptionsSchema = z3.object({
  components: z3.array(z3.string()).optional(),
  yes: z3.boolean(),
  overwrite: z3.boolean(),
  cwd: z3.string(),
  all: z3.boolean(),
  path: z3.string().optional()
});
var add = new Command().name("add").description("add a component to your project").argument("[components...]", "the components to add").option("-y, --yes", "skip confirmation prompt.", true).option("-o, --overwrite", "overwrite existing files.", false).option(
  "-c, --cwd <cwd>",
  "the working directory. defaults to the current directory.",
  process3.cwd()
).option("-a, --all", "add all available components", false).option("-p, --path <path>", "the path to add the component to.").action(async (components, opts) => {
  try {
    const options = addOptionsSchema.parse({
      components,
      ...opts
    });
    const cwd = path4.resolve(options.cwd);
    if (!existsSync2(cwd)) {
      consola3.error(`The path ${cwd} does not exist. Please try again.`);
      process3.exit(1);
    }
    const config = await getConfig(cwd);
    if (!config) {
      consola3.warn(`Configuration is missing. Please run ${colors.green("init")} to create a components.json file.`);
      process3.exit(1);
    }
    const registryIndex = await getRegistryIndex();
    let selectedComponents = options.all ? registryIndex.map((entry) => entry.name) : options.components;
    if (!options.components?.length && !options.all) {
      const { components: components2 } = await prompts({
        type: "multiselect",
        name: "components",
        message: "Which components would you like to add?",
        hint: "Space to select. A to toggle all. Enter to submit.",
        instructions: false,
        choices: registryIndex.map((entry) => ({
          title: entry.name,
          value: entry.name,
          selected: options.all ? true : options.components?.includes(entry.name)
        }))
      });
      selectedComponents = components2;
    }
    if (!selectedComponents?.length) {
      consola3.warn("No components selected. Exiting.");
      process3.exit(0);
    }
    const tree = await resolveTree(registryIndex, selectedComponents);
    const payload = await fetchTree(config.style, tree);
    const baseColor = await getRegistryBaseColor(config.tailwind.baseColor);
    if (!payload.length) {
      consola3.warn("Selected components not found. Exiting.");
      process3.exit(0);
    }
    if (!options.yes) {
      const { proceed } = await prompts({
        type: "confirm",
        name: "proceed",
        message: "Ready to install components and dependencies. Proceed?",
        initial: true
      });
      if (!proceed)
        process3.exit(0);
    }
    const spinner = ora("Installing components...").start();
    for (const item of payload) {
      spinner.text = `Installing ${item.name}...`;
      const targetDir = getItemTargetPath(
        config,
        item,
        options.path ? path4.resolve(cwd, options.path) : void 0
      );
      if (!targetDir)
        continue;
      if (!existsSync2(targetDir))
        await fs2.mkdir(targetDir, { recursive: true });
      const existingComponent = item.files.filter(
        (file) => existsSync2(path4.resolve(targetDir, item.name, file.name))
      );
      if (existingComponent.length && !options.overwrite) {
        if (selectedComponents.includes(item.name)) {
          spinner.stop();
          const { overwrite } = await prompts({
            type: "confirm",
            name: "overwrite",
            message: `Component ${item.name} already exists. Would you like to overwrite?`,
            initial: false
          });
          if (!overwrite) {
            consola3.info(
              `Skipped ${item.name}. To overwrite, run with the ${colors.green(
                "--overwrite"
              )} flag.`
            );
            continue;
          }
          spinner.start(`Installing ${item.name}...`);
        } else {
          continue;
        }
      }
      await Promise.allSettled(
        [
          item.dependencies?.length && await addDependency(item.dependencies, {
            cwd,
            silent: true
          }),
          item.devDependencies?.length && await addDevDependency(item.devDependencies, {
            cwd,
            silent: true
          })
        ]
      );
      const componentDir = path4.resolve(targetDir, item.name);
      if (!existsSync2(componentDir))
        await fs2.mkdir(componentDir, { recursive: true });
      const files = item.files.map((file) => ({
        ...file,
        path: path4.resolve(
          targetDir,
          item.name,
          file.name
        )
      }));
      if (!config.typescript) {
        for (const file of files)
          await fs2.writeFile(file.path, file.content);
      }
      for (const file of files) {
        const content = await transform2({
          filename: file.path,
          raw: file.content,
          config,
          baseColor
        });
        let filePath = file.path;
        if (!config.typescript) {
          if (file.path.endsWith(".ts")) {
            if (existsSync2(file.path))
              rmSync(file.path);
          }
          filePath = file.path.replace(/\.ts$/, ".js");
        }
        await fs2.writeFile(filePath, content);
      }
    }
    spinner.succeed("Done.");
  } catch (error) {
    handleError(error);
  }
});

// src/commands/diff.ts
import { existsSync as existsSync3, promises as fs3 } from "node:fs";
import process4 from "node:process";
import path5 from "pathe";
import { consola as consola4 } from "consola";
import { colors as colors2 } from "consola/utils";
import { Command as Command2 } from "commander";
import { diffLines } from "diff";
import { z as z4 } from "zod";
var updateOptionsSchema = z4.object({
  component: z4.string().optional(),
  yes: z4.boolean(),
  cwd: z4.string(),
  path: z4.string().optional()
});
var diff = new Command2().name("diff").description("check for updates against the registry").argument("[component]", "the component name").option("-y, --yes", "skip confirmation prompt.", false).option(
  "-c, --cwd <cwd>",
  "the working directory. defaults to the current directory.",
  process4.cwd()
).action(async (name, opts) => {
  try {
    const options = updateOptionsSchema.parse({
      component: name,
      ...opts
    });
    const cwd = path5.resolve(options.cwd);
    if (!existsSync3(cwd)) {
      consola4.error(`The path ${cwd} does not exist. Please try again.`);
      process4.exit(1);
    }
    const config = await getConfig(cwd);
    if (!config) {
      consola4.warn(
        `Configuration is missing. Please run ${colors2.green(
          "init"
        )} to create a components.json file.`
      );
      process4.exit(1);
    }
    const registryIndex = await getRegistryIndex();
    if (!options.component) {
      const targetDir = config.resolvedPaths.components;
      const projectComponents = registryIndex.filter((item) => {
        for (const file of item.files) {
          const filePath = path5.resolve(targetDir, file);
          if (existsSync3(filePath))
            return true;
        }
        return false;
      });
      const componentsWithUpdates = [];
      for (const component2 of projectComponents) {
        const changes2 = await diffComponent(component2, config);
        if (changes2.length) {
          componentsWithUpdates.push({
            name: component2.name,
            changes: changes2
          });
        }
      }
      if (!componentsWithUpdates.length) {
        consola4.info("No updates found.");
        process4.exit(0);
      }
      consola4.info("The following components have updates available:");
      for (const component2 of componentsWithUpdates) {
        consola4.info(`- ${component2.name}`);
        for (const change of component2.changes)
          consola4.info(`  - ${change.filePath}`);
      }
      consola4.log("");
      consola4.info(
        `Run ${colors2.green("diff <component>")} to see the changes.`
      );
      process4.exit(0);
    }
    const component = registryIndex.find(
      (item) => item.name === options.component
    );
    if (!component) {
      consola4.error(
        `The component ${colors2.green(options.component)} does not exist.`
      );
      process4.exit(1);
    }
    const changes = await diffComponent(component, config);
    if (!changes.length) {
      consola4.info(`No updates found for ${options.component}.`);
      process4.exit(0);
    }
    for (const change of changes) {
      consola4.info(`- ${change.filePath}`);
      printDiff(change.patch);
      consola4.log("");
    }
  } catch (error) {
    handleError(error);
  }
});
async function diffComponent(component, config) {
  const payload = await fetchTree(config.style, [component]);
  const baseColor = await getRegistryBaseColor(config.tailwind.baseColor);
  const changes = [];
  for (const item of payload) {
    const targetDir = await getItemTargetPath(config, item);
    if (!targetDir)
      continue;
    for (const file of item.files) {
      const filePath = path5.resolve(targetDir, file.name);
      if (!existsSync3(filePath))
        continue;
      const fileContent = await fs3.readFile(filePath, "utf8");
      const registryContent = await transform2({
        filename: file.name,
        raw: file.content,
        config,
        baseColor
      });
      const patch = diffLines(registryContent, fileContent);
      if (patch.length > 1) {
        changes.push({
          file: file.name,
          filePath,
          patch
        });
      }
    }
  }
  return changes;
}
function printDiff(diff2) {
  diff2.forEach((part) => {
    if (part) {
      if (part.added)
        return process4.stdout.write(colors2.green(part.value));
      if (part.removed)
        return process4.stdout.write(colors2.red(part.value));
      return process4.stdout.write(part.value);
    }
  });
}

// src/commands/init.ts
import { existsSync as existsSync4, promises as fs4 } from "node:fs";
import process5 from "node:process";
import path6 from "pathe";
import { Command as Command3 } from "commander";
import { template } from "lodash-es";
import ora2 from "ora";
import prompts2 from "prompts";
import { z as z5 } from "zod";
import { addDependency as addDependency2, addDevDependency as addDevDependency2 } from "nypm";
import { consola as consola5 } from "consola";
import { colors as colors3 } from "consola/utils";

// src/utils/templates.ts
var UTILS = `import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`;
var TAILWIND_CONFIG = `const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{<%- extension %>,<%- extension %>x,vue}',
    './components/**/*.{<%- extension %>,<%- extension %>x,vue}',
    './app/**/*.{<%- extension %>,<%- extension %>x,vue}',
    './src/**/*.{<%- extension %>,<%- extension %>x,vue}',
	],
  prefix: "<%- prefix %>",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate],
}`;
var TAILWIND_CONFIG_WITH_VARIABLES = `const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "<%- prefix %>",
  <% if (framework === 'vite') { %>
  content: [
    './pages/**/*.{<%- extension %>,<%- extension %>x,vue}',
    './components/**/*.{<%- extension %>,<%- extension %>x,vue}',
    './app/**/*.{<%- extension %>,<%- extension %>x,vue}',
    './src/**/*.{<%- extension %>,<%- extension %>x,vue}',
	],
  <% } else if (framework === 'laravel') { %>
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.{<%- extension %>,<%- extension %>x,vue}",
  ],
  <% } else if (framework === 'astro') { %>
    content: [
      './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    ],
  <% } %>
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
      	xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        "collapsible-up": {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
    },
  },
  plugins: [animate],
}`;

// src/utils/transformers/transform-cjs-to-esm.ts
function transformCJSToESM(filename, code) {
  if (filename.endsWith(".mjs")) {
    return code.replace(/const\s([\w\d_]+)\s*=\s*require\((.*)\);?/g, "import $1 from $2").replace(/module\.exports = /g, "export default ");
  }
  return code;
}

// src/utils/transformers/transform-tw-prefix.ts
import { SyntaxKind as SyntaxKind2 } from "ts-morph";
import { MagicString as MagicString2, parse as parse2 } from "@vue/compiler-sfc";
function applyPrefix(input, prefix = "") {
  const classNames = input.split(" ");
  const prefixed = [];
  for (const className of classNames) {
    const [variant, value, modifier] = splitClassName(className);
    if (variant) {
      modifier ? prefixed.push(`${variant}:${prefix}${value}/${modifier}`) : prefixed.push(`${variant}:${prefix}${value}`);
    } else {
      modifier ? prefixed.push(`${prefix}${value}/${modifier}`) : prefixed.push(`${prefix}${value}`);
    }
  }
  return prefixed.join(" ");
}
function applyPrefixesCss(css, prefix) {
  const lines = css.split("\n");
  for (const line of lines) {
    if (line.includes("@apply")) {
      const originalTWCls = line.replace("@apply", "").trim();
      const prefixedTwCls = applyPrefix(originalTWCls, prefix);
      css = css.replace(originalTWCls, prefixedTwCls);
    }
  }
  return css;
}

// src/commands/init.ts
var PROJECT_DEPENDENCIES = {
  base: [
    "tailwindcss-animate",
    "class-variance-authority",
    "clsx",
    "tailwind-merge",
    "radix-vue"
  ],
  nuxt: [
    "@nuxtjs/tailwindcss"
  ]
};
var initOptionsSchema = z5.object({
  cwd: z5.string(),
  yes: z5.boolean()
});
var init = new Command3().name("init").description("initialize your project and install dependencies").option("-y, --yes", "skip confirmation prompt.", false).option(
  "-c, --cwd <cwd>",
  "the working directory. defaults to the current directory.",
  process5.cwd()
).action(async (opts) => {
  try {
    const options = initOptionsSchema.parse(opts);
    const cwd = path6.resolve(options.cwd);
    if (!existsSync4(cwd)) {
      consola5.error(`The path ${cwd} does not exist. Please try again.`);
      process5.exit(1);
    }
    const existingConfig = await getConfig(cwd);
    const config = await promptForConfig(cwd, existingConfig, options.yes);
    await runInit(cwd, config);
    consola5.log("");
    consola5.info(
      `${colors3.green("Success!")} Project initialization completed.`
    );
    consola5.log("");
  } catch (error) {
    handleError(error);
  }
});
async function promptForConfig(cwd, defaultConfig = null, skip = false) {
  const highlight = (text) => colors3.cyan(text);
  const styles = await getRegistryStyles();
  const baseColors = await getRegistryBaseColors();
  const options = await prompts2([
    {
      type: "toggle",
      name: "typescript",
      message: `Would you like to use ${highlight("TypeScript")}? ${colors3.gray("(recommended)")}?`,
      initial: defaultConfig?.typescript ?? true,
      active: "yes",
      inactive: "no"
    },
    {
      type: "select",
      name: "framework",
      message: `Which ${highlight("framework")} are you using?`,
      choices: [
        { title: "Vite", value: "vite" },
        { title: "Nuxt", value: "nuxt" },
        { title: "Laravel", value: "laravel" },
        { title: "Astro", value: "astro" }
      ]
    },
    {
      type: "select",
      name: "style",
      message: `Which ${highlight("style")} would you like to use?`,
      choices: styles.map((style) => ({
        title: style.label,
        value: style.name
      }))
    },
    {
      type: "select",
      name: "tailwindBaseColor",
      message: `Which color would you like to use as ${highlight(
        "base color"
      )}?`,
      choices: baseColors.map((color) => ({
        title: color.label,
        value: color.name
      }))
    },
    {
      type: "text",
      name: "tsConfigPath",
      message: (prev, values) => `Where is your ${highlight(values.typescript ? "tsconfig.json" : "jsconfig.json")} file?`,
      initial: (prev, values) => {
        const prefix = values.framework === "nuxt" ? ".nuxt/" : "./";
        const path8 = values.typescript ? "tsconfig.json" : "jsconfig.json";
        return prefix + path8;
      }
    },
    {
      type: "text",
      name: "tailwindCss",
      message: `Where is your ${highlight("global CSS")} file? ${colors3.gray("(this file will be overwritten)")}`,
      initial: (prev, values) => defaultConfig?.tailwind.css ?? TAILWIND_CSS_PATH[values.framework]
    },
    {
      type: "toggle",
      name: "tailwindCssVariables",
      message: `Would you like to use ${highlight(
        "CSS variables"
      )} for colors?`,
      initial: defaultConfig?.tailwind.cssVariables ?? true,
      active: "yes",
      inactive: "no"
    },
    // {
    //   type: 'text',
    //   name: 'tailwindPrefix',
    //   message: `Are you using a custom ${highlight(
    //     'tailwind prefix eg. tw-',
    //   )}? (Leave blank if not)`,
    //   initial: '',
    // },
    {
      type: "text",
      name: "tailwindConfig",
      message: `Where is your ${highlight("tailwind.config")} located? ${colors3.gray("(this file will be overwritten)")}`,
      initial: (prev, values) => {
        if (defaultConfig?.tailwind.config)
          return defaultConfig?.tailwind.config;
        if (values.framework === "astro")
          return "tailwind.config.mjs";
        else
          return DEFAULT_TAILWIND_CONFIG;
      }
    },
    {
      type: "text",
      name: "components",
      message: `Configure the import alias for ${highlight("components")}:`,
      initial: defaultConfig?.aliases.components ?? DEFAULT_COMPONENTS
    },
    {
      type: "text",
      name: "utils",
      message: `Configure the import alias for ${highlight("utils")}:`,
      initial: defaultConfig?.aliases.utils ?? DEFAULT_UTILS
    }
  ]);
  const config = rawConfigSchema.parse({
    $schema: "https://shadcn-vue.com/schema.json",
    style: options.style,
    typescript: options.typescript,
    tsConfigPath: options.tsConfigPath,
    framework: options.framework,
    tailwind: {
      config: options.tailwindConfig,
      css: options.tailwindCss,
      baseColor: options.tailwindBaseColor,
      cssVariables: options.tailwindCssVariables
      // prefix: options.tailwindPrefix,
    },
    aliases: {
      utils: options.utils,
      components: options.components
    }
  });
  if (!skip) {
    const { proceed } = await prompts2({
      type: "confirm",
      name: "proceed",
      message: `Write configuration to ${highlight("components.json")}. Proceed?`,
      initial: true
    });
    if (!proceed)
      process5.exit(0);
  }
  consola5.log("");
  const spinner = ora2("Writing components.json...").start();
  const targetPath = path6.resolve(cwd, "components.json");
  await fs4.writeFile(targetPath, JSON.stringify(config, null, 2), "utf8");
  spinner.succeed();
  return await resolveConfigPaths(cwd, config);
}
async function runInit(cwd, config) {
  const spinner = ora2("Initializing project...")?.start();
  for (const [key, resolvedPath] of Object.entries(config.resolvedPaths)) {
    let dirname = path6.extname(resolvedPath) ? path6.dirname(resolvedPath) : resolvedPath;
    if (key === "utils" && resolvedPath.endsWith("/utils")) {
      dirname = dirname.replace(/\/utils$/, "");
    }
    if (!existsSync4(dirname))
      await fs4.mkdir(dirname, { recursive: true });
  }
  const extension = config.typescript ? "ts" : "js";
  await fs4.writeFile(
    config.resolvedPaths.tailwindConfig,
    transformCJSToESM(
      config.resolvedPaths.tailwindConfig,
      config.tailwind.cssVariables ? template(TAILWIND_CONFIG_WITH_VARIABLES)({ extension, framework: config.framework, prefix: config.tailwind.prefix }) : template(TAILWIND_CONFIG)({ extension, framework: config.framework, prefix: config.tailwind.prefix })
    ),
    "utf8"
  );
  const baseColor = await getRegistryBaseColor(config.tailwind.baseColor);
  if (baseColor) {
    await fs4.writeFile(
      config.resolvedPaths.tailwindCss,
      config.tailwind.cssVariables ? config.tailwind.prefix ? applyPrefixesCss(baseColor.cssVarsTemplate, config.tailwind.prefix) : baseColor.cssVarsTemplate : baseColor.inlineColorsTemplate,
      "utf8"
    );
  }
  await fs4.writeFile(
    `${config.resolvedPaths.utils}.${extension}`,
    extension === "ts" ? UTILS : await transformByDetype(UTILS, ".ts"),
    "utf8"
  );
  spinner?.succeed();
  const dependenciesSpinner = ora2("Installing dependencies...")?.start();
  const deps = PROJECT_DEPENDENCIES.base.concat(
    config.style === "new-york" ? ["@radix-icons/vue"] : ["lucide-vue-next"]
  ).filter(Boolean);
  await Promise.allSettled(
    [
      config.framework === "nuxt" && await addDevDependency2(PROJECT_DEPENDENCIES.nuxt, {
        cwd,
        silent: true
      }),
      await addDependency2(deps, {
        cwd,
        silent: true
      })
    ]
  );
  dependenciesSpinner?.succeed();
}

// src/utils/get-package-info.ts
import { fileURLToPath } from "node:url";
import path7 from "pathe";
import fs5 from "fs-extra";
function getPackageInfo() {
  const packageJsonPath = getPackageFilePath("../package.json");
  return fs5.readJSONSync(packageJsonPath);
}
function getPackageFilePath(filePath) {
  const distPath = fileURLToPath(new URL(".", import.meta.url));
  return path7.resolve(distPath, filePath);
}

// src/index.ts
process6.on("SIGINT", () => process6.exit(0));
process6.on("SIGTERM", () => process6.exit(0));
async function main() {
  const packageInfo = await getPackageInfo();
  const program = new Command4().name("shadcn-vue").description("add components and dependencies to your project").version(
    packageInfo.version || "1.0.0",
    "-v, --version",
    "display the version number"
  );
  program.addCommand(init).addCommand(add).addCommand(diff);
  program.parse();
}
main();
//# sourceMappingURL=index.js.map