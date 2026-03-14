import test, { expect } from "@playwright/test";
import { goToLoginPage, goToStartPage } from "../actions/navigations";
test(
  "Plain Login - verify a user can login",
  { tag: ["@smoke", "@regression"] },
  async ({ page }) => {
    // // 1. Go to the start page
    await goToStartPage(page);

    // 2. Navigate to Login Page and wait until it's loaded
    const loginPage = await goToLoginPage(page);

    //3. wait until Login Page is loaded
    await loginPage.waitUntilPageIsLoaded();

    //4. input username
    await loginPage.inputUsername("students");

    //5. input password
    await loginPage.inputPassword("Default1!");

    //6. click login button and get MyAccountPage
    const accountPage = await loginPage.clickLoginButton();

    //7. wait until my account page is loaded
    await accountPage.waitUntilPageIsLoaded();

    //8. get log out text
    const logOutText = await accountPage.getLogOutText();

    //9. verify login was successful and log out text is visible
    expect(logOutText).toBe("Log out");
  },
);
