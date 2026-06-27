## Media grid

Trying to learn obsidian plugin development

### Idea

- Create a code block `media-grid` to wrap photos and videos inside a grid.

```media-grid
-- Config goes here --

![[imagehere]]
![[imagehere]]
![[videohere]]
![[imagehere]]
```
#### Config

```ts
interface MediaGridConfig {
    cols: number;
    gap: number;
    gridContainerId: string;
    files: Array<{ filename: string, size: number }>
}
```

#### Supported Media

> NOTE: Media format is completed derived from the file extension and NOT file metadata. So it is possible to trick obsidian into attempting to render an invalid file just be renaming the extension.

```ts
const imageExtensions = ['jpg', 'jpeg', 'png', 'webp'];
const videoExtensions = ['mp4'];
```

- Anything beyond these file extensions will be treated as unknown formats and an error callout will be rendered.


#### Example

```media-grid
cols: 4
gap: 4
grid-container-id: my-grid

![[image-1.jpg]]
![[some-random_image.png]]
![[video-doesnt-work-yet.mp4]]
```

You should now see all your images in a grid. Also, the grid container will have the id `#my-grid` which can be used to further customize the styles using css snippets.

#### Todo

- [x] Basic grid
    - [x] `cols`, `gap` and `gridContainerId`
- [x] Image rendering
- [ ] Media size
- [x] Video rendering