---
marp: true
theme: gaia
size: 16:9
footer: Fragments, React and Widgets - pablomolina.me/r/liferay-fragments
---

<!-- _footer: "" -->
<!-- _class: "lead" -->

# Fragments, React and Widgets

[pablomolina.me/r/liferay-fragments](https://pablomolina.me/r/liferay-fragments)

---

## Who am I?

- Spider-Man fan
- Joined Liferay in 2017
- Working mostly on _Modern Site Building_
- Chachi FrontEnd Developer™
  - 😱 No Java
  - 😭 No ~~Portlets~~ Widgets
  - 💔 No FreeMarker

---

<!-- _class: "lead" -->

## Please do interrupt me

🔊

---

<!-- _class: "lead" -->

> Fragments are simple, are just some pieces of HTML, CSS and JavaScript that can be added to a page and easily managed by FrontEnd developers...

> ... But now they have more capabilities and are more complex, lets see the differences.

<p style="text-align: left; font-size: 0.75em; margin-top: 4em;">
Me - Fragments, React and Widgets: <a href="https://liferay.dev/blogs/-/blogs/fragments-react-and-widgets">liferay.dev/blogs/-/blogs/fragments-react-and-widgets</a>
</p>

---

## Summary

0. Widgets
1. First Fragment
2. Content Pages vs Widget Pages
3. Extending Fragments
4. Using React
5. _Next steps_

---

## 0. Widgets

- Java _components_
- Can do _virtually_ everything
- Can be built using FrontEnd tools

<p style="text-align: left; font-size: 0.75em; margin-top: 4em;">
Carlos Lancha and Rodolfo Miranda - The Frontend Developer’s Guide to the Galaxy: Integrating a Real-world App in DXP: <a href="https://www.youtube.com/watch?v=WMEXAGMP9Ls">youtu.be/WMEXAGMP9Ls</a>
</p>

---

## 1. First Fragment

- Start from scratch
- Use only HTML, CSS, and JavaScript
- Works inside a Content Page

```
<button type="button">
  Click me
</button>

fragmentElement.addEventListener(
  "click",
  () => alert("Hey!")
);
```

---

## 2. Content Pages vs Widget Pages

With Content Pages:

- Layout is restricted
- No templates are provided
- Widgets can be used too (7.2+)

---

## 3. Extending Fragments

- Widgets inside Fragments
- `<lfr-editable />`
- FreeMarker
- Toolkit
- Configuration
- Compositions
- `data-lfr-editable`
- Common Styles
- FragmentRenderer
- SCSS
- React
- ...

<style scoped>
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
    list-style: none;
    padding-left: 0;
  }

  li {
    box-shadow: inset 0 0 0 0.25em #ddd;
    padding: 0.5em 1em;
    border-radius: 1em;
  }

  li:last-child {
    box-shadow: none;
  }
</style>

---

## 4. Using React

- Pros:
  - Reusing React components
  - More complex logic
- Cons:
  - _Heavier_ Fragments
  - No editables
  - No HTML

---

## 5. Next steps

- Better Common Styles
- More no-code features
- **You tell us 🫶**

---

## Links

<style scoped>
  li { font-size: 30px; }
</style>

- Blog post (Spanish): [liferay.dev/blogs/-/blogs/fragmentos-react-y-widgets](https://liferay.dev/blogs/-/blogs/fragmentos-react-y-widgets)
- Blog post (English): [liferay.dev/blogs/-/blogs/fragments-react-and-widgets](https://liferay.dev/blogs/-/blogs/fragments-react-and-widgets)
- Documentation reference: [learn.liferay.com/dxp/latest/en/site-building/developer-guide/reference/fragments.html](https://learn.liferay.com/dxp/latest/en/site-building/developer-guide/reference/fragments.html)
- Fragment development documentation: [learn.liferay.com/dxp/latest/en/site-building/developer-guide/developing_page_fragments.html](https://learn.liferay.com/dxp/latest/en/site-building/developer-guide/developing_page_fragments.html)
- FreeMarker CheatSheet: [pablomolina.me/tesera/entry/freemarker](https://pablomolina.me/tesera/entry/freemarker/)

---

<!-- _class: "lead" -->

## Questions?

🤔

---

<!-- _class: "lead" -->

## Thank you!

😄

<style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,400;0,900;1,200;1,400;1,900&display=swap');

  :root {
    font-family: "Source Sans Pro", sans-serif !important;
    font-size: 32px;
  }

  code,
  pre code,
  pre code * {
    background-color: #f1f1f1;
    color: #333 !important;
    font-family: monospace !important;
  }

  section {
    background-image: none;
    background-color: white;
  }

  section.lead h2 {
    font-size: 3em !important;
  }

  footer {
    filter: grayscale(1);
    opacity: 0.5;
  }

  footer::before {
    content: '';
    display: inline-block;
    width: 8ch;
    height: 1.5em;
    margin-right: 0.5ch;
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Liferay-logo-full-color-2x.png/320px-Liferay-logo-full-color-2x.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    vertical-align: middle;
    transform: translateY(-0.125em);
  }
</style>
