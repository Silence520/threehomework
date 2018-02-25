import  Koa  from'koa';
import  router  from'koa-simple-router';
import  render  from'koa-swig';
import  co  from'co';
import  serve  from'koa-static';
import  initControllers  from'./controllers/initControllers';
import  Config  from'./config/Config';

const app = new Koa();
initControllers.init(app,router)


app.context.render = co.wrap(render({
	 root:Config.get('viewDir'),
	 autoescape: true,
	 cache: 'memory', // disable, set to false
	 ext: 'html',
}));
app.use(serve(Config.get('staticDir')));
app.listen(Config.get('port'));

export default app;