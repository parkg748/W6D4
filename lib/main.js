const DOMNodeCollection = require('./dom_node_collection');


window.$l = arg => {
  if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  } else if (typeof str === 'string') {
    let querySelect = document.getElementByTagName(arg);
    return new DOMNodeCollection(querySelect);
  }
  // 
  // }
  
};

