const {test,expect}= require("@playwright/test")


test("Role Practice",async({page})=>{

await page.goto("https://rahulshettyacademy.com/angularpractice/");
await page.getByLabel("Check me out if you Love IceCreams!").check();
await page.getByPlaceholder("Password").pressSequentially("Shihab");
await page.getByLabel("Gender").selectOption("Female");
await page.getByRole("button",{Name: 'Submit'}).click();
await page.getByRole("link",{name:'Shop'}).click();
const text=  await page.getByAltText("Check me out if you Love IceCreams!").isVisible();

 expect (text).toBeTruthy();





})