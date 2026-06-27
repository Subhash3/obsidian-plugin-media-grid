> NOTE: These instructions assume bash shell.

#### Clone the repo

```bash
# Clone the repo
git clone https://github.com/Subhash3/obsidian-plugin-media-grid
```

- This repo uses `pnpm`, so make sure to have it installed

#### Install Dependencies

```bash
cd obsidian-plugin-media-grid
pnpm i
```

#### Build

```bash
pnpm dev
   # OR
pnpm build:prod
```

- This generates a `build/main.js`

#### Local testing

```bash
./link-to-vault <your-obsidian-vault-path>
```
- It should create a new (symlink) plugin directory `media-grid/` under `.obsidian/plugins` in the given vault.
- Reload the plugin in obsidian to be able to use it

##### Feel free to contribute
