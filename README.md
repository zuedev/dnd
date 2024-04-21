# [zuedev](https://gitlab.com/zuedev)'s Dungeon & Dragons repository

This is my space for all things D&D! From DM notes and player guides to a homebrew repository, everything I do for the world's best TTRPG (imo) will be here.

## Important Links

- [Player Primer](/pp/): My guidebook for players new and old. An essential companion to anyone playing in my sessions.
- [An Explorer's Guide to Elragiir](/aegte/): A guidebook for the world of Elragiir, the setting for my fantasy campaigns.

## Licensing

All original content here is committed to the Public Domain as per the [license file](/LICENSE.md). Everything else is owned by their respective owners.

## Development

This repository uses [Jekyll](https://jekyllrb.com/) to generate the static site. To run it locally, you'll need to install Jekyll and its dependencies. You can do this by following the [installation guide](https://jekyllrb.com/docs/installation/).

To make development more convenient, I recommend using [Docker](https://www.docker.com/) to run the site locally. You can do this by running the following command in the root of the repository:

**Linux:**

```bash
docker run --rm -it -v "$(pwd):/site" -p 4000:4000 bretfisher/jekyll-serve
```

**Windows:**

```powershell
docker run --rm -it -v "${PWD}:/site" -p 4000:4000 bretfisher/jekyll-serve
```

This will start a local server at `http://localhost:4000` that will automatically update as you make changes to the site. You can stop the server by pressing `Ctrl+C` in the terminal window.
