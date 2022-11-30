'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the amazing ${chalk.red('generator-cloudwerk-spfx')} generator!`
      )
    );
  }

  writing() {
    this.fs.copy(
      this.templatePath(),
      this.destinationPath('spfx-webpart')
    );
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  }
};
