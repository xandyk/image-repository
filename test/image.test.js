const request = require('supertest')
const app = require('../src/app')
const { setupDB } = require('./fixtures/db')

beforeAll(setupDB)

// Assertion of getting an image with filename
test('Should get an image with filename', async () => {
    await request(app)
    .get('/image/leaves.jpg')
    .send()
    .expect(200)
})

// Assertion of getting an image with keyword
test('Should get an image with keyword', async () => {
    await request(app)
    .get('/image-search/beautiful')
    .send()
    .expect(200)
})

// Assertion of deleting an image by filenmae
test('Should delete an image', async () => {
    await request(app)
    .delete('/image/leaves')
    .send()
    .expect(200)
})
