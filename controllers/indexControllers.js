'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _indexModels = require('../models/indexModels');

var _indexModels2 = _interopRequireDefault(_indexModels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var indexController = {
	index: function index() {
		return async function (ctx, next) {
			ctx.body = await ctx.render('index.html', {
				title: '大拇指点赞'
			});
		};
	},
	update: function update() {
		return async function (ctx, next) {
			console.log('ok');
			var indexM = new _indexModels2.default();
			ctx.body = await indexM.updateNum();
		};
	}
};

exports.default = indexController;
