# git-es6 — ES6 toy Git

This repository contains an educational implementation of Git concepts in vanilla JavaScript (ES6). It is a simplified model used to learn how commits, branches, and HEAD pointers work.

## Run locally (browser)
1. Open `index.html` in your browser.
2. Open DevTools → Console and try:

```js
const repo = new Git('demo');
repo.commit('Initial commit');
repo.checkout('feature');
repo.commit('Work on feature');
console.log(repo.log());
```

## Files
- `git-es6.js` — the implementation (Commit, Branch, Git classes).
- `index.html` — minimal demo that loads `git-es6.js`.

## License
Choose a license (MIT recommended) or add your own.