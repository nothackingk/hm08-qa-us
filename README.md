# Project 8: Task
Automated tests covering the full process of ordering a taxi

# Documentation used
-https://webdriver.io/docs/api/expect-webdriverio/

# Project purpose
This project includes 4 test cases and achieves the following:
automated tests covering the full process of ordering a taxi.

    -Setting the address
    -Selecting Supportive plan
    -Filling in the phone number
    -Adding a credit card (Tip: the “link” button doesn’t become active until the card CVV field on the “Adding a card” modal id=”code” class=”card-input” loses focus. To change -focus you can simulate the user pressing TAB or clicking somewhere else on the screen).
    -Writing a message for the driver
    -Ordering a Blanket and handkerchiefs (Tip: there are two selectors to be aware of here. One selector to click on and one to run expect on to verify that the state changed).
    -Ordering 2 Ice creams
    -The car search modal appears

# Code style
-variables used:
    // input
    codeField: '#code', - card cvv field,
    cardNumber:'#number', -credit card number,
    cardCode: '#code.card-input', - card cvv number,
    messageInput: '#comment', - message to driver,

    // Buttons
    supportiveCarType: 'div=Supportive',
    paymentMethodButton: '.pp-text', 
    addCardButton: 'div=Add card',
    linkCardButton: 'button=Link',
    closePaymentButton : '.payment-picker .close-button',
    BlanketHandkerchiefsButton : '.slider',
    iceCreamCounter: '.counter-plus',
    iceCreamCounterDisabled: '.counter-plus.disabled',
    submitCarOrder: '.smart-button',

    //Misc
    addCardOffClick: '.plc',
    cardPaymentMethodIcon : 'img[alt="card"]',


# Setup instructions
-Open your preferred terminal emulator. If you’re on Windows, use Git Bash.
create a directory:

 cd ~               # make sure you're in your home directory
 mkdir projects     # create a folder called projects
 cd projects        # change directory into the new projects folder
  

# Clone the repo.

 # if you are using HTTPS
 git clone https://github.com/username/hm08-qa-us.git
 
 # if you are using SSH
 git clone git@github.com:username/hm08-qa-us.git

# install npm
Before starting your work with the project, run npm install from the console in your project folder. 

# Replace api url
In wdioconfig.js, replace the API URL with the unique link generated after the launch of Urban routes server.

# Running the Tests
- Tests can be executed by using the command terminal, using the phrase here 'npm run wdio'.
- the actions these tests execute are covering the full process of ordering a taxi.
- example of how to run the test script : npm run wdio