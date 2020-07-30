@NativeClass
export class AppDelegate extends UIResponder implements UIApplicationDelegate {
  static ObjCProtocols = [UIApplicationDelegate];

  applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<any, any>) {
    console.log('custom applicationDidFinishLaunchingWithOptions!');
    return true;
  }
}
