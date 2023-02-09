/// <reference types="cypress" />

// it('works', () => {
//   cy.visit('/')
//   cy.request(Cypress.env('apiUrl'))
// })

describe('Basic Tests', () => {
  // beforeEach(() => {
  //   // cy.IdentityServerAPILogin('vtolbert@hancockclaims.com', '1234Claims1234')
  //   // cy.visit('/')
  // })

  // it('Visits the app root url', () => {
  //   cy.contains('h1', 'Welcome to Your Vue.js + TypeScript App');
  // })

  describe('/Project', () => {
    beforeEach(() => {
      cy.visit('/Project');
    });

    it('Projects', () => {
      // Projects
      cy.get('.nav > [data-navid="projects"] > .dropdown-toggle').click();
      cy.contains('Project List').click();
      cy.url().should('include', '/Project');

      cy.get('.span4 > :nth-child(1) > .btn').click();
      cy.get('.controls > #Project_ClaimNumber').type('TEST-12345678');
      cy.get('#checkClaimNumber').click();
      cy.get(
        ':nth-child(19) > .span6 > .control-group > .controls > .k-widget > .k-dropdown-wrap > .k-input',
      ).type('State Farm');
      cy.get(
        ':nth-child(20) > .span6 > .control-group > .controls > .k-widget > .k-dropdown-wrap > .k-input',
      )
        .type('{downarrow}{downarrow}')
        .tab();
      cy.get('#Project_InsuredLastName').type('TEST Insured LastName');
      cy.get('#Project_InsuredFirstName').type('TEST Insured First Name');
      cy.get('#Project_InsuredPrimaryPhone').type('1234567890');
      cy.get('#Project_LossStreet').type('123 ABC Street');
      cy.get('#Project_LossCity').type('Atlanta');
      cy.get(
        ':nth-child(35) > .span6 > .control-group > .controls > .k-widget > .k-dropdown-wrap > .k-input',
      ).type(
        '{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}',
      );
      // cy.get(':nth-child(33) > .span6 > .control-group > .controls > .k-widget > .k-dropdown-wrap > .k-input').type('GA').tab()
      cy.get('#Project_LossPostalCode').type('30316');
      cy.get(
        ':nth-child(15) > [style="width: 100px;"] > .text-align-right > .serviceCheckbox',
      ).check();
      cy.get('.form-actions > .blue').click();
    });
  });
});

// describe('Basic Tests', () => {
//   // before(() => {
//   // })

//   beforeEach(() => {
//     cy.IdentityServerAPILogin('vtolbert@hancockclaims.com', '1234Claims1234')
//     cy.visit('/')
//   })

//   it('Projects', () => {
//       // Projects
//       cy.get('.nav > [data-navid="projects"] > .dropdown-toggle').click()
//       cy.contains('Project List').click()
//       cy.url().should('include', '/Project')

//         // Projects / Archived Projects
//         cy.get('.nav > [data-navid="projects"] > .dropdown-toggle').click()
//         cy.contains('Archived Projects').click()
//         cy.url().should('include', '/ArchivedProjects')

//         // Projects / Closed Projects
//         cy.get('.nav > [data-navid="projects"] > .dropdown-toggle').click()
//         cy.contains('Closed Projects').click()
//         cy.url().should('include', '/ClosedProjects')

//         // Projects / Upload Projects
//         cy.get('.nav > [data-navid="projects"] > .dropdown-toggle').click()
//         cy.contains('Upload Projects').click()
//         cy.url().should('include', '/UploadProjects')

//         // // Projects / Pending Claims
//         // cy.get('.nav > [data-navid="projects"] > .dropdown-toggle').click()
//         // cy.contains('Pending Claims').click()
//         // cy.url().should('include', '/PendingClaimsList')

//         // // Projects / External Claims
//         // cy.get('.nav > [data-navid="projects"] > .dropdown-toggle').click()
//         // cy.contains('External Claims').click()
//         // cy.url().should('include', '/ExternalClaimsList')

//     // Calendar
//     cy.get('.nav > [data-navid="calendar"] > a').click()
//     cy.url().should('include', '/Calendar')
//   })

//   it('Customers', () => {
//     // Customers
//     cy.get('.nav > [data-navid="customers"] > .dropdown-toggle').click()
//     cy.contains('Customer List').click()
//     cy.url().should('include', '/Customer')
//   })

//   it('Billing', () => {
//     // Billing
//     cy.get('.nav > [data-navid="billings"] > a').click()
//     cy.url().should('include', '/Billing')
//   })

