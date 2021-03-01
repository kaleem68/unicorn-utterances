---
{
    title: "Yarn vs. NPM - an explanation",
    description: "",
    published: '2021-10-13T22:12:03.284Z',
    authors: ['crutchcorn'],
    tags: ['webdev', 'javascript', 'node'],
    attached: [],
    license: 'cc-by-4'
}
---

While `yarn` previously had the advantage of the [workspaces](https://yarnpkg.com/features/workspaces/) feature, newer versions of `npm` (version 7 and above) [have added this feature upstream](https://docs.npmjs.com/cli/v7/using-npm/workspaces). Nowadays `yarn`'s primary differentiator is their "Plug-N-Play"(PnP) system. Enabled by default in yarn 2, 

One feature that `yarn` still holds over `npm` is [package version resolution handling](https://yarnpkg.com/configuration/manifest/#resolutions). This feature enables you to overwrite a package's dependency version that's downloaded. However, [`npm` plans on adding that feature to a future version of `npm` 7](https://github.com/npm/rfcs/pull/129#issuecomment-658906056)

