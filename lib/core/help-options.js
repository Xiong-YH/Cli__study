const { program } = require("commander");

function helpOption() {
  const version = require("../../package.json").version;

  program.version(version, "-v --version");

  //增强其他option操作
  program.option("-d -dest <dest>", "a destination folder");

  program.on("--help", () => {
    console.log("");
    console.log("others:");
    console.log("  xxx");
    console.log("  yyy");
  });
}

module.exports = helpOption;
