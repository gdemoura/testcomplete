function DeleteOrder()
{
  //Activates the 'MainForm' window.
  Aliases.Orders.MainForm.Activate();
  //Clicks the 'listitemGabriel' object with the right mouse button.
  //Aliases.Orders.MainForm.OrdersView.listitemGabriel.ClickR(91, 1);
  //Clicks the 'menuitemDeleteOrder' control.
  Aliases.Orders.popupContext.menuitemDeleteOrder.Click();
  //Clicks the 'buttonYes' button.
  Aliases.Orders.dialogConfirmation.buttonYes.ClickButton();
}