import { BASE_URL } from "../models/arguments";
import { Page } from "@playwright/test";
import LoginPage from "../pages/login/LoginPage";

const goToStartPage = async (page: Page): Promise<void> => {
  await page.goto(BASE_URL);
};

const goToLoginPage = async (page: Page): Promise<LoginPage> => {
  await page.click("//a[contains(.,'Login')]");

  return new LoginPage(page);
};

export { goToStartPage, goToLoginPage };
