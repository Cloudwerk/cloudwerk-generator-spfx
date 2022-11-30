var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    testfunc() {
        this.log("generator works");
    };
};