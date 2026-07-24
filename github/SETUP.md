# Publish to GitHub + Deploy — Rishi Chauhan

Two things make your GitHub presentable to a recruiter:

1. A **profile README** (your GitHub landing page)
2. A **clean portfolio repo** with a live demo link

Everything is prepared — you just run the steps below (I can't push to your
account for you).

---

## 0. One-time: authenticate the GitHub CLI

```bash
gh auth login      # choose GitHub.com → HTTPS → login with a browser
```

Check it worked: `gh auth status`

---

## 1. Publish the portfolio repo (one command)

From the `rishi-portfolio/` folder:

```bash
bash github/push.sh                 # creates "rishi-portfolio" and pushes
# or choose a name:
bash github/push.sh my-portfolio
```

This commits everything and creates a public repo with the polished
[`README.md`](../README.md) (screenshot, live link, tech stack).

> Before running, edit [`src/lib/site.ts`](../src/lib/site.ts) so the GitHub /
> LinkedIn links point at your real handles.

---

## 2. Set up your profile README (your GitHub front page)

1. Create a **new public repo named exactly your username** — e.g. if you're
   `github.com/rishichauhan`, name the repo `rishichauhan`. GitHub shows a
   special "you found a secret" note — that's how you know it's right.
2. Add a `README.md` and paste the contents of
   [`github/PROFILE-README.md`](./PROFILE-README.md).
3. Find-and-replace `rishichauhan` with your real username, and fix the
   LinkedIn / portfolio / email links.

```bash
# quick way, from a temp folder:
gh repo create <your-username> --public --add-readme
git clone https://github.com/<your-username>/<your-username>.git
cp rishi-portfolio/github/PROFILE-README.md <your-username>/README.md
cd <your-username> && git add . && git commit -m "profile readme" && git push
```

---

## 3. Deploy the live site (free)

The portfolio is a standard Next.js app — deploy on Vercel in ~1 minute:

1. Go to [vercel.com/new](https://vercel.com/new) and import your
   `rishi-portfolio` repo (or run `npx vercel` in the folder).
2. Accept the defaults and deploy.
3. Copy the live URL and update it in `src/lib/site.ts`
   (`metadataBase` in `src/app/layout.tsx`) and in both READMEs.

---

## 4. Make the Figma embeds live (optional)

See [`figma-kit/README.md`](../figma-kit/README.md): import the artboards into
Figma, publish a share link, and paste it into the project's `figma` field in
[`src/lib/projects.ts`](../src/lib/projects.ts).

---

### Checklist

- [ ] `gh auth login` done
- [ ] Real handles set in `src/lib/site.ts`
- [ ] `bash github/push.sh` → portfolio repo live
- [ ] Profile README repo created (named your username)
- [ ] Deployed to Vercel, live URL updated everywhere
- [ ] (Optional) Figma links pasted into `projects.ts`
