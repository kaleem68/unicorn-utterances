---
{
  title: "Framework Review: Vue",
  description: "",
  published: '2021-05-26T05:12:03.284Z',
  authors: ['crutchcorn'],
  tags: [],
  attached: [],
  license: 'cc-by-nc-sa-4'
}
---

## Documentation & Learning

## Configurable but Strong Defaults

It's interesting to see how each framework handles functionality like routing and http clients. Because this functionality isn't part of updating the DOM or keeping data syncronised, they're often provided via libraries.

Angular goes all-in on first party libraries (essentially making their usage law), meanwhile React encourages the ecosystem to act as the de-facto maintainers of these types of libraries.

Both of these routes have their advantages and disadvantages. While React allows you to have a high level of customization that fits your application's specific needs, for newcomers to the ecosystem it can be overwhelming to pick which ones to use. Angular's approach, on the other hand, allows you to have documentation that treats the relevant libraries as first-party utilities and makes finding coding help much easier. Angular's solution isn't perfect, however, as it implicitly discouraged the ability to replace any of these libraries with community-ran ones that might fit your usage better.

Vue finds a middle-ground between these. The official Vue team maintains libraries such as Vuex and Vue Router. However, these libraries are documented seperately and are not pre-bundled with newly generated Vue projects until you opt-in to their usage. Because of this, Vue allows projects without specific requirements to default to these libraries, while the community is more enabled to built alternatives.