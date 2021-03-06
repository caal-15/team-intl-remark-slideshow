class: introOutro

.introOutroText[
  # This is the title
  ## This is the Subtitle
]

---
class: blueBg1, middle, center

# Content

.contentTable[
  |||
  |---|---|
  |.green[.bold[1. ]]|Blue Slide|
  |.green[.bold[2. ]]|Green Slide|
  |.green[.bold[3. ]]|White Slide|
  |.green[.bold[4. ]]|Blue Centered Slide|
  |.green[.bold[5. ]]|Small Column Slide|
  |.green[.bold[6. ]]|Big Column Slide|
  |.green[.bold[7. ]]|Image Bottom Slide|
]

---
class: blueBg1

# Slide 1

This is a blue slide (.bold[slide class:] .green[`blueBg1`]) with .bold[bold text], .italic[italic text], .green[green text], and `code text`, this all can be combined, .italic[e.g.:] .green[.italic[.bold[Green Italic Bold Text!]]] or .green[`green code text!`].

---
class: greenBg1

# Slide 2

This is a green slide (.bold[slide class:] .blue[`greenBg1`]) and a bit of .blue[blue text].

---
class: whiteBg1

# Slide 3

A white background slide (.bold[slide class:] .green[`whiteBg1`]).

```javascript
const { error } = props

const msg = `An error happended: ${error}`
```

With some highlighted code!

.footnote[.green[.bold[And a cute footnote]]]

---
class: blueBg1, logoLeft, middle, center

# Slide 4

This is a blue slide with the logo on the .italic[left] (.bold[slide class:] .green[`blueBg1`], .green[`logoLeft`]) with .italic[vertically centered] content (.bold[slide class:] .green[`middle`]) and .italic[horizontally centered] content (.bold[slide class:] .green[`center`]).

---
class: greenBg1, logoLeft

.smallColumnLeft[
  # Slide 5

  This is a small column to the left, it can contain a small piece of .blue[text] and a big .blue[image] to the right. Content is .italic[vertically] centered :) (.bold[content class:] .blue[`smallColumnLeft`] for the text and .blue[`bigColumnRight`] for the image).

  .footnote[.bold[Slide classes for this slide:] .blue[`greenBg1, logoLeft`]]
]

.bigColumnRight[![Random Image](img/image.jpg)]

---
class: whiteBg1, logoLeft

.bigColumnLeft[
  # Slide 6

  This is a big column to the left, it can contain a bigger pieces of .blue[text] and a small .blue[image] to the right. Content is .italic[vertically] centered :) (.bold[content class:] .blue[`bigColumnLeft`] for the text and .blue[`smallColumnRight`] for the image).

  .footnote[.bold[Slide classes for this slide:] .blue[`whiteBg1, logoLeft`]]
]

.smallColumnRight[![Random Image](img/image.jpg)]

---
class: blueBg1, middle, center

# Slide 7

This shows an .green[image] at the bottom, because sometimes you want to do that, and there is no one who can stop you! so go ahead and make the world your own! :) (.bold[content class:] .green[`bottomImage`]).

.bottomImage[![Random Image](img/image.jpg)]

---
class: introOutro

.introOutroText[
  # Thank you!
]
