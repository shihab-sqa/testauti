const {test,expect}= require("@playwright/test");


test("Test Hover",async({page})=>{
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

   expect (await page.screenshot()).toMatchSnapshot("mytop.png");
  await page.locator("#mousehover").hover();
  await page.pause();


})


test("Test Alert",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.locator("#alertbtn").click();
   await page.on("dialog",dialog=>dialog.accept());
  
  
  })

  test("iFrame Control",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const frame= page.frameLocator("#courses-iframe")
   await frame.getByText("All Access plan")[1].click();

   page.keyboard.press("CTRL+A")

   page.locator("JJJ").setInputFiles(["JJJJJJ","jjjj"])
  
  })

  test("Visual Testing",async({page})=>{

     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
      await page.screenshot({path:'screen.png'});
  
      await page.locator("#product").first().screenshot({path:'test.png'})

  })


