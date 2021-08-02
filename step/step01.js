/**
 * STEP 1: The createElement Function
 */

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === 'object' ? child : createTextElement(child)
        )
    }
  }
}

function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: []
    }
  }
}

const Mirai = {
  createElement
}

/** @jsx Mirai.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
)
// const element = Mirai.createElement(
//   'div',
//   { id: 'foo' },
//   Mirai.createElement('a', null, 'bar'),
//   Mirai.createElement('b')
// )
const container = document.getElementById("root")
ReactDOM.render(element, container)