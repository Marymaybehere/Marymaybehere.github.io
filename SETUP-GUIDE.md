# Putting your website online (free)

This takes about 20 minutes, once. After that you add recipes, paintings, hikes and farm notes from a simple editor in your browser. No code needed.

You need: a free GitHub account, and this folder (unzipped).

---

## Step 1: Create a GitHub account

1. Go to **github.com** and sign up (free).
2. Pick your **username** carefully: your site address will be `https://USERNAME.github.io`.

## Step 2: Create the repository (the "home" for your site's files)

1. Click the **+** at the top right → **New repository**.
2. Repository name: type exactly `USERNAME.github.io` (using your real username).
3. Choose **Public**.
4. Leave everything else as is and click **Create repository**.

## Step 3: Upload the site files

1. On the new, empty repository page, click the link **"uploading an existing file"**.
2. Open the unzipped `sara-website` folder on your computer, select **everything inside it** (not the folder itself), and drag it all into the browser window.
3. Wait until all files are listed, then click **Commit changes** at the bottom.

**Check:** the file list on GitHub should include `.pages.yml`, `_config.yml`, `index.html` and folders like `_recipes` and `assets`.

> **Missing `.pages.yml`?** Macs hide files whose names start with a dot. Fix it on GitHub:
> **Add file → Create new file**, name it `.pages.yml`, open `pages-config-backup.txt` from the folder, copy all of its text, paste it in and click **Commit changes**.
> (Or, in Finder, press **Cmd + Shift + .** to show hidden files and upload again.)

## Step 4: Switch the website on

1. In your repository, click **Settings** → **Pages** (left menu).
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Branch: **main**, folder: **/ (root)** → **Save**.
4. Wait 1–3 minutes, then visit `https://USERNAME.github.io`. Your site is live.

## Step 5: Connect the easy editor (Pages CMS)

1. Go to **app.pagescms.org** and click **Sign in with GitHub**.
2. When asked, **install the Pages CMS app** and give it access to your `USERNAME.github.io` repository.
3. Open your repository in Pages CMS. On the left you'll see:
   - **Site settings**: your name, headline, bio, portrait, email, links, CV and the text for each section
   - **Research projects** and **Publications**
   - **Kitchen (recipes)**
   - **Farm log**
   - **Studio (paintings & photos)**
   - **Trails (hikes)**

---

## Everyday use

- **Add something new:** open a section → **Add an entry** → fill in the form → upload photos → **Save**.
- **Edit or delete:** open the entry, change it, and **Save** (or delete it from the entry's menu).
- Every save updates the live site in **about 1–2 minutes**. Refresh the page to see it.

**Tips**

- The sample recipes, hikes, farm notes and paintings are examples. Replace or delete them.
- The newest recipe (by date) is the big featured card on the homepage.
- Research projects appear in the order of their **Position** number (1 = first).
- In Studio, turn on **Show extra wide** for landscapes; they take up two columns.
- Photos: phone photos are fine, but smaller files load faster. Aim for under about 1–2 MB each.
- Sections without a photo show a soft painted placeholder until you add one.

## Optional: your own domain (like `saraname.com`)

Buy a domain (about $10–15/year, e.g. from Porkbun, Namecheap or Cloudflare). Then in GitHub go to **Settings → Pages → Custom domain** and follow GitHub's instructions for the DNS settings.

## If something looks wrong

- Site not updating? Check the **Actions** tab in your repository. A red ✗ means the last save had a problem. The most common cause is a date left empty. Open the entry in Pages CMS, fill in the missing field and save again.
- You can undo anything: GitHub keeps every earlier version of every file (the **History** button on any file).