//   it('Users', () => {
//     // Users
//     cy.get('.nav > [data-navid="users"] > .dropdown-toggle').click()
//     cy.contains('User List').click()
//     cy.url().should('include', '/User')
//   })

//   it('Reports', () => {
//     // Reports
//     cy.get('.nav > [data-navid="reports"] > .dropdown-toggle').click()
//     cy.contains('Report List').click()
//     cy.url().should('include', '/Report')
//   })

//   it('Settings', () => {
//     // Settings / Service Types
//     cy.get('.nav > [data-navid="announcements"] > .dropdown-toggle').click()
//     cy.contains('Service Type List').click()
//     cy.url().should('include', '/ServiceType')

//     // Settings / Announcements
//     cy.get('.nav > [data-navid="announcements"] > .dropdown-toggle').click()
//     cy.contains('Announcement List').click()
//     cy.url().should('include', '/Announcement')

//     // Settings / Service Areas and Territories
//     cy.get('.nav > [data-navid="announcements"] > .dropdown-toggle').click()
//     cy.contains('Territory List').click()
//     cy.url().should('include', '/Region')
//   })

//   it('Users', () => {
//     // Users
//     cy.get('.nav > [data-navid="users"] > .dropdown-toggle').click()
//     cy.contains('User List').click()
//     cy.url().should('include', '/User')
//   })

//   // it('Can Login', () => {
//   //   // cy.get('.nav > [data-navid="dashboard"] > .dropdown-toggle').click()
//   //   // cy.get('.nav > [data-navid="projects"] > .dropdown-toggle').click()
//   //   // cy.get('.nav > [data-navid="customers"] > .dropdown-toggle').click()
//   //   // cy.get('.nav > [data-navid="users"] > .dropdown-toggle').click()
//   //   // cy.get('.nav > [data-navid="reports"] > .dropdown-toggle').click()
//   //   // cy.get('.nav > [data-navid="announcements"] > .dropdown-toggle').click()
//   //   // Dashboard

//   //   // cy.get('.header.navbar a.brand').click()
//   //   // cy.url().should('equal', 'https://legacyqa.hancockclaims.com/')

//   //   // cy.get('.nav > [data-navid="projects"] > .dropdown-toggle').click()
//   //   // cy.contains('Project Assignment').click()
//   //   // cy.url().should('include', '/Scheduler/Shuffle')

//   //   // cy.get('.nav > [data-navid="projects"] > .dropdown-toggle').click()
//   //   // cy.contains('Add Project').click()
//   //   // cy.url().should('include', '/CreateProject')

//   //   // cy.go('back')

//   //   // cy.visit('/')  //Dashboard
//   //   // cy.visit('/Project')
//   //   // cy.visit('/Scheduler/Shuffle')
//   //   // cy.visit('/Project/CreateProject')
//   //   // cy.visit('/Project/ArchivedProjects')
//   //   // cy.visit('/Project/ClosedProjects')
//   //   // cy.visit('/Project/UploadProjects')
//   //   // cy.visit('/Project/PendingClaimsList')
//   //   // cy.visit('/Project/EVProjects')
//   //   // cy.visit('/User')
//   //   // cy.visit('/Billing')
//   //   // cy.visit('/Calendar')

//   //   // cy.get('.nav > [data-navid="autoScheduler"] > a').click()
//   //   // cy.get('.nav > [data-navid="calendar"] > a').click()
//   //   // cy.contains('').click()

//   //   // cy.visit('https://coreqa.hancockclaims.com/')
//   //   //   .url()
//   //   //   .should('include', 'https://identityqa.hancockclaims.com/Identity/Account/Login')

//   // })

// })

// https://legacyqa.hancockclaims.com/
// https://coreqa.hancockclaims.com/
// https://identityqa.hancockclaims.com/Identity/Account/Login

// cy.get('a').attribute('href')
// <img src="./images/tiger.jpg" alt="Teriffic tiger">
// cy.get('img').attribute('alt');

// https://identity.hancockclaims.com/Home/Index
// https://identity.hancockclaims.com/Identity/Account/Login
// https://identity.hancockclaims.com/
// https://identity.hancockclaims.com/Identity/Account/Logout
// https://portal.hancockclaims.com/

// https://han-dev-identity.azurewebsites.net/Home/Index
// https://han-dev-identity.azurewebsites.net/Identity/Account/Login
// https://han-dev-identity.azurewebsites.net/
// https://han-dev-identity.azurewebsites.net/Identity/Account/Logout?logoutId=

