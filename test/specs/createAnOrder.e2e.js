const page = require('../../page');
const helper = require('../../helper')

/*describe('Create an order', () => {
   it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
    }) */

    it('should wait for the taxi driver', async () => {
        //call the taxi to the address
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        //select supportive mode 
        const supportiveCarType = await $(page.supportiveCarType);
        await supportiveCarType.waitForDisplayed();
        await supportiveCarType.click();
        await expect(supportiveCarType).toBeClickable();

        //input phone number
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        
        //adding a payment card
        await page.addPaymentMethodCard();
        
        const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
        await cardPaymentMethodIcon.waitForDisplayed();
        await expect(await $(cardPaymentMethodIcon)).toBeExisting();

        //message to driver
        const messageInput = await $(page.messageInput);
        await messageInput.waitForDisplayed();
        await messageInput.click();
        await messageInput.setValue("Hello");

        //Ordering a Blanket and handkerchiefs
        const BlanketHandkerchiefsButton = await $(page.BlanketHandkerchiefsButton);
        await BlanketHandkerchiefsButton.waitForDisplayed();
        await BlanketHandkerchiefsButton.click();
        await expect(BlanketHandkerchiefsButton).toBeEnabled();

        //Order 2 ice creams
        await page.addIceCreamOrder();

        //submit car order
        const submitCarOrder = await $(page.submitCarOrder);
        await submitCarOrder.waitForDisplayed();
        await submitCarOrder.click();
        await expect(submitCarOrder).toBeClickable();
        await browser.pause(20000);

    })


