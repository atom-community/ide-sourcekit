const cp = require('child_process');
const {AutoLanguageClient} = require('atom-languageclient');

class SourceKitLanguageClient extends AutoLanguageClient {
  getGrammarScopes() {
    return ['source.c', 'source.objc', 'source.cpp', 'source.swift'];
  }

  getLanguageName() {
    return 'C/Objective-C/C++/Swift';
  }

  getServerName() {
    return 'SourceKit';
  }

  startServerProcess() {
    this.supportedExtensions = ['*.c', '*.m', '*.cpp', '*.h', '*.swift'];

    const sourceKitServerPath = atom.config.get('ide-sourcekit.sourceKitServer.path');
    console.log('sourceKitServerPath', sourceKitServerPath);

    const childProcess = cp.spawn(sourceKitServerPath);
    this.captureServerErrors(childProcess);

    return childProcess;
  }
}

module.exports = new SourceKitLanguageClient();
