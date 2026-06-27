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

- I'm kind of confused about this one. Easiest one would be accept no. of columns and create a fixed grid.
- But, I may want some of those pictures to be a little larger/smaller
- So, may be accept no. of rows and no. of columns per row?? This controls the width. But what about height? (Ughh I'm overthinking it. I'll just stick to colums for now and enhance it later if I have time)
- So, final config (for now):
```ts
    cols: number;
    gap?: number;
```