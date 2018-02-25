'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _indexControllers = require('./indexControllers');

var _indexControllers2 = _interopRequireDefault(_indexControllers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controllerInit = {
	init: function init(app, router) {
		app.use(router(function (_) {
			_.get('/index/index', _indexControllers2.default.index());
			_.get('/index/update', _indexControllers2.default.update());
		}));
	}
};

exports.default = controllerInit;
