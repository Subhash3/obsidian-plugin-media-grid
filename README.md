## Media grid

An obsidian plugin to wrap media inside a grid or a flexbox layout

<pre>
```media-grid
cols: &lt;no. of columns per row&gt;
gap: &lt;grid-gap&gt;
grid-container-id: &lt;grid container element's id&gt;

![[image-1.png]]
![[image-2.png]]
![[video-1.png]]
![[image-3.png]]
![[video-2.png]]
![[image-4.png]]
```
</pre>

#### Supported Media

Image extensions: `['jpg', 'jpeg', 'png', 'webp']`  
Video extensions: `['mp4']`

Anything beyond these file extensions will be treated as unknown format and an error callout will be rendered.

> NOTE: Media format is completed derived from the file extension and NOT file metadata. So it is possible to trick Obsidian into attempting to render an invalid file just by renaming the extension.

#### Config

|      Property       |       Type       | Description                                                                                    | Default value | Notes |
| :-----------------: | :--------------: | ---------------------------------------------------------------------------------------------- | :-----------: | ----- |
|       `cols`        | `number \| null` | Number of columns to render in the grid. If omitted, the plugin uses a flexbox layout instead. |    `null`     | ^1    |
|        `gap`        |     `number`     | Gap between rows and column                                                                    |      `4`      | ^2    |
| `grid-container-id` |     `string`     | An unique id to be assigned the rendered grid container                                        |       -       | ^3    |

#### Grid vs Flex

Use `cols` when you want a strict CSS grid with a fixed number of columns per row. If `cols` is omitted, the plugin falls back to a flexbox layout where each row is defined by a blank line and the media items in that row wrap naturally.

##### Grid example:

<pre>
```media-grid
cols: 3
gap: 4

![[image-1.png]]
![[image-2.png]]
![[image-3.png]]
![[image-4.png]]
![[video-5.png]]
![[video-6.png]]
```
</pre>

Renders the media files in a grid with 3 columns

##### Flex example:

<pre>
```media-grid
gap: 4

![[image-1.png]]
![[image-2.png]]

![[image-3.png]]
![[image-4.png]]
```
</pre>

Renders the media files in a grid with 2 rows (2 groups separated by a blank line)

> I got the flexbox idea from [this](https://github.com/zremboldt/obsidian-media-grid), a simple but extremely powerful css snippet which does almost 90% of what this plugin can do lol. I highly recommend checking it out.

#### Notes

- Keep each config property and media file in its own separate line
- If `cols` is omitted, the plugin uses a flexbox layout instead of a CSS grid.
- If a grid row contains images of different height, the row's height will be set to that of the image with maximum height leaving any unwanted space around smaller images. Autoscaling images was intentionally left out so as to not strech/shrink images. If per image customization is required, you may still use the `grid-container-id` and customize with css.

#### Installation Instructions

Refer [these](./DEV_TESTING.md) instructions to try it out locally

#### Todo

- [x] Basic grid
    - [x] `cols`, `gap` and `gridContainerId`
- [x] Image rendering
- [ ] Media size
- [x] Video rendering
- [ ] `column gap` and `row gap`

***

[^1] Use `cols` when you want a strict CSS grid with a fixed number of columns per row. If `cols` is omitted, the plugin falls back to a flexbox layout where each row is defined by a blank line.  
[^2] Css grid does support different gaps for rows and columns. But, as of now, this plugin doesn't support that. The same gap will be used for both rows and columns.  
[^3] Grid container id can be used to further customize the grid behaviour using css snippets.  

##### Feel free to contribute