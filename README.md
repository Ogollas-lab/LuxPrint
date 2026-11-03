# LuminaPrint 3D (LuxPrint)

> **Parametric CAD & Cellular Voronoi Lamp Shade Generator for 3D Printing**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-black?logo=vercel&style=for-the-badge)](https://luxprint-studio-pyplhoyrr-steve-2a21.vercel.app)

![Three.js](https://img.shields.io/badge/Three.js-r160-black?logo=three.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38bdf8?logo=tailwindcss)
![CSG](https://img.shields.io/badge/three--bvh--csg-v0.0.16-f59e0b)
![License](https://img.shields.io/badge/License-MIT-emerald)

🌐 **Live Application:** [https://luxprint-studio-pyplhoyrr-steve-2a21.vercel.app](https://luxprint-studio-pyplhoyrr-steve-2a21.vercel.app)

**LuminaPrint 3D** is a browser-based, zero-install parametric CAD studio for designing custom, watertight, 3D-printable lamp shades and lanterns. It features interactive 2D Bezier profile sculpting, procedural surface textures (sinusoidal ribs, origami knurling, pleated fins), algorithmic 360° cylindrical Voronoi CSG cutouts, hardware socket fitting, and direct binary `.STL` export formatted for modern slicers.

---

## 🌟 Key Features

### 1. Parametric Silhouette & 2D Bezier Curve Editor
- **Mathematical Profiles:** Choose from Linear Cone/Cylinder, Belly/Bulbous, Hourglass Waist, or S-Curve Wave with adjustable curve bulge.
- **Interactive 2D Bezier Canvas:** Directly click and drag control points (`CP1`, `CP2`) as well as top and bottom radius endpoints in an SVG canvas to shape unique organic silhouettes in real time.
- **Accurate Dimensions:** Set custom height (60–350 mm), bottom radius (25–150 mm), top radius (20–150 mm), and shell wall thickness (1.0–5.0 mm).

### 2. Surface Patterns & Textures
- **Procedural Wave Patterns:**
  - **Smooth Sinusoidal Ribs:** Soft fluting and modern ambient lighting.
  - **Sharp Pleated Fins:** Crisp architectural ridges.
  - **Origami Knurl / Diamond Lattice:** Multi-faceted geometric light scatter.
  - **Smooth:** Pure minimalist profile.
- **Dynamic Controls:** Fine-tune Rib Count (3–80), Rib Depth (0–25 mm), and Helical Twist (-360° to +360°).

### 3. Procedural Voronoi Cellular Cutouts (CSG)
- **Seamless 360° Cylindrical Tessellation:** Powered by `d3-delaunay` with period-triplication to eliminate seams along the seam axis.
- **Watertight Solid CSG:** Utilizes `three-bvh-csg` and `three-mesh-bvh` to execute high-speed boolean subtractions through curved walls.
- **Configurable Cutout Parameters:** Adjust cell density (hole count), aperture scaling (openness ratio), solid rim safety margins (protects structural base and top rims), and a pseudo-random seed generator.

### 4. Hardware Sockets & Print Modes
- **Integrated Inner Spider Mounts:**
  - **E27 / E26 Standard** (41 mm diameter)
  - **E14 Euro Socket** (29 mm diameter)
  - **Pendant Cord Grip** (10 mm diameter)
  - **Open Tube** (collarless pass-through)
- **Mount Positioning:** Anchor the spider ring at the **Bottom** (for table lamps) or **Top** (for hanging pendant lamps), with 3 to 6 reinforcing spokes.
- **Slicer Modes:**
  - **Hollow Shell:** Dual-wall watertight manifold with integrated mounting spider.
  - **Solid Base:** Optimized for Spiral Vase Mode (single perimeter continuous printing).

### 5. Studio Viewport & 3D Print Preparation
- **Filament Color Preview:** Inspect designs in Warm Ivory, Translucent White, Terracotta, Forest Sage, Matte Obsidian, or any custom hex color.
- **Simulated LED Bulb:** Toggle internal warm ambient point light to preview how internal light projects through the shade.
- **Live Manifold Checker:** Real-time triangle counter and watertight manifold verification badge.
- **Binary STL Export:** One-click download with automatic coordinate transformation (Three.js Y-up converted to 3D Slicer Z-up standard) and smart filename tagging (`LuminaPrint_Voronoi_H180mm.stl`).

---

## 🚀 Quick Start (Running Live)

### Web (Instant)
Access the live studio directly in your browser without installing anything:
👉 **[https://luxprint-studio-pyplhoyrr-steve-2a21.vercel.app](https://luxprint-studio-pyplhoyrr-steve-2a21.vercel.app)**

### Running Locally
Because LuminaPrint 3D uses modern browser ES Modules (`<script type="module">`) and importmaps, it should be served via a local web server (to prevent browser CORS restrictions when loading modules from `file:///`).

### Using Python
Open your terminal in the project directory:
```bash
python -m http.server 8000
```
Open **[http://localhost:8000](http://localhost:8000)** in your browser.

### Using Node.js
```bash
npx serve .
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### Using VS Code / Antigravity
1. Install the **Live Server** extension.
2. Right-click `index.html` and choose **"Open with Live Server"**.

---

## 🖨️ 3D Printing & Slicer Recommendations

| Parameter | Recommended Setting |
| :--- | :--- |
| **Material** | **PLA, PETG, or Translucent PETG** (White / Natural yields best light diffusion). |
| **Nozzle Size** | 0.4 mm or 0.6 mm (0.6 mm produces durable lamp shades faster). |
| **Infill** | **0%** (Lampshades diffuse light best through hollow perimeters). |
| **Wall Perimeters** | **2–3 perimeters** for standard shades; **3–4 perimeters** for Voronoi cutouts. |
| **Supports** | **None** (Voronoi cell angles and rib overhangs are engineered for self-supporting bridges). |
| **Spiral Vase Mode** | When selecting *Solid Base* mode, enable **Spiralize Outer Contour** (Cura) or **Spiral Vase** (PrusaSlicer/Bambu Studio/OrcaSlicer). |
| **Safety Note** | Always use **cool LED bulbs** (max 5W–9W LED) to avoid heat deformation of printed plastics. |

---

## 🛠️ Architecture & Tech Stack

```
LuxPrint/
├── index.html            # Main web application entry point
├── 2D.html               # Dedicated 2D Bezier editor view / alternate entry point
├── lampshade_studio.html # Studio release entry point
└── README.md             # Project documentation
```

- **Frontend & Rendering:** Pure HTML5, Vanilla JavaScript (ES2022+), [Tailwind CSS](https://tailwindcss.com/)
- **3D Graphics Engine:** [Three.js](https://threejs.org/) (r160)
- **Mesh BVH & CSG:** [three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh) + [three-bvh-csg](https://github.com/gkjohnson/three-bvh-csg)
- **Computational Geometry:** [d3-delaunay](https://github.com/d3/d3-delaunay)
- **Zero Build Tooling:** Native Browser Import Maps — no bundler, Webpack, or npm build step required.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
Feel free to create, modify, and 3D print your own custom designs!

