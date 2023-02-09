const lodash = require('lodash')
const faker = require('faker')

const projects = lodash.times(100, n => {
  const CreatedOn = faker.date.past(2)
  const Customer = faker.name.findName()

  return {
    Id: n + 1,
    IsActive: faker.random.arrayElement([0, 1]),
    ProjectNumber: faker.datatype.uuid(),
    ClaimNumber: faker.datatype.uuid(),
    Customer,
    Avatar: faker.image.avatar(),
    LossPhoneNumber: faker.phone.phoneNumber(),
    Email: faker.internet.email(Customer),
    ProjectStatus: faker.random.arrayElement([
      'Call Queue',
      'Assigned',
      'Confirmed',
      'Working',
      'Review',
      'Complete',
      'Billed',
      'Closed',
      'Pending',
      'Schedule',
      'Triage',
    ]),
    CreatedOn,
    ServiceTech: faker.random.arrayElement(['pending', 'complete']),
    InsuranceCompany: faker.random.arrayElement([
      'Esurance',
      'Encompass',
      'California State Auto Association',
      'Liberty Mutual',
    ]),
    InsuranceAdjuster: faker.random.arrayElement(['David Edwards', 'complete']),
    Address: faker.address.streetAddress(),
    City: faker.address.city(),
    State: faker.address.stateAbbr(),
    PostalCode: faker.address.zipCode(),
    ServiceArea: faker.random.arrayElement(['DC Metro', 'complete']),
    ServiceRegion: faker.random.arrayElement(['Mid-Atlantic', 'complete']),
    RegionLead: faker.random.arrayElement(['pending', 'complete']),
    ServiceType: faker.random.arrayElement([
      'Direct Inspect',
      'Virtual Inspect',
      'Emergency Tarp',
      'Estimate',
      'Ladder Assist',
    ]),
    ProviderId: faker.datatype.uuid(),
    LastSeen: faker.date.between(CreatedOn, new Date()),
    RequiresHAAG: 0,
  }
})

module.exports = projects

// "PastDueNotComplete": 1226817,
// "PastDueComplete": 1226757,
// "IsToday": 1226880,
// "IsTomorrow": 1228320,
// "IsRecentClosed": 1226880,
// "IsRecentCreated": 1226880,
// "AssignableId": 0,
// "Assignable": "",
// "CreatedBy": "NHA",
// "ReadBySvt": 35649,
// "IsReinspect": "0",
// "AdjusterProjectNumber": 280,
// "IsEscalation": "1",
// "IsReschedule": null
