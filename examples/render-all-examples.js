const glob = require('glob');
const raml2html = require('raml2html');
const fs = require('fs');

process.chdir(__dirname);

const config = raml2html.getConfigForTheme('raml2html-default-theme');
const options = { pretty: true };
const examples = glob.sync('*.raml');

examples.forEach((ramlFile) => {
  console.log(ramlFile);
  raml2html.render(ramlFile, config, options).then((result) => {
    const filename = ramlFile.replace('.raml', '.html');
    fs.writeFileSync(filename, result);
  }, (error) => {
    console.log('error! ', error);
  });
});
