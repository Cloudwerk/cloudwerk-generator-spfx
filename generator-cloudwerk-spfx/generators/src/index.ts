import path from 'path';
var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    installDependencies() {
        this.npmInstall();
    }
};