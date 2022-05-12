
# Structure

## Formatting 

Methods for string formatting

## Validation

Methods for checking values locally 
- Validating formatting of emails
- Validating formatting of postcodes
- All other methods from 

## Checking 
**Check methods may make calls to external APIs**
- `checkIfValidPostcode` checks whether a postcode exists
- `checkIfTerminatedPostcode` checks whether a postcode has been terminated. If so, returns info on the termination

# Installing in Yuno-API and Yuno-React

## Authorization

- [You need to set up your SSH agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) to connect to GitHub via SSH

## Installing a specific version

### Tags

A release is tagged to a specific commit. It won't change once the release is created.

- To install an existing release `V1.2.3-release-name`, add `#V1.2.3-release-name` to the end of the dependency
- To create a new release, [navigate to the releases page](https://github.com/goyunotech/yuno-formatting-validation/releases) and create a release for a specfic branch

### Development branches when working on yuno-formatting

A branch reference will pull in the latest commit to the branch when `npm install` is run. This is useful when working on the `yuno-formatting` package

- Check out a new branch
- Push the branch to GitHub
- Add `#branch-name` to the dependency in `package.json`


### Local linking

Local links are useful for installing the dependency without having to link to an external repository.
Changes to the `yuno-formatting` module are immediately present in the consuming application.

- Remove the `yuno-formatting` folder from your `node_modules`
- Navigate to your local copy of `yuno-formatting`
- Run `npm link`
  - [npm-link](https://docs.npmjs.com/cli/v8/commands/npm-link) creates a symbolic link to your local copy of the project
- Run `npm install yuno-formatting` to install your locally linked copy

