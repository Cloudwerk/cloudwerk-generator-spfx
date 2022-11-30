var _ = require('lodash');
const Generator = require('yeoman-generator');
_.extend(Generator.prototype, require('yeoman-generator/lib/actions/install'));

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    installPackages() {
        this.installDependencies({
            npm: true,
            bower: false,
            yarn: false,
            skipMessage: false
        });
    };
};

// "dependencies": {
    // "@fluentui/react-components": "^9.7.1",
    // "@microsoft/sp-core-library": "^1.16.0",
    // "@microsoft/sp-lodash-subset": "^1.16.0",
    // "@microsoft/sp-property-pane": "^1.16.0",
    // "@microsoft/sp-webpart-base": "^1.16.0",
    // "@pnp/core": "^3.9.0",
    // "@pnp/graph": "^3.9.0",
    // "@pnp/logging": "^3.9.0",
    // "@pnp/queryable": "^3.9.0",
    // "@pnp/sp": "^3.9.0",
    // "react": "^17.0.1",
    // "react-dom": "^17.0.1",
    // "tslib": "^2.3.1"
//   },
//   "devDependencies": {
//     "@microsoft/eslint-config-spfx": "^1.16.0",
    // "@microsoft/eslint-plugin-spfx": "^1.16.0",
    // "@microsoft/rush-stack-compiler-4.5": "^0.2.2",
    // "@microsoft/sp-build-web": "^1.16.0",
    // "@microsoft/sp-module-interfaces": "^1.16.0",
    // "@rushstack/eslint-config": "^2.5.1",
    // "@types/node": "^18.11.9",
    // "@types/react": "^17.0.45",
    // "@types/react-dom": "^17.0.17",
    // "@types/webpack-env": "^1.18.0",
    // "ajv": "^6.12.5",
    // "eslint-plugin-react-hooks": "^4.3.0",
    // "gulp": "^4.0.2",
    // "typescript": "4.5.5"
//   }