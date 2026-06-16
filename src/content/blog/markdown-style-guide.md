---
title: 'Sky log template I use after each session'
description: 'A practical markdown template for recording weather, seeing, equipment, and post-processing notes.'
pubDate: 'May 10 2026'
images:
  - '../../assets/blog-placeholder-3.jpg'
---

After every clear night, I write one short post with the same structure so I can compare sessions quickly.

## Session snapshot

- **Date:** 2026-05-10
- **Location:** Semi-rural terrace, Bortle 6
- **Transparency / seeing:** 3/5 transparency, 2/5 seeing
- **Targets:** North America Nebula, Albireo

## Equipment

- Mount: HEQ5
- Scope: 72mm refractor
- Camera: OSC cooled
- Filter: Dual-band

## Capture plan

| Target | Exposure plan | Actual |
| --- | --- | --- |
| NGC 7000 | 90 x 120s | 72 x 120s |
| Albireo | 40 x 30s | 40 x 30s |

## Quick notes

- Guiding settled after recalibration.
- Dew became an issue after midnight.
- Framing was easiest using nearby bright stars first.

## Processing reminders

1. Run stronger gradient correction before stretching.
2. Keep stars protected early.
3. Save intermediate versions more often.

```markdown
| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |
```

### Output

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## Code Blocks

### Syntax

we can use 3 backticks ``` in new line and write snippet and close with 3 backticks on new line and to highlight language specific syntax, write one word of language name after first 3 backticks, for eg. html, javascript, css, markdown, typescript, txt, bash

````markdown
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```
````

### Output

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## List Types

### Ordered List

#### Syntax

```markdown
1. First item
2. Second item
3. Third item
```

#### Output

1. First item
2. Second item
3. Third item

### Unordered List

#### Syntax

```markdown
- List item
- Another item
- And another item
```

#### Output

- List item
- Another item
- And another item

### Nested list

#### Syntax

```markdown
- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese
```

#### Output

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Other Elements — abbr, sub, sup, kbd, mark

### Syntax

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
```

### Output

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
