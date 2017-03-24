function hasClass(element, className) {
  return (' ' + element.className + ' ').replace(/[\n\t]/g, ' ').indexOf(' ' + className + ' ') !== -1;
}

export default hasClass;
