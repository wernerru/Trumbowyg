const input = document.getElementById('input')

const blockToTag = {
  paragraph: 'p',
  div: 'div',
  ul: 'ul',
  li: 'li',
  table: 'table',
  tableRow: 'tr',
  tableCell: 'td',
  strong: 'strong',
  emphasis: 'em',
  delete: 'del',
  underline: 'u',
  heading: 'h1',
}

const tagByBlock = Object.entries(blockToTag).reduce((acc, entry) => {
  const [key, value] = entry
  acc[value] = key
  return acc
}, {})

function parse(node) {
  return Array.from(node.childNodes).map((subNode) => {
    const type = subNode.nodeType === Node.TEXT_NODE
      ? 'text'
      : tagByBlock[subNode.tagName.toLowerCase()]

    let nodeStruct = { type }

    if (subNode.nodeType === Node.TEXT_NODE) {
      nodeStruct.value = subNode.textContent
    } else if (subNode.childNodes.length > 0) {
      nodeStruct.children = parse(subNode)
    }

    return nodeStruct
  })
}

const output = parse(input)
console.log(output)

document.getElementById('output').innerHTML = JSON.stringify(output, null, 2)
hljs.highlightBlock(document.querySelector('pre code'))

document.getElementById('input').addEventListener('input', function () {
  document.getElementById('output').innerHTML = JSON.stringify(parse(this), null, 2)
  hljs.highlightBlock(document.querySelector('pre code'))
})
