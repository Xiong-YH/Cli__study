#!/usr/bin/env node
const {program} = require('commander')

const helpOption = require("./core/help-options.js")
const { createProjectAction } = require('./core/action.js')

helpOption()

program.command("create <project>").action(createProjectAction)


program.parse()