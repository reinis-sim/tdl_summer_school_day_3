import BasePage from "../pageObjects/basePage";
import BasketPage from "../pageObjects/BasketPage";
import CreateAddressPage from "../pageObjects/CreateAddressPage";
import DeliveryMethodPage from "../pageObjects/DeliveryMethodPage";
import HomePage from "../pageObjects/HomePage";
import LoginPage from "../pageObjects/LoginPage";
import OrderCompletionPage from "../pageObjects/OrderCompletionPage";
import OrderSummaryPage from "../pageObjects/OrderSummaryPage";
import PaymentOptionsPage from "../pageObjects/PaymentOptionsPage";
import RegistrationPage from "../pageObjects/RegistrationPage";
import SavedAddressesPage from "../pageObjects/SavedAddressesPage";
import SavedPaymentOptionsPage from "../pageObjects/SavedPaymentOptionsPage";
import SearchPage from "../pageObjects/SearchPage";
import SelectAddressPage from "../pageObjects/SelectAddressPage";

describe("Juice-shop without auto login", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.dismissButton.click();
    HomePage.meWantItButton.click();
  });

  it("Login", () => {
    HomePage.accountBtn.should("be.visible").click();
    HomePage.loginBtn.should("be.visible").click();
    LoginPage.userEmail.should("be.visible").type("demo");
    LoginPage.userPassword.should("be.visible").type("demo");
    LoginPage.loginBtn.should("be.visible").click();
    SearchPage.accountBtn.should("be.visible").click();
    SearchPage.profileBtn.should("contain.text", "demo");
    // Set email value to "demo"
    // Set password value to "demo"
    // Click Log in
    // Click Account button
    // Validate that "demo" account name appears in the menu section
  });

  it("Registration", () => {
    HomePage.accountBtn.should("be.visible").click();
    HomePage.loginBtn.should("be.visible").click();
    LoginPage.registerBtn.should("be.visible").click();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const randomEmail = "email_"+randomNum+"@ebox.com";
    RegistrationPage.emailField.type(randomEmail);
    RegistrationPage.passwordField.should("be.visible").type("testPassword123");
    RegistrationPage.repeatPasswordField.should("be.visible").type("testPassword123");
    RegistrationPage.secQuestion.should("be.visible").click();
    RegistrationPage.petName.click();
    RegistrationPage.answerField.should("be.visible").type("Generic cat name");
    RegistrationPage.registerBtn.should("be.visible").click();
    LoginPage.userEmail.should("be.visible").type(randomEmail);
    LoginPage.userPassword.should("be.visible").type("testPassword123");
    LoginPage.loginBtn.should("be.visible").click();
    SearchPage.accountBtn.should("be.visible").click();
    SearchPage.profileBtn.should("contain.text", randomEmail);

    

    // Click Account button
    // Login button
    // Click "Not yet a customer?"
    // Find - how to generate random number in JS
    // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
    // Save that email address to some variable
    // Fill in password field and repeat password field with same password
    // Click on Security Question menu
    // Select  "Name of your favorite pet?"
    // Fill in answer
    // Click Register button
    // Set email value to previously created email
    // Set password value to previously used password value
    // Click login button
    // Click Account button
    // Validate that account name (with previously created email address) appears in the menu section
  });
});

describe("Juice-shop with Auto login", () => {
  beforeEach(() => {
    cy.login("demo", "demo");
    HomePage.visit();
  });

  it("Search and validate Lemon", () => {
    HomePage.searchBtn.click();
    HomePage.searchBtnInput.type("Lemon{enter}"); 
    SearchPage.lemonJuice.click();
    SearchPage.itemDialog.should("contain.text", 'Sour but full of vitamins.')
    // Click on search icon
    // Search for Lemon
    // Select a product card - Lemon Juice (500ml)
    // Validate that the card (should) contains "Sour but full of vitamins."
  });

  it("Search 500ml and validate Lemon, while having multiple cards", () => {
    HomePage.searchBtn.click();
    HomePage.searchBtnInput.type("500ml{enter}"); 
    SearchPage.lemonJuice.should("be.visible").click();
    SearchPage.itemDialog.should("contain.text", 'Sour but full of vitamins.')
      // Create scenario - Search 500ml and validate Lemon, while having multiple cards
  // Click on search icon
  // Search for 500ml
  // Select a product card - Lemon Juice (500ml)
  // Validate that the card (should) contains "Sour but full of vitamins."
  });

  it("Search 500ml and validate cards", () => {  
    HomePage.searchBtn.click();
    HomePage.searchBtnInput.type("500ml{enter}"); 
    SearchPage.eggfruitJuice.should("be.visible").click();
    SearchPage.itemDialog.should("contain.text", 'Now with even more exotic flavour.')
    SearchPage.closeDialog.should("be.visible").click();
    SearchPage.lemonJuice.should("be.visible").click();
    SearchPage.itemDialog.should("contain.text", 'Sour but full of vitamins.')
    SearchPage.closeDialog.should("be.visible").click();
    SearchPage.strawberryJuice.should("be.visible").click();
    SearchPage.itemDialog.should("contain.text", 'Sweet & tasty!')
  // Create scenario - Search 500ml and validate cards
  // Click on search icon
  // Search for 500ml
  // Select a product card - Eggfruit Juice (500ml)
  // Validate that the card (should) contains "Now with even more exotic flavour."
  // Close the card
  // Select a product card - Lemon Juice (500ml)
  // Validate that the card (should) contains "Sour but full of vitamins."
  // Close the card
  // Select a product card - Strawberry Juice (500ml)
  // Validate that the card (should) contains "Sweet & tasty!"
  });

  it("Read a review", () => {
    HomePage.searchBtn.click();
    HomePage.searchBtnInput.type("King{enter}"); 
    SearchPage.kingMask.should("be.visible").click();
    cy.wait(500);
    SearchPage.reviewPanel.should("be.visible").click();
    SearchPage.reviewPanelBody.should("be.visible").should("contain.text", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");

  // Create scenario - Read a review
  // Click on search icon
  // Search for King
  // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
  // Click expand reviews button/icon (wait for reviews to appear)
  // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
  });

  it("Add a review", () => {
    HomePage.searchBtn.click();
    HomePage.searchBtnInput.type("Raspberry{enter}"); 
    SearchPage.raspberryJuice.should("be.visible").click();
    cy.wait(500);
    SearchPage.reviewField.type("Tastes like metal");
    SearchPage.submitBtn.should("be.enabled").should("be.visible").click();
    SearchPage.reviewPanel.should("be.visible").click();
    SearchPage.reviewPanelBody.should("be.visible").should("contain.text", "Tastes like metal");

  // Create scenario - Add a review
  // Click on search icon
  // Search for Raspberry
  // Select a product card - Raspberry Juice (1000ml)
  // Type in review - "Tastes like metal"
  // Click Submit
  // Click expand reviews button/icon (wait for reviews to appear)
  // Validate review -  "Tastes like metal"
  });







  it("Validate product card amount", () => {
    SearchPage.prodAmountSelected.should("have.text", " 1 – 12 of 35 ");
    SearchPage.prodAmount.click();
    SearchPage.prodAmountSelect24.click();
    SearchPage.prodAmountSelected.should("have.text", " 1 – 24 of 35 ");
    SearchPage.prodAmount.click();
    SearchPage.prodAmountSelect36.click();
    SearchPage.prodAmountSelected.should("have.text", " 1 – 35 of 35 ");


  // Create scenario - Validate product card amount
  // Validate that the default amount of cards is 12
  // Change items per page (at the bottom of page) to 24
  // Validate that the amount of cards is 24
  // Change items per page (at the bottom of page) to 36
  // Validate that the amount of cards is 35
  });


  it("Buy Girlie T-shirt", () => {
    HomePage.searchBtn.should("be.visible").click();
    HomePage.searchBtnInput.should("be.visible").type("Girlie{enter}"); 
    SearchPage.shirtBasket.should("be.visible").click(); 
    SearchPage.shoppingCart.should("be.visible").click();
    BasketPage.checkoutBtn.should("be.visible").click();
    SelectAddressPage.unitedFake.should("be.visible").click();
    SelectAddressPage.continueBtn.should("be.enabled").should("be.visible").click();
    DeliveryMethodPage.standardDelivery.should("be.visible").click();
    DeliveryMethodPage.continueBtn.should("be.visible").click();
    PaymentOptionsPage.cardSelect.click();
    PaymentOptionsPage.continueBtn.should("be.visible").click();
    OrderSummaryPage.placeOrder.should("be.visible").click();
    OrderCompletionPage.completed.should("be.visible").should("contain.text", "Thank you for your purchase!");

  // Create scenario - Buy Girlie T-shirt
  // Click on search icon
  // Search for Girlie
  // Add to basket "Girlie"
  // Click on "Your Basket" button
  // Create page object - BasketPage
  // Click on "Checkout" button
  // Create page object - SelectAddressPage
  // Select address containing "United Fakedom"
  // Click Continue button
  // Create page object - DeliveryMethodPage
  // Select delivery speed Standard Delivery
  // Click Continue button
  // Create page object - PaymentOptionsPage
  // Select card that ends with "5678"
  // Click Continue button
  // Create page object - OrderSummaryPage
  // Click on "Place your order and pay"
  // Create page object - OrderCompletionPage
  // Validate confirmation - "Thank you for your purchase!"
  });

  it("Add address", () => {
    SearchPage.accountBtn.should("be.visible").click();
    SearchPage.ordersAndPaymentBtn.should("be.visible").click();
    SearchPage.myAddresses.should("be.visible").click();
    SavedAddressesPage.addAddress.should("be.visible").click();
    CreateAddressPage.country.should("be.visible").type("Testland");
    CreateAddressPage.name.should("be.visible").type("Timothy");
    CreateAddressPage.number.should("be.visible").type("09831233");
    CreateAddressPage.zipCode.should("be.visible").type("9082");
    CreateAddressPage.address.should("be.visible").type("An address");
    CreateAddressPage.city.should("be.visible").type("Ventspils");
    CreateAddressPage.state.should("be.visible").type("New York");
    CreateAddressPage.submitBtn.should("be.visible").click();
    SavedAddressesPage.addressTable.should("contain.text", ' Dummystreet 42, Mocktown, Testilvania, 12345 ')



  // Create scenario - Add address
  // Click on Account
  // Click on Orders & Payment
  // Click on My saved addresses
  // Create page object - SavedAddressesPage
  // Click on Add New Address
  // Create page object - CreateAddressPage
  // Fill in the necessary information
  // Click Submit button
  // Validate that previously added address is visible
  });

  it.only("Add payment option", () => {
    SearchPage.accountBtn.should("be.visible").click();
    SearchPage.ordersAndPaymentBtn.should("be.visible").click();
    SearchPage.myPaymentOptionsBtn.should("be.visible").click();
    SavedPaymentOptionsPage.newCard.should("be.visible").click();
    SavedPaymentOptionsPage.name.should("be.visible").type("Timothy");
    SavedPaymentOptionsPage.cardNumber.should("be.visible").type("1234567890098765");
    SavedPaymentOptionsPage.cardMonth.should("be.visible").select("7");
    SavedPaymentOptionsPage.cardYear.should("be.visible").select("2090");
    SavedPaymentOptionsPage.submitBtn.should("be.visible").click();
    SavedPaymentOptionsPage.paymentTable.should("be.visible").should("contain.text", "************8765 ")



  // Create scenario - Add payment option
  // Click on Account
  // Click on Orders & Payment
  // Click on My payment options
  // Create page object - SavedPaymentMethodsPage
  // Click Add new card
  // Fill in Name
  // Fill in Card Number
  // Set expiry month to 7
  // Set expiry year to 2090
  // Click Submit button
  // Validate that the card shows up in the list
  });


});
