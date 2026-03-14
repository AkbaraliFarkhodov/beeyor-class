import { X509Certificate } from "node:crypto";
import Basepage from "../Basepage";
import MyAccountPage from "../my-account/MyAccountPage";

export default class LoginPage extends Basepage {
  async waitUntilPageIsLoaded() {
    await this.waitForElement("//h2[normalize-space(text())='Login']");
  }
  async inputUsername(username: string): Promise<void> {
    await this.fill("#username", username);
  }
  async inputPassword(password: string): Promise<void> {
    await this.fill("#password", password);
  }
  async clickLoginButton(): Promise<MyAccountPage> {
    await this.click("//button[@name='login']");
    return new MyAccountPage(this.page);
  }
}
//cc
//cc
