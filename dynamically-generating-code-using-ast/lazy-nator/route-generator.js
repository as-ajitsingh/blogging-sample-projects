const esprima = require('esprima');
const escodegen = require('escodegen');
const { readFileSync, writeFileSync } = require('fs');
const routerNode = require('./nodes/route-node');

const generateRoute = (filePath, path, method) => {
    const routePath = path.startsWith('/') ? path : `/${path}`;
    const routeMethod = method.toLowerCase();
    const file = readFileSync(filePath, {encoding: 'UTF-8'});
    const ast =  esprima.parseScript(file);
    ast.body.splice(ast.body.length - 2, 0, routerNode(routePath, routeMethod));
    writeFileSync(filePath, escodegen.generate(ast));
}


module.exports = {
    generateRoute
}