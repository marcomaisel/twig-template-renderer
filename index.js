const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
const { argv } = require("yargs")
  .option("template", {
    alias: "t",
    describe: "Template name (without .twig)",
    demandOption: true,
    type: "string",
  })
  .option("context", {
    alias: "c",
    describe: "Context JSON filename (without .json)",
    demandOption: true,
    type: "string",
  });

const Twig = require("twig");

(async () => {
  try {
    const tplName = argv.template;
    const ctxName = argv.context;
    const tplPath = path.join(__dirname, "templates", `${tplName}.twig`);
    const ctxPath = path.join(__dirname, "context", `${ctxName}.json`);

    if (!fs.existsSync(tplPath))
      throw new Error(`Template not found: ${tplPath}`);
    if (!fs.existsSync(ctxPath))
      throw new Error(`Context not found: ${ctxPath}`);

    const context = JSON.parse(fs.readFileSync(ctxPath, "utf8"));

    // Compile and render
    const template = Twig.twig({
      path: tplPath,
      async: false,
      namespaces: {
        components: path.join(__dirname, "components"),
      },
    });

    // Check if template was loaded successfully before calling render
    if (!template || typeof template.render !== "function") {
      throw new Error(
        "Failed to load or compile the Twig template. Check template paths and syntax."
      );
    }

    const html = template.render(context);

    // Output file named after template in output/ directory
    const outputDir = path.join(__dirname, "output");
    await mkdirp(outputDir);
    const outputPath = path.join(outputDir, `${tplName}.html`);

    fs.writeFileSync(outputPath, html, "utf8");
    console.log(`Rendered HTML written to ${outputPath}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    if (err.stack) {
      console.error(err.stack);
    }
    process.exit(1);
  }
})();
