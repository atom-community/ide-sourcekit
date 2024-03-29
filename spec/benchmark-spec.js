describe("Benchmark", () => {
  // This number doesn't match what timecope gives, but shows the trend
  it("Activation Benchmark", async () => {
    jasmine.attachToDOM(atom.views.getView(atom.workspace))
    atom.packages.triggerDeferredActivationHooks()
    // Activate activation hook
    atom.packages.triggerActivationHook("core:loaded-shell-environment")

    // For benchmark, activate the deps manually before loading the actual package:
    const deps = []
    await Promise.all(deps.map((p) => atom.packages.activatePackage(p)))

    // Activate the package
    measure("Activation Time", async function activationBenchmark() {
      await atom.packages.activatePackage("ide-sourcekit")
    })

    expect(atom.packages.isPackageLoaded("ide-sourcekit")).toBeTruthy()
  })
})
