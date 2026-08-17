# elev8 Labs — Creator Brand & Campaign Kit

Static site. Deployed at **https://elev8brandkit.vercel.app**

- `/` — the kit (5 sections, images inlined so the page is self-contained)
- `/assets/` — browsable download page, 57 files
- `/ELEV8-Creator-Assets.zip` — everything
- `/products.zip` · `/logos.zip` · `/templates.zip` — per folder

Zips are served `Content-Disposition: attachment`. The whole site is `noindex`
(middleware header + robots.txt).

## Regenerating

Built from the `elev8-labs` repo:

```bash
pnpm creators:build       # product sheet from src/lib/creators/
pnpm creators:templates   # 36 post templates
pnpm creators:site        # assembles .creator-site/
```

Then copy `.creator-site/` over this repo and push.
