const {test,expect}= require("@playwright/test")

test("Calender Automation",async({page})=>{

await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");

const year="2027"
const month="June"
const day="25"


await page.locator(".react-date-picker").click();
await page.locator(".react-calendar__navigation__label__labelText").click();
await page.locator(".react-calendar__navigation__label__labelText").click();
await page.getByText(year).click();
//await page.locator(".react-calendar__tile").nth(year).click();
//await page.locator(".react-calendar__tile").nth(month).click();
await page.getByText(month).click();
await page.locator(".react-calendar__tile").nth(day).click();
 await page.pause();



})