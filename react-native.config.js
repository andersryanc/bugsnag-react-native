module.exports = {
  dependency: {
    platforms: {
      ios: {
        project: "cocoa/BugsnagReactNative.xcodeproj",
        sharedLibraries: ["libz"]
      },
      android: {
        packageInstance: "BugsnagReactNative.getPackage()",
        packageImportPath: "import com.bugsnag.BugsnagReactNative;"
      }
    }
  }
};
