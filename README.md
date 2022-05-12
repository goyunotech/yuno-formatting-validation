



# Installing in Yuno-API and Yuno-React

## Authorization

- [You need to set up your SSH agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) to connect to GitHub via SSH

## Installing a specific version

### Tags


### Local linking

- Remove the `yuno-formatting` folder from your `node_modules`
- Navigate to your local copy of `yuno-formatting`
- Run `npm link`
  - [npm-link](https://docs.npmjs.com/cli/v8/commands/npm-link) creates a symbolic link to your local copy of the project
- Run `npm install yuno-formatting` to install your locally linked copy

### Development branches when working on yuno-formatting


- Check out a new branch
- Push the branch to GitHub
- Change the dependency in `package.json` to `github:goyunotech/yuno-formatting-validation#your-branch`