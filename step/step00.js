/**
 * STEP 0: WITHOUT USING REACT
 * const element = <h1 title="foo">Hello</h1>  // REPLACE 1
 * const container = document.getElementById("root")
 * ReactDOM.render(element, container)  // REPLACE 2
 */

const element = {
  type: 'h1',
  props: {
    title: 'foo',
    children: 'Hello'
  }
}

const container = document.getElementById('root')

const node = document.createElement(element.type)
node['title'] = element.props.title

const text = document.createTextNode('')
text['nodeValue'] = element.props.children

node.appendChild(text)
container.appendChild(node)