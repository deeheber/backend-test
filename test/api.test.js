const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = require('chai').assert;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');
const app = require('../lib/app');

describe('api e2e', ()=>{
  // clears out the db
  before(done=> {
    const drop = ()=> connection.db.dropDatabase(done);
    if (connection.readyState === 1) drop();
    else connection.on('open', drop);
  });

  const request = chai.request(app);

  let image1 = {url: 'First URL', caption: 'First caption'};
  let image2 = {url: 'Second URL', caption: 'Second caption'};

  it('adds image1', done=>{
    request.post('/api/images')
      .send(image1)
      .then(res=>{
        const image = res.body;
        assert.ok(image._id);
        image1.__v = 0;
        image1._id = image._id;
        assert.deepEqual(res.body, image1);
        done();
      })
      .catch(done);
  });

  it('adds image2', done=>{
    request.post('/api/images')
      .send(image2)
      .then(res=>{
        const image = res.body;
        assert.ok(image._id);
        image2.__v = 0;
        image2._id = image._id;
        assert.deepEqual(res.body, image2);
        done();
      })
      .catch(done);
  });

  it('gets all images', done =>{
    request.get('/api/images')
      .then(res=>{
        assert.equal(res.body.length, 2);
        assert.deepEqual(res.body[0], image1);
        done();
      })
      .catch(done);
  });

  // close db connection
  after(done=> {
    connection.close();
    done();
  });
});
