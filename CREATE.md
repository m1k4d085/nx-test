# Ospedate App

Create monorepo from NestJS:

`npx create-nx-workspace@latest <name>` **interactive**

`npx create-nx-workspace@latest <name> ...`

Create NestJs Library:

`nx g @nx/nest:lib --name <name> --directory libs/<directory>`

Create monorepo from Angular:

`npx create-nx-workspace@latest <name> --preset angular-monorepo --appName webapp --style scss --e2eTestRunner playwright --unitTestRunner jest --bundler esbuild --ssr false --aiAgents claude --prefix asepa -g --ci skip`

Create Angular App:

`nx g @nx/angular:app --name <name> --directory apps/<app name> --skipTests --style scss --e2eTestRunner playwright --unitTestRunner jest --bundler esbuild --ssr false --prefix asepa`

- add Tailwind: **add** `--addTailwind`

Create Angular API library:

`nx g @nx/angular:library --name API --directory libs/api --buildable --flat --skipModule --skipSelector --skipTests --style none --tags api --unitTestRunner none --prefix asepa`

Create Angular Component library:

`nx g @nx/angular:library --name <name> --directory libs/<directory> --buildable --flat --skipModule --skipSelector --skipTests --style scss --tags <type:?>,<domain:?>,<scope:?> --unitTestRunner jest --prefix asepa`

- set routing: **add** `--routing`

- put component in a subdirectory: **remove** `--flat`

- add selector: **remove** `--skipSelector`

- add Tailwind: **add** `--addTailwind`

Remove library:

`nx g @nx/workspace:remove <library name>`

Create component:

`nx g @nx/angular:component --name <name> --path libs/<a directory of specific library> --skipTests --style scss --prefix asepa`

- specify selector: **add** `--selector <name>`

- skip selector: **add** `--skipSelector`
