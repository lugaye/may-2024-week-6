const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../../index'); //entry point for your application
const expect = chai.expect;

chai.use(chaiHttp);

describe('User Integration Test', () => {
    it('should create a new user and retrieve the details', (done) => {
        const user = {
            username: 'ed678',
            email: 'ed678@mail.com',
            password: '123456',
            full_name: 'Eddy PLP'
        };

        chai.request(app)
            .post('/register')
            .send(user)
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('username').eql('ed678');
                expect(res.body).to.have.property('email').eql('ed678@mail.com');
                expect(res.body).to.have.property('full_name').eql('Eddy PLP');
                done();
        });
    });
});
