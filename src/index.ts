import { Plugin } from "esbuild";

const rxp = /['"]use client['"]\s?;/i;

const reactUseClientPlugIn: Plugin = {
  name: "esbuild-react18-useclient",
  setup(build) {
    build.onEnd((result) => {
      result.outputFiles
        ?.filter((f) => !f.path.endsWith(".map"))
        .forEach((f) => {
          const txt = f.text;
          if (txt.match(rxp)) {
            Object.defineProperty(f, "text", {
              value: '"use client";\n' + txt.replace(rxp, ""),
            });
          }
        });
    });
  },
};

export = reactUseClientPlugIn;
