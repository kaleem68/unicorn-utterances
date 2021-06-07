---
{
  title: "Framework Review: Angular",
  description: "",
  published: '2021-05-26T05:12:03.284Z',
  authors: ['crutchcorn'],
  tags: [],
  attached: [],
  license: 'cc-by-nc-sa-4'
}
---



In this series, I want to do my best to review modern web frameworks in a balanced way. This more difficult said than done - I've been doing web development for a while now and have developed my own preferences along the way.

One challenge to overcome will be my level of familiariy with these tools. While I will do my best to spend some dedicated time and build practical applications with each framework I evaluate, I will simply have more experience and knolwedge of the frameworks I started with and have had the longest time with. For that reason, I'll disclose here: I have spent the most time with Angular with React as a close second. However, that doesn't mean that I'm unable to see the benifits of other frameworks! For example, I have a particular fondness of how Vue 3's composition API functions and have even ported the ability to use that logic in Angular applications.

There's another element to consider when evaluating any tool: The community. While some frameworks may have rules set in a formal decree, others may have generally accepted best practices that are abided by projects using the tool. Further, the rationale for some framework logic may be lost on me due to its historical context. Perhaps a syntax was changed following community outcry that, without the right context, I may find peculiar. 





However, a framework doesn't have to be new and shiny or popular to be evaluated fairly. I among other libraries, I plan on evaluating:

- Angular
- React
- Vue
- Svelte
- Lit
- Ember
- Backbone
- Ruby on Rails (???)
- Blazor

In the future, this series might surpass web frameworks. We might take a look at different build tools, metaframeworks (such as NextJS or Gatsby), compile-to-JS languages, and more!















## Docs

## TypeScript

An early adopter of TypeScript, Angular builds on top of the typed language in order to provide 

While newcomers to Angular may have a stronger learning curve than 

## Classes

This has it's pros and cons as well. While many JavaScript engineers have grown to use functional programming more and more, many backends written in other languages (particularly C#/.NET and Java) have stayed firmly in the OOP layout

## All-in-one Solution

One advantage (or disadvantage, depending on who you ask) of Angular is that it provides just about everything you'd need to build a large-scale application. This includes things like an HTTP client, client-side router, lazy-loaded modules, and even an official UI library.

One notible exception is a global data store solution. While you're _able_ to store data in a root injected service, it's simply not as powerful as framework competitors like Redux or Vuex. 

That said, the community is more than happy to create solutions where missing. NgRx is a community project that's healthily maintained by a group of experts.


## Dependency Injection

While Angular's dependency injection is undoubtably more powerful than other component-based frameworks, it's also significantly more complex to get even basic usage up-and-running

## API Scope

Pro: Wide range of APIs and features. Con: Lots of half-baked features such as Reactive Forms, Angular Elements, Standalone Components, Universal Socket Engine, Schematics.

## Structure

Libraries aren't the only thing Angular guides developers to use, however. While React has some official suggestions such as "use unidirectionality" or "don't use a ref in `useEffect`", it does little to guide you on how to structure your application outside of that.

Seemingly every React codebase uses a different directory structure.

Meanwhile, Angular's official style guide not only suggests things that can be enforcable by a linter, but it goes so far as to suggest the best way to structure the folders in your app. 
