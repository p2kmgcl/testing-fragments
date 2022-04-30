---
marp: true
theme: gaia
size: 16:9
footer: Fragments, React and Widgets - Pablo Molina
---

<!-- _footer: "" -->
<!-- _class: "lead" -->

# Fragments, React and Widgets

[pablomolina.me](https://pablomolina.me)
[github.com/p2kmgcl/demo-fragments](https://github.com/p2kmgcl/demo-fragments)

---

<!-- _class: "lead" -->

> Fragments are simple, are just some pieces of HTML, CSS and JavaScript that can be added to a page and easily managed by FrontEnd developers...

> ... But now they have more capabilities and are more complex, lets see the differences.

---

## Summary

1. First fragment
2. Adding editable values
3. Using FreeMarker
4. Writing configuration
5. Using React

---

## Links

<style scoped>
  li { font-size: 30px; }
</style>

- **Slides**: [github.com/p2kmgcl/demo-fragments](https://github.com/p2kmgcl/demo-fragments)
- Blog post (Spanish): [liferay.dev/blogs/-/blogs/fragmentos-react-y-widgets](https://liferay.dev/blogs/-/blogs/fragmentos-react-y-widgets)
- Blog post (English): [liferay.dev/blogs/-/blogs/fragments-react-and-widgets](https://liferay.dev/blogs/-/blogs/fragments-react-and-widgets)
- Documentation reference: [learn.liferay.com/dxp/latest/en/site-building/developer-guide/reference/fragments.html](https://learn.liferay.com/dxp/latest/en/site-building/developer-guide/reference/fragments.html)
- Fragment development documentation: [learn.liferay.com/dxp/latest/en/site-building/developer-guide/developing_page_fragments.html](https://learn.liferay.com/dxp/latest/en/site-building/developer-guide/developing_page_fragments.html)

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

  footer::after {
    content: 'github.com/p2kmgcl/demo-fragments';
  }
</style>
