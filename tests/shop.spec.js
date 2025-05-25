const { test, expect } = require("@playwright/test");

test("Shopping", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client");

  // Log in
  await page.locator("#userEmail").fill("shihabzzhasan@gmail.com");
  await page.locator("#userPassword").fill("123456");
  await page.locator("#login").click();

  const productName = "ADIDAS ORIGINAL";

  // Wait for products to be loaded
  const products = page.locator(".card-body");
  await products.first().waitFor(); // wait for at least one product

  const count = await products.count();

  for (let i = 0; i < count; ++i) {
    const productTitle = await products.nth(i).locator("b").textContent();

    if (productTitle.trim() === productName) {
      await products.nth(i).locator("text=Add To Cart").click();
      break;
    }
  }

 await page.locator("[routerlink*='/dashboard/cart']").click();

 const item= page.locator("div ul");

 const itemCount= await page.locator("div ul").count();

 for(let i=0;i<itemCount;i++){

  const text= page.locator("div ul").nth(i).textContent

  if(text===productName){

   await page.locator("div ul").nth(i).click();
   break;

  }

 }


});