const input =
  process.argv.length > 2
    ? process.argv.slice(2).join(" ")
    : require("fs").readFileSync(0, "utf8");
const output = input.trim().replace(/[ \t]+/g, " 👏 ");
console.log(output); // eslint-disable-line no-console
