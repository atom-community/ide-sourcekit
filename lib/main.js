const cp = require("child_process")
const { AutoLanguageClient } = require("atom-languageclient")

class SourceKitLanguageClient extends AutoLanguageClient {
  /* eslint-disable class-methods-use-this */
  getGrammarScopes() {
    return ["source.c", "source.objc", "source.cpp", "source.swift"]
  }

  getLanguageName() {
    return "C/Objective-C/C++/Swift"
  }

  getServerName() {
    return "SourceKit"
  }
  /* eslint-disable class-methods-use-this */

  startServerProcess() {
    this.supportedExtensions = ["*.c", "*.m", "*.cpp", "*.hh", "*.cc", "*.hpp", "*.h", "*.swift"]

    const sourceKitServerPath = atom.config.get("ide-sourcekit.sourceKitServer.path")

    const childProcess = cp.spawn(sourceKitServerPath)
    this.captureServerErrors(childProcess)

    return childProcess
  }
}

module.exports = new SourceKitLanguageClient()
