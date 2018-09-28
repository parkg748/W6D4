class DOMNodeCollection {
  constructor(nodes) {
    this.nodes = nodes;
  }
  
  html(str = 0) {
    if (str === 0) {
      return this.nodes[0].innerHTML;
    } else {
      this.nodes.forEach((node) => {
        node.innerHTML = str;
      });
    }
  }
  
  empty() {
    this.html('');
  }
  
  append(str) {
    this.nodes.forEach((node) => {
      node.innerHTML += str;
    });
    // debugger; 
  }
  
  attr(key, value) {
    this.nodes.forEach((node) => {
      node.setAttribute(key, value);
    });
  }
  
  addClass(str) {
    this.nodes.forEach((node) => {
      node.classList.add(str);
    });
  }
  
  removeClass(str) {
    this.nodes.forEach((node) => {
      node.classList.remove(str);
    });
  }
  
  children() {
    let childrens = [];
    this.nodes.forEach((node) => {
      let eachChild = Array.from(node.children);
      eachChild.forEach((child) => {
        childrens.push(child);
      });
    });
    return new DOMNodeCollection(childrens);
  }
  
  parent() {
    let parents = [];
    this.nodes.forEach((node) => {
      parents.push(node.parentElement);
    });
    return new DomNodeCollection(parents);
  }
  
  find(str) {
    let matchingSelectors = [];
    this.nodes.forEach((node) => {
      let array = Array.from(node.querySelectorAll(str));
      matchingSelectors.concat(array);
    });
    return new DOMNodeCollection(matchingSelectors);
  }
  
  remove() {
    let htmlNodes = [];
    this.nodes.forEach((node) => {
      node.parentNode.removeChild(node);
    });
  }
  
  on(str, callback) {
    const thing = document.getElementByTagName(str);
    thing.addEventListener('click', (e) => {});
  }
  
  off(str) {
    const thing = document.getElementByTagName(str);
    thing.removeEventListener('click', (e) => {});
  }
}

module.exports = DOMNodeCollection;