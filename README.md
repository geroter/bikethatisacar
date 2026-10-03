# The Bike that is a Car

Source for [bikethatisacar.ca](https://www.bikethatisacar.ca), a teacher activity package built around Aliyah Rotman's story "The Bike that is a Car". All content is written by Sari Stillman.

The site is built with Jekyll and published by GitHub Pages. Every change to the `main` branch republishes the site within a minute or two. There is nothing to install.

## Editing an activity

Each activity is one file in `_activities/`. Open it on GitHub, click the pencil icon, edit, and commit.

The top of each file, between the `---` lines, holds the details the site uses for layout:

| Field | What it does |
| --- | --- |
| `number` | The activity number and its place in the list |
| `title` | The activity name |
| `grades` | Grade badges and filters: any of `P`, `J`, `I` |
| `french` | `true` shows the French resource badge |
| `summary` | The short description on the home page |
| `content_ready` | `true` once the full activity page is written |
| `activity` | One-line description in the side panel |
| `curriculum` | Curriculum expectations in the side panel |
| `worksheet` | Worksheet preview image and PDF link |
| `assessment` | Success criteria text |
| `rubric_sheet` / `rubric_gid` | Google Sheet ID (and tab) for an embedded rubric |

Everything below the second `---` is the body of the page, written in Markdown.

## Adding an activity

Copy an existing file in `_activities/`, give it a new name (the file name becomes the page address), change `number`, and edit the rest.

## Images

Images live in `assets/img/`. Upload new ones there and refer to them as `/assets/img/file-name.jpg`.
