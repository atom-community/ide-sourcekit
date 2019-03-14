# IDE-SourceKit package

[![Build Status](https://badgen.net/travis/atom-ide-community/ide-sourcekit/master)](https://travis-ci.org/atom-ide-community/ide-sourcekit)

C, C++, Objective-C, and Swift language support for Atom-IDE, powered by the [SourceKit Language Server](https://github.com/apple/sourcekit-lsp) by Apple.

This is still in an **experimental** package.

## Getting Started

### Install Package
Run `apm install ide-sourcekit`

### Install LSP Package

Install either [Atom IDE UI](atom://settings-view/show-package?package=atom-ide-ui) or [Atom Community IDE packages](https://atom-ide-community.github.io). Without these, nothing will work.

### Configure Package
Something that you'll need to do in order to use the package is configure the sourcekit-lsp path location. Follow the instructions on [sourcekit-lsp](https://github.com/apple/sourcekit-lsp) in order to get the sourcekit-lsp binary.

### Reload

Once configured, reload Atom and open your project. Enjoy!

## Features

- Autocomplete
- Document outline
- Find references
- Go to definition
- Hover
- Signature help
