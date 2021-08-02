/**
 * STEP 2: The render Function
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

function render(element, container) {
  const dom = element.type === 'TEXT_ELEMENT' ? document.createTextNode('') : document.createElement(element.type)

  const isProperty = key => key !== 'children'
  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = element.props[name]
    })

  element.props.children.map(child => {
    render(child, dom)
  })

  container.appendChild(dom)
}

const Mirai = {
  createElement,
  render
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
Mirai.render(element, container)