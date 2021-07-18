#!/usr/bin/env node

const { prompt } = require('enquirer');
const { readdirSync } = require('fs');
const { join } = require('path');
const { generateRoute } = require('./route-generator');


const fileList = readdirSync('./').filter(file => file.endsWith('.js'));
const questions = [{
    type: 'select',
    name: 'routeFile',
    message: 'Select your router file',
    initial: 0,
    choices: fileList.map(name => ({name}))
}, {
    type: 'input',
    name: 'routePath',
    message: 'What is path for the route?'
}, {
    type: 'select',
    name: 'routeMethod',
    message: 'Specify method for the route',
    initial: 0,
    choices: ['POST', 'GET']
}];

prompt(questions).then(answers => {
    const { routeFile, routePath, routeMethod} = answers;
    generateRoute(join(process.cwd(), routeFile), routePath, routeMethod);
    console.log(`Method '${routeMethod}' with path '${routePath}' added to file '${routeFile}'`);
})
