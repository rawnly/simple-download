# ChiliJs

Usefuls variables for node env.

## Install
**NPM**
```bash
  $ npm install chili-js --save
```

**Yarn**
```bash
  $ yarn add chili-js
```

## Features / API

### Path
- #### Shortcuts
  * `path.join()` **=>** `join()`
  * `path.parse()` **=>** `parse()`
  * `path.normalize()` **=>** `normalize()`
  * `path.relative()` **=>** `relative_path()`
  * `path.sep` **=>** `separator`

- #### Functions
 * `String.prototype.relativeTo()`
It returns `path.relative(pth1, pth2)` as `pth1.relativeTo(pth2)`

    ```js
      require('chili-js');

      join( home, 'Desktop', 'myFolder' ).relativeTo( join(home, 'Documents') );
      //=> ../../Documents
    ```
---
### JSON Shortcuts
- `JSON.jparse()` **=>** `jparse()`
- `JSON.jstringify()` **=>** `jstringify()`

---
### Console Shortcuts
- `console.log()`   **=>** `log()`
- `console.warn()`  **=>** `warn()`
- `console.error()` **=>** `err()`


---
### FS Shortcuts
- `fs.writeFile()` **=>** `write()`
- `fs.writeFileSync()` **=>** `writeSync()`
- `fs.readFile()` **=>** `read()`
- `fs.readFileSync()` **=>** `readSync()`


---


### Variables
`home` who is the `/Users/<user>/` (`~` path)
and `user` who is the `<user>` in `~` path.

### Standalone Functions
- `String.prototype.capitalize(divider, joiner)`

  This function provides to `capitalize` a word.
  ```js
  ...
    'hello world'.capitalize() //=> 'Hello World'
  ```
  It can also parse a word
  ```js
  ...
    'hello-world'.capitalize('-') //=> 'Hello-World'
    'hello-world'.capitalize('-', ' ') //=> 'Hello World'
    'hello world'.capitalize(' ', '-')
    //=> Hello-World
  ```

- `Array.prototype.sum()`

  This function provides to `sum` all items in array

  ```js
  ...
    [1, 2, 3].sum()
    //=> 6
  ```

  If an item in `array` is not a number it will be ignored.

  ```js
  ...
    ['a', 15, 'b', 5, 'c'].sum()
    //=> 20
  ```

  ---
<h3 align="center"> Made with ❤️ by <a href="http://rawnly.com">Rawnly</a> </h3>
