## Media grid

An obsidian plugin to wrap media inside a grid

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

|      Property       |   Type   | Description                                             | Default value | Notes |
| :-----------------: | :------: | ------------------------------------------------------- | :-----------: | ----- |
|       `cols`        | `number` | Number of columns to render in the grid                 |      `4`      |       |
|        `gap`        | `number` | Gap between rows and column                             |      `4`      | ^1    |
| `grid-container-id` | `string` | An unique id to be assigned the rendered grid container |       -       | ^2    |


#### Example

<pre>
```media-grid
cols: 3
gap: 4
grid-container-id: nice-grid

![[pexels-maitane-arribas-2161656052-38145841.jpg]]
![[pexels-kaju-style-102944731-12576396.jpg]]
![[pexels-ammy-singh-294201421-37742011.jpg]]
![[image-1.jpg]]
![[16238023_2160_3840_30fps.mp4]]
![[16156347_1080_1920_60fps.mp4]]
```
</pre>

You should now see all your images in a grid. Also, the grid container will have the id `#nice-grid` which can be used to further customize the styles using css snippets.

![Image](./assets/example-grid.png)

> NOTE: Images used in this project are sourced from [pexels.com](https://www.pexels.com/). They are used in accordance with the applicable license. I do not claim ownership of these images. All rights remain with their respective creators.

#### Notes

- Keep each config property and media file in its own separate line
- If a grid row contains images of different height, the row's height will be set to that of the image with maximum height leaving any unwanted space around smaller images. Autoscaling images was intentionally left out so as to not strech/shrink images. If per image customization is required, you may still use the `grid-container-id` and customize with css.

#### Todo

- [x] Basic grid
    - [x] `cols`, `gap` and `gridContainerId`
- [x] Image rendering
- [x] Media size
- [x] Video rendering

***

Refer [these](./DEV_TESTING.md) instructions to try it out locally

[^1] Css grid does support different gaps for rows and columns. But, as of now, this plugin doesn't support that. The same gap will be used for both rows and columns.
[^2] Grid container id can be used to further customize the grid behaviour using css snippets.

##### Feel free to contribute