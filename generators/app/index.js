'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the Geek Learning ' + chalk.red('generator-gl-ionic-webpack-typescript-seed') + ' generator!'
    ));

    const prompts = [];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('.'),
      this.destinationPath('.')
    );
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false
    });
  }
};
