# Contributing

## Coding Rules

To ensure consistency throughout the source code, keep these rules in mind as you are working:

- All features or bug fixes must be tested by one or more specs (unit-tests).
- All code should look like it was written by the same person. Follow the same coding standards as the file. In case of a new file, follow the coding guidelines described in [DEVELOPER](docs/DEVELOPER). Reformatting the entire file to the official coding style is fine, but should always be done in a separate commit.
- Code should always contain only the most minimal set of statements possible. That means no unused methods, not importing classes you don't need, and no code to support future features. If any line of code makes you wonder "why is it here?" probably shouldn't be there, and if it should, add comments to make it clear.
- All public API methods must be documented. (Details TBC).

## Workflow

1. Create your feature branch `$ git checkout -b my-new-feature`
1. Commit your changes `$ git commit -am 'feat(parser): Add some feature'`
1. Push to the branch `$ git push origin my-new-feature`
1. Create new Pull Request ([more details](https://confluence.atlassian.com/bitbucket/create-a-pull-request-to-merge-your-change-774243413.html))

I've extracted some rules from [Contributing to Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md) but the entire document is worth digging into.

## Commits

- Committing incomplete work to a branch is fine. Incomplete work is when a feature is being worked on but is not finished yet, as in the behavior might not be what is expected. What is not fine is committing broken code: something that wouldn't run.
- If a code path hasn't been executed, it should not be committed. Always run your code. All of it.
- Always review your own commit before pushing. Sometimes we commit more code than we should.

### Commit msg

Write a [standardized commit message](https://conventionalcommits.org/). Adherence to these conventions is necessary to generate automatically release notes.

Each commit message consists of a header, a body and a footer. The header has a special format that includes a [type](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type), a scope and a subject:

```text
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

- The subject is mandatory and the scope of the header is optional.
- A scope is a phrase describing a section of the codebase enclosed in parenthesis, e.g., `fix(stacks):`

### Allowed types

- `feat`: new feature for the user, not a new feature for build script
- `fix`: bug fix for the user, not a fix to a build script
- `docs`: changes to the documentation
- `style`: formatting, missing semi colons, etc; no production code change
- `refactor`: code change that neither fixes a bug nor adds a feature
- `perf`: code change that improves performance
- `test`: adding missing tests, refactoring tests; no production code change
- `build`: changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- `ci`: changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- `chore`: other changes that don't modify src or test files, eg. upgrade dependency
- `revert`: reverts a previous commit

### Example

```sh
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: feat, fix, docs, style, refactor, perf, test, build, ci, chore or revert.
```

References:

- https://www.conventionalcommits.org/
- https://github.com/pvdlg/conventional-changelog-metahub
- https://seesparkbox.com/foundry/semantic_commit_messages
- https://www.robertcooper.me/git-commit-messages
- http://karma-runner.github.io/1.0/dev/git-commit-msg.html

#### Scope

Examples of scopes: studio, stacks, projects, clips, capture

#### Subject

The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

#### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.

#### Footer

The footer should contain any information about **Breaking Changes** and is also the place to reference JIRA issues that this commit **Closes** using [Smart commits](https://confluence.atlassian.com/bitbucketserver/using-smart-commits-in-bitbucket-server-802599018.html).

> generally "resolved" means a developer has fixed the reported problem and "closed" means that a resolved issue has been confirmed as fixed by the reporter.
> While an issue in status Resolved is still editable, Closed is a final state.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

Examples:

```sh
fix(profiles): move preferedLanguage on user profile

Closes #223
```

```sh
feat(polls): add polls on items feed

BREAKING CHANGE: on messages already published field `postDetails` must be replaced by `itemDetails`

Closes #343
```

See [more examples](https://conventionalcommits.org/#examples)

## Branch naming

Convention: `<issue key>-<name>`

Always use dashes to seperate words on `<name>`, and keep it short.

Examples:

```sh
738-create-project
247-edit-stack-v1
```

## Issues

- Always capitalize the title
- Should always include the smallest number of steps to reproduce the problem. In case of an API request, always include the curl command issued to reproduce it.
- Should always include what's the desired behavior the issue is supposed to effect.
- Should always include a clear proposed solution before any work is started, so other developers can comment on it to prevent any wasted effort.

Examples of a good issues: TBD

Examples of a bad issues: TBD

## Pull Requests

- Always capitalize the title
- Include only the smallest set of commits necessary to make the change.
- If this is related to an issue, always mention the issue number in the description, NOT in the title.
- The PR's title sometimes is the same as the issue (when the issue is clear about what is to be done), but can be something different (when there is no issue, or the issue is a description of the problem instead of the solution).
- Squash/rebase commits only when ready to merge. That means avoiding force-pushes. That screws up comments made in the PR.
- Don't open another PR unless the new one substantially differs from the original one.
- Always review your own PR after opening it. Sometimes we commit more code than we should, or we open a PR from the wrong branch. The developer should be able to catch it before someone else complains.
- Always delete the branch after the PR's been merged. We don't need stale branches lying around forever.

Examples of a good PRs: TBD

Examples of a bad PRs: TBD

## Versioning

> Given a version number MAJOR.MINOR.PATCH, increment the:

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.
― [semver.org](semver.org)

Only major versions are allowed to break compatibility, so a developer should be able to switch between minors and patches with ease.
