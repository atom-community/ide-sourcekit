# IDE-SourceKit package

![CI](https://github.com/atom-ide-community/ide-sourcekit/workflows/CI/badge.svg)

C, C++, Objective-C, and Swift language support for Atom-IDE, powered by the [SourceKit Language Server](https://github.com/apple/sourcekit-lsp) by Apple (only on Macos or Linux).

## Getting Started

### Installation
Install these the needed packages from:
https://atom.io/packages/ide-sourcekit
https://atom.io/packages/atom-ide-base

or using command line:
```
apm install ide-sourcekit
apm install atom-ide-base
```

### Adding `sourcekit-lsp` Path

You need to have [sourcekit-lsp](https://github.com/apple/sourcekit-lsp) on the PATH or add its full path inside the settings of `ide-sourcekit`.

The current installation methods are:

1) If you have installed Xcode 11.4+ or the corresponding Command Line Tools package, the SourceKit-LSP server is included and can be run with xcrun sourcekit-lsp.

2) Download and install the Swift toolchain which includes `sourcekit-lsp`
   https://swift.org/download/#releases

Once installed add the location of `sourcekit-lsp` binary to PATH or the settings of `ide-sourcekit`

Note: `sourcekit-lsp` is not available on Windows. See [here](https://forums.swift.org/t/sourcekit-lsp-on-windows/40087/4).

### Reload

Once configured, reload Atom and open your project. Enjoy!

## Features

- Autocomplete
- Document outline
- Find references
- Go to definition
- Hover
- Signature help
