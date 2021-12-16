function ContactUs()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("https://smartstore.alertsite.com/");
  Browsers.RemoteItem("http://hub.crossbrowsertesting.com:80/wd/hub", "{\"platform\":\"MacOS 11.0\",\"browserName\":\"Safari\",\"version\":\"14\",\"screenResolution\":\"1366x768\"}").Run("https://smartstore.alertsite.com/");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'linkContactUs' link.
  Aliases.browser.pageShop.header.navUsd.navContactUs.linkContactUs.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageContactus.Wait();
  //Sets the text 'Gabe' in the 'textboxYourName' text editor.
  Aliases.browser.pageContactus.sectionContent.formYourName.textboxYourName.SetText("Gabe");
  //Sets the text 'g@smrt.com' in the 'textboxYourEmail' text editor.
  Aliases.browser.pageContactus.sectionContent.formYourName.textboxYourEmail.SetText("g@smrt.com");
  //Enters 'Where is my order?' in the 'textareaEnquiry' object.
  Aliases.browser.pageContactus.sectionContent.formYourName.textareaEnquiry.Keys("Where is my order?");
  //Clicks the 'buttonSendEmail' button.
  Aliases.browser.pageContactus.sectionContent.formYourName.buttonSendEmail.ClickButton();
  //Checks whether the 'contentText' property of the Aliases.browser.pageContactus.sectionContent.panelYourEnquiryHasBeen object equals 'Your enquiry has been successfully sent to the store owner.'.
  aqObject.CheckProperty(Aliases.browser.pageContactus.sectionContent.panelYourEnquiryHasBeen, "contentText", cmpEqual, "Your enquiry has been successfully sent to the store owner.");
}
