import  requestsuper from'supertest';
import app from '../app-es.js';


function request(){
	return requestsuper(app.listen())
}

describe('接口测试', function() {
  it('大拇指点赞', function(done) {
    request()
      .get('/index/update')
      .expect(200)
      .end(function (err,res) {
      	if(res.data==1) return done(err);
      		done();
      })
  });
});