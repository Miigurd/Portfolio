# Kirt Asia S. Mag-usara — Personal Portfolio Website

A fast, accessible, zero-dependency portfolio website designed with character and taste to showcase both **Systems Analysis / QA / Technical Documentation** competencies and **Software Development** engineering as a unified skill set.

Optimized for tech internship applications (System Analyst / QA Documentation Intern) with deep links for developer roles (`#dev`) and QA documentation (`#qa`).

---

## 📁 Repository Structure

```text
├── index.html                      # Semantic single-page portfolio with varied layout rhythms & deep links
├── styles.css                      # Editorial stylesheet: Newsreader & Inter, terracotta accent, light/dark
├── script.js                       # Vanilla JS: #qa/#dev deep links, scroll-spy nav, session theme toggle
├── favicon.svg                     # Vector SVG monogram favicon ("KM")
├── qa-systems-analyst-resume.pdf   # Verified QA / Systems Analyst resume PDF
├── developer-resume.pdf            # Verified Software Developer resume PDF
└── README.md                       # Deployment guide, image placeholder specifications, and design notes
```

---

## 🖼️ Image Assets & Status

All project visuals and the hero portrait are configured and active:

| Slot Location | Asset File | Content Description | Status |
| :--- | :--- | :--- | :--- |
| **Hero (Right column)** | `images/kirt-portrait.jpg` | Portrait of Kirt Asia S. Mag-usara | **Active & Live** |
| **ACUITY (Top slot 1)** | `images/acuity-map-search.png` | Leaflet map search & business directory | **Active & Live** |
| **ACUITY (Top slot 2)** | `images/acuity-admin-portal.png` | Admin verification portal & snapshot rollback view | **Active & Live** |
| **Kalinga (Screen 1)** | `images/kalinga-main-screen.png` | Elder UI with dynamic button enlargement | **Active & Live** |
| **Kalinga (Screen 2)** | `images/kalinga-reminder-screen.png` | Voice-assisted navigation & TTS reminder schedule | **Active & Live** |
| **Sense And Serve** | `images/sense-and-serve-gameplay.png` | 3-player cooperative gameplay (kitchen view) | **Active & Live** |
| **Documentation (Table)** | Clean tabular view | Structured metadata, scope details, and direct Drive/PyPI links | **Clean Table (No thumbnails)** |

### Updating Image Assets
All visual frames on the site use semantic `<figure class="visual-frame">` containers with hairline borders and captions. To replace any image with a revised version in the future, simply update or replace the corresponding file in `images/`.

---

## 🚀 How to Deploy to GitHub Pages

This is a 100% static site requiring no build tools, bundlers, or package installations.

1. **Initialize Git & Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: refine portfolio with editorial typography, visuals, and character"
   git branch -M main
   git remote add origin https://github.com/Miigurd/<repo-name>.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub: `https://github.com/Miigurd/<repo-name>`
   - Click **Settings** &rarr; **Pages** (under "Code and automation").
   - Under **Build and deployment > Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and folder `/ (root)`.
   - Click **Save**.

3. **Access Your Live Site**:
   - Your site will be live at `https://miigurd.github.io/<repo-name>/` in about 1–2 minutes.

---

## 🎯 Deep Links & Audience Routing

| Application Target | URL Format | Landing Behavior |
| :--- | :--- | :--- |
| **System Analyst / QA Intern** (Default) | `https://your-site/` or `https://your-site/#qa` | Smoothly scrolls to verified test case suites, system diagrams, usability score (3.62/4), and administrative guides. |
| **Software Developer** | `https://your-site/#dev` | Smoothly scrolls to the ACUITY engineering showcase, PyPI package, Kalinga mobile app, and Unity networking. |

---

## 🔗 Live QA Artifacts & Verified Records

All live links and verified numbers are preserved exactly:

- **ACUITY Test Case Documentation**: [Google Drive File](https://drive.google.com/file/d/1fK3je65HZ46f6c0ayXt5C78XqSSugBAl/view?usp=drive_link)
- **ACUITY System Architecture & Flow Diagrams**: [Google Drive Folder](https://drive.google.com/drive/folders/1maCBcDJ6-aUwtC9J3qACMZAOaJPkPOrQ?usp=drive_link)
- **ACUITY User Manual & Admin Guide**: [Google Drive File](https://drive.google.com/file/d/12Vkk84wlcit_rOyQZRQgertsgNp3Qgxs/view?usp=drive_link)
- **ACUITY Usability Evaluation Report (Thesis Snippet)**: [Google Drive File](https://drive.google.com/file/d/19FFtsTW9LMmpVFJMsb9uC4tmLJJAmOyZ/view?usp=drive_link)
- **ACUITY Framework PyPI & pyTest Suite**: [PyPI acuity-framework](https://pypi.org/project/acuity-framework/) & [GitHub README](https://github.com/Dev-MoiMoi/ACUITY-Framework#readme)
- **Kalinga Test Case Documents**: [Google Drive File](https://drive.google.com/file/d/1FePUOAW7bF_AHJMhXa70jdUcZWpRCKa4/view?usp=drive_link)
- **Kalinga System Diagrams**: [Google Drive Folder](https://drive.google.com/drive/folders/1JIxBeKt9icmRiMsX_ByC7dCW30VVEY5R?usp=drive_link)
- **Sense And Serve Playable Build & Assets**: [Google Drive Folder](https://drive.google.com/drive/folders/1D7khr120Aujl__Xniz7VR2ulC9k5aMMm?usp=drive_link)
- **CodeChum NPC 2025 Competition Certificate**: [Google Drive File](https://drive.google.com/file/d/1s1qAl2m1uttHl5CqRiWKHfrH4avQnAui/view?usp=drive_link)
- **Developer Resume PDF**: `./developer-resume.pdf` (Download button in hero & resumes section)
- **QA Resume PDF**: `./qa-systems-analyst-resume.pdf` (Download button in hero & resumes section)
