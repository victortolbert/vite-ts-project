import '@testing-library/cypress/add-commands'
import { configure } from '@testing-library/cypress'

configure({testIdAttribute: 'data-test-id'})

// findBy, findAllBy, queryBy and queryAllBy

// cy.findAllByText('Button Text').should('exist')
// cy.findAllByText('Non-existing Button Text').should('not.exist')
// cy.findAllByLabelText('Label text', {timeout: 7000}).should('exist')
// cy.findAllByText('Jackie Chan').click()

// // findAllByText _inside_ a form element
// cy.get('form').findAllByText('Button Text').should('exist')


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// http://portalstaging.hancockclaims.com/
// https://han-dev-identity.azurewebsites.net/connect/authorize
// https://han-dev-identity.azurewebsites.net/Identity/Account/Login?ReturnUrl=
// https://han-dev-identity.azurewebsites.net/Identity/Account/Login
// https://portalstaging.hancockclaims.com/Project/Detail/1164245

const thirdPartyServerUrl = 'https://identityqa.hancockclaims.com/Identity/Account/Login'

Cypress.Commands.add('IdentityServerAPILogin', (email, password) => {
  cy.server()

  // Step 1
  cy.request('GET', thirdPartyServerUrl).then(response => {

    // Step 2. Parses the html response to fetch the CSRF token
    const htmlDocument = document.createElement('html')
    htmlDocument.innerHTML = response.body

    const loginForm = htmlDocument.getElementsByTagName('form')[0]
    const requestVerificationToken = loginForm.elements.__RequestVerificationToken.value
    console.log({ requestVerificationToken })

    // Step 3. Sends a valid request to thirdPartyServerUrl which sets the session cookies on a successful response
    cy.request({
      method: 'POST',
      url: thirdPartyServerUrl,
      followRedirect: false,
      form: true,
      body: {
        ReturnUrl: '',
        Email: email,
        Password: password,
        __RequestVerificationToken: requestVerificationToken
      }
    })
  })
})

Cypress.Commands.add('validateSilentAuthentication', (validateFn) => {
  return cy.window().then((win) => {
    return new Cypress.Promise((resolve) => {
      const listener = (e) => {
        if (e.data.type === 'authorization_response') {
          win.removeEventListener('message', listener);
          const { response } = e.data;
          validateFn(response);
          resolve();
        }
      };
      win.addEventListener('message', listener);
    });
  });
})

Cypress.Commands.add('vue', () => {
  return cy.wrap(Cypress.vueWrapper)
})

Cypress.Commands.overwrite('submit', function (original, $form) {
  const spy = cy.spy(() => {
  })
  if ($form) {
    $form[0].submit = spy
  }

  return cy.wrap(original(...Array.from(arguments).slice(1)), { log: false }).wrap(spy, { log: false })
})
