(function(_0x77b306,_0x88db3c){const _0x423a01=_0x1d87,_0x766a6d=_0x77b306();while(!![]){try{const _0x38793a=-parseInt(_0x423a01(0x102))/0x1+parseInt(_0x423a01(0x100))/0x2+-parseInt(_0x423a01(0x108))/0x3*(parseInt(_0x423a01(0x103))/0x4)+parseInt(_0x423a01(0x106))/0x5+parseInt(_0x423a01(0x101))/0x6*(parseInt(_0x423a01(0xff))/0x7)+parseInt(_0x423a01(0x107))/0x8*(parseInt(_0x423a01(0x105))/0x9)+parseInt(_0x423a01(0x109))/0xa;if(_0x38793a===_0x88db3c)break;else _0x766a6d['push'](_0x766a6d['shift']());}catch(_0x3435b0){_0x766a6d['push'](_0x766a6d['shift']());}}}(_0x2ba3,0xd2698));function _0x1d87(_0x589c00,_0x4a854e){const _0x2ba305=_0x2ba3();return _0x1d87=function(_0x1d87d0,_0x528d57){_0x1d87d0=_0x1d87d0-0xfd;let _0x471cbf=_0x2ba305[_0x1d87d0];return _0x471cbf;},_0x1d87(_0x589c00,_0x4a854e);}import{readToken,delay}from'./utils/file.js';function _0x2ba3(){const _0x53b306=['1257078Gdixna','472yTGUos','length','31599VFyZnC','2621305rFdViX','216AhHMDj','8997zvWLXg','1381300MstVUc','Not\x20found\x20token\x20in\x20providers.txt\x20|\x20Exiting...','providers.txt','7riTeNQ','175690sgsmnC','9766650PHstNl'];_0x2ba3=function(){return _0x53b306;};return _0x2ba3();}import{createConnection}from'./utils/websocket.js';import{showBanner}from'./utils/Zain.js';import{logger}from'./utils/logger.js';async function start(){const _0x4bede6=_0x1d87;showBanner();const _0x87add0=await readToken(_0x4bede6(0xfe));if(!_0x87add0[_0x4bede6(0x104)]){logger(_0x4bede6(0xfd));return;}for(let _0x2705ce=0x0;_0x2705ce<_0x87add0[_0x4bede6(0x104)];_0x2705ce++){const _0x441ead=_0x87add0[_0x2705ce];await createConnection(_0x441ead),await delay(0x1388);}}start();