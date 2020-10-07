const input = [
  {
    type: 'header',
    depth: 1,
    children: [
      { type: 'text', value: 'Trumbowyg v3 ' },
      {
        type: 'underline',
        children: [
          { type: 'text', value: 'will be really great' },
        ],
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      { type: 'text', value: 'Lorem ' },
      {
        type: 'delete',
        children: [
          { type: 'text', value: 'ipsum ' },
          {
            type: 'strong',
            children: [
              { type: 'text', value: 'd' },
              {
                type: 'emphasis',
                children: [
                  { type: 'text', value: 'o' },
                ],
              },
              { type: 'text', value: 'lor' },
            ],
          },
        ],
      },
      { type: 'text', value: ' ' },
      {
        type: 'underline',
        children: [
          {
            type: 'emphasis',
            children: [
              { type: 'text', value: 'sit' },
            ],
          },
        ],
      },
      { type: 'text', value: ' amet' },
    ],
  },
  {
    type: 'paragraph',
    children: [
      { type: 'text', value: 'And ' },
      {
        type: 'strong',
        children: [
          { type: 'text', value: 'blah ' },
          {
            type: 'emphasis',
            children: [
              { type: 'text', value: 'or' },
            ],
          },
        ],
      },
      { type: 'text', value: ' nah.' },
    ],
  },
  {
    type: 'div',
    children: [
      { type: 'text', value: 'Salut' },
      { type: 'image', attributes: { src: '/contenteditable/img.svg', alt: 'Some JavaScript logo', width: '20px' } },
    ],
  },
  {
    type: 'ul',
    children: [
      {
        type: 'li',
        children: [
          { type: 'text', value: 'Item 1' },
        ],
      },
      {
        type: 'li',
        children: [
          { type: 'text', value: 'Second item' },
        ],
      },
      {
        type: 'li',
        children: [
          { type: 'text', value: 'List in list' },
          {
            type: 'ul',
            children: [
              {
                type: 'li',
                children: [
                  { type: 'text', value: 'Third li' },
                ],
              },
              {
                type: 'li',
                children: [
                  { type: 'text', value: 'Fourth Item' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: 'table',
    children: [
      {
        type: 'tableRow',
        children: [
          {
            type: 'tableCell',
            children: [
              { type: 'text', value: 'Col 1' },
            ],
          },
          {
            type: 'tableCell',
            children: [
              { type: 'text', value: 'Col 2' },
            ],
          },
        ],
      },
      {
        type: 'tableRow',
        children: [
          {
            type: 'tableCell',
            children: [
              { type: 'text', value: 'Line 1-1' },
            ],
          },
          {
            type: 'tableCell',
            children: [
              { type: 'text', value: 'Line 1-2' },
            ],
          },
        ],
      },
      {
        type: 'tableRow',
        children: [
          {
            type: 'tableCell',
            children: [
              { type: 'text', value: 'Line 2-1' },
            ],
          },
          {
            type: 'tableCell',
            children: [
              { type: 'text', value: 'Line 2-2' },
            ],
          },
        ],
      },
    ],
  },
]

document.getElementById('input').innerHTML = JSON.stringify(input, null, 2)

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
}

function tagBlockRenderer(tagName, structNode) {
  return '<' + tagName + '>' + render(structNode.children) + '</' + tagName + '>'
}

// Renderers
const renderers = {
  header: function (structNode) {
    return tagBlockRenderer('h' + structNode.depth, structNode)
  },
  block: function (structNode) {
    return tagBlockRenderer(blockToTag[structNode.type], structNode)
  },
  text: function (structNode) {
    return structNode.value
  },
  image: function (structNode) {
    const attributes = Object.keys(structNode.attributes).map((attribute) => [attribute, '"' + structNode.attributes[attribute] + '"'].join('=')).join(' ')

    return `<img ${attributes}>`
  },
}

function getRenderer(strucNode) {
  if (!renderers.hasOwnProperty(strucNode.type) && !blockToTag.hasOwnProperty(strucNode.type)) {
    console.warn('No renderer for strucNode', JSON.stringify(strucNode))
  }

  return renderers[strucNode.type] || renderers.block
}

function render(structNodes) {
  return structNodes.map((structNode) => {
    const renderer = getRenderer(structNode)
    if (!renderer) {
      return
    }

    return renderer(structNode)
  }).join('')
}

const output = render(input)
console.log(output)

document.getElementById('output').innerHTML = output

document.getElementById('input').addEventListener('input', function () {
  document.getElementById('output').innerHTML = render(JSON.parse(this.innerText))
})
