# Trumbowyg v3 draft


0. UI click button
1. Core
   - Save selection (2-7)
   - call button action : edit AST
2. AST watch
   - render
   - update ContentEditable
   - update textarea
   - restore Selection (2-7)



------------

npm

- trumbowyg@3.x

- @trumbowyg/vue
- @trumbowyg/react
- @trumbowyg/angular

------------

Button:
- updates AST

HTML:
- Parser: HTML -> AST
- Renderer View: AST -> HTML
- Renderer Output: AST -> HTML

Markdown:
- Parser: Markdown -> AST
- Renderer View: AST -> Markdown flavored AST -> HTML
- Renderer Output: AST -> Markdown

LaTeX:
- Parser: LaTeX -> AST
- Renderer View: AST -> LaTeX flavored AST -> HTML
- Renderer Output: AST -> LaTeX


```javascript
const ast = {
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
}

const transformAstForView = function (ast): AST {
    return {
      type: 'strong',
      children: [
        { type: 'text', value: '**', attributes: {class: 'tbw-meta'} },
        { type: 'text', value: 'd' },
        {
          type: 'emphasis',
          children: [
            { type: 'text', value: 'o' },
          ],
        },
        { type: 'text', value: 'lor' },
        { type: 'text', value: '**', attributes: {class: 'tbw-meta'} },
      ],
    }
}

const renderView = function (...args) {
  return render(transformAstForView(...args))
}

const output = render(ast)
const view = renderView(ast)
```


# Usage examples

```javascript
// example.js

import Trumbowyg from 'trumbowyg'

new Trumbowyg(document.querySelector('#editor'))
```

```javascript
// example.multiple-instances.js

import Trumbowyg from 'trumbowyg'

document.querySelectorAll('.editor').forEach((editor) => new Trumbowyg(editor))
```

```javascript
// example.with-module.js

import Trumbowyg from 'trumbowyg'
import {DEFAULT_MODULES} from 'trumbowyg/presets/modules'
import CleanPaste from 'trumbowyg/plugins/CleanPaste'
import {
  ItalicButton,
  StrongButton,
  CenterButton,
  ColorButton
} from 'trumbowyg/buttons'

new Trumbowyg('#editor', {
  modules: [
    ...DEFAULT_MODULES,
    CleanPaste
  ],
  buttons: [[ItalicButton, StrongButton], CenterButton, ColorButton]
})
```


```javascript
// example.markdown.js

import Trumbowyg from 'trumbowyg'
import {DEFAULT_MARKDOWN_MODULES} from 'trumbowyg/presets/modules'
import CleanPaste from 'trumbowyg/plugins/CleanPaste'
import {
  ItalicButton,
  StrongButton,
  CenterButton,
  ColorButton
} from 'trumbowyg/buttons'

new Trumbowyg('#editor', {
  modules: [
    ...DEFAULT_MARKDOWN_MODULES,
    CleanPaste
  ],
  buttons: [[ItalicButton, StrongButton], CenterButton, ColorButton]
})
```


```javascript
// example.full.js

import Trumbowyg from 'trumbowyg'
import {
  Italic,
  Strong,
  Center,
  Color,
  CleanPaste,
  History,
  Mention
} from 'trumbowyg/core/modules'
import {
  ItalicMarkdown,
  StrongMarkdown,
  CenterMarkdown,
  ColorMarkdown,
} from 'trumbowyg/core/renderer/markdown'
import {
  ItalicButton,
  StrongButton,
  CenterButton,
  ColorButton
} from 'trumbowyg/ui/buttons'
import {
  MonTruc,
  MonTrucMarkdown
} from './montruc'

new Trumbowyg('#editor', {
  modules: [
    Italic(ItalicMarkdown),
    Strong(StrongMarkdown),
    Center(CenterMarkdown),
    Color(ColorMarkdown),
    MonTruc(MonTrucMarkdown),
    CleanPaste,
    History,
    Mention
  ],
  buttons: [[ItalicButton, StrongButton], CenterButton, ColorButton]
})
```


```javascript
// core/presets/modules

export DEFAULT_MARKDOWN_MODULES from './DEFAULT_MARKDOWN_MODULES'
export LIGHT_MARKDOWN_MODULES from './LIGHT_MARKDOWN_MODULES'
```



