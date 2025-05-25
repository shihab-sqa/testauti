const {test,expect}= require("@playwright/test");

test.only("First Test",async({page})=>{

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

const userName= page.locator("#username");

const password= page.locator("#password");
 const radio= page.locator(".checkmark").last();

 const okey= page.locator("#okayBtn");
const dropdown= page.locator("select.form-control");

const check= page.locator("input#terms");

 const singin= page.locator("#signInBtn");
 const text= page.locator("//a[normalize-space()='ProtoCommerce']");

 await userName.fill("rahulshettyacademy");
 await password.fill("learning");
 await radio.click();
 await okey.click();
 await dropdown.selectOption("Teacher");
 await check.click();
 await expect(page.locator(".checkmark").last()).toBeChecked();
 await singin.click();  
 
 await page.waitForLoadState("networkidle");
   const mytext=await text.textContent();

   
   await expect(text).toContainText("ProtoCommerce");
 
console.log(mytext);
});



test("Window handle",async({browser})=>{

const contest=await browser.newContext();
const page= await contest.newPage();

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

const link= page.locator(".blinkingText");

const [newPage]=await Promise.all([

    

 contest.waitForEvent("page"),
link.click(),
])

})