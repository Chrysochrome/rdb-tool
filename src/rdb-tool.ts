export class RDBTool {
  instanceId: string;
  displayInScreen: boolean;

  constructor(options: { instanceId?: string; displayInScreen: boolean }) {
    this.instanceId = options.instanceId || RDBTool.getInstanceId();
    this.displayInScreen = options.displayInScreen;
  }

  static getInstanceId(): string {
    // TODO generate random id by day
    return "";
  }

  // TODO
  async connect(url: string) {}

  async disconnect() {}

  async hookConsole() {}

  async showOnscreenConsole() {}

  async hookNetwork() {}

  async hookLocalStorage() {}

  async hookSessionStorage() {}

  async hookCookie() {}

  async refresh() {}

  async samplingNow() {}

  async pauseNow() {}

  async registInterceptor(beforeFunction: () => {}, afterFunction: () => {}) {}
}