// PROD
// https://han-prod-east-exemplar-core.azurewebsites.net/PropertyInspection/PropertyInspections?projectNumber=2112270197
// https://han-prod-east-exemplar-core.azurewebsites.net/Technician/AutoScheduler

// Project Number:
// 2110050003
// Claim Number
// 9876543210
// Company
// State Farm
// Insured Name
// VIC TOLBERT
// Insured Primary Phone:
// (678) 613-3400
// Insured Primary Email:

// Address:
// 1547 BOULDER WALK DR SE
// ATLANTA, Georgia 30316-3987

// Adjuster:
// Indy1 Adj1
// Adjuster Email:
// indy1adjuster1@mailinator.com

// Technician:
// Technician Phone:

// My Dashboard
// https://portal.hancockclaims.com/
// Super Dashboard
// https://portal.hancockclaims.com/Home/SuperDashboard

// Projects List
// https://portalstaging.hancockclaims.com/Project
// Project Detail
// https://portalstaging.hancockclaims.com/Project/Detail/1164245
// // Property Inspection Form Admin
// https://han-dev-exemplar-core.azurewebsites.net/PropertyInspection/PropertyInspections?projectNumber=2110050003
// Project Assignment
// https://portalstaging.hancockclaims.com/Scheduler/Shuffle
// Create Project
// https://portalstaging.hancockclaims.com/Project/CreateProject
// Edit Project
// https://portalstaging.hancockclaims.com/Project/CreateProject/1164245
// https://portalstaging.hancockclaims.com/Project/ArchivedProjects
// https://portalstaging.hancockclaims.com/Project/ClosedProjects
// https://portalstaging.hancockclaims.com/Project/PendingClaimsList
// https://portalstaging.hancockclaims.com/Project/ExternalClaimsList
// https://portalstaging.hancockclaims.com/Project/EVProjects

// Auto Scheduler
// https://han-dev-exemplar-core.azurewebsites.net/Technician/AutoScheduler

// Calendar
// https://portalstaging.hancockclaims.com/Calendar

// Customers List
// https://portalstaging.hancockclaims.com/Customer
// Add Customer
// https://portalstaging.hancockclaims.com/Customer/CreateInsCompany
// Business Unit Setup
// https://portalstaging.hancockclaims.com/Customer/CreateBusinessUnit
// State Farm
// https://portalstaging.hancockclaims.com/Customer/ViewInsCompany/337
// Edit State Farm
// https://portalstaging.hancockclaims.com/Customer/CreateInsCompany/337
// Customer Setup
// https://portalstaging.hancockclaims.com/Customer/CreateInsCompany

// Billing
// https://portal.hancockclaims.com/Billing

// Users
// https://portal.hancockclaims.com/User
// Bulk Assignment
// https://portal.hancockclaims.com/User/UserBulkAssignment
// Add Application User
// https://portal.hancockclaims.com/User/Create?userType=ApplicationUser
// Add Service Tech
// https://portal.hancockclaims.com/User/Create?userType=ServiceTech
// Add Insurance Adjuster
// https://portal.hancockclaims.com/User/Create?userType=InsAdjuster

// // <input name="__RequestVerificationToken" value="THETOKEN" />
// //
// // Use cy.request() to get around CSRF protections.
// // Parse CSRF tokens out of HTML.
// // Parse CSRF tokens out of response headers.
// // Expose CSRF via a route.
// // Disable CSRF when not in production.

// context('Login', () => {
//   it('Login', () => {
//     cy.visit('https://portalstaging.hancockclaims.com/')
//       .url()
//       .should('include', 'https://han-dev-identity.azurewebsites.net/Identity/Account/Login')

//     cy.get('#Input_Email')
//       .type('vtolbert@hancockclaims.com')
//       .tab()
//       .type('secret')
//   })
//   // it('markdown', () => {
//   //   cy.get('[title="About"]').click().url().should('eq', 'http://localhost:8888/about')
//   //   cy.get('pre.language-js').should('exist')
//   // })
// })

// describe('The Create Page', () => {
//   it('successfully creates a thing', () => {
//     cy.visit('/create')
//     cy.get('input[name=description]').type('Hello World')
//     cy.get('button#submit')
//       .click()

//     // After POST'ing this data via AJAX, the web app then
//     // receives the id of the new thing that was just created
//     // and redirects the user to /newthing/:id
//     // How do I test that this redirection worked?
//   })
// })
