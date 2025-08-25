export default function sitemap() {
  const base = "https://the-adekanmi.vercel.app";
  const lastModified = new Date().toISOString().split("T")[0];

  return [
    { url: `${base}/`, lastModified, changefreq: "weekly", priority: 1.0 },
    { url: `${base}/About`, lastModified, changefreq: "monthly", priority: 0.8 },
    { url: `${base}/Projects`, lastModified, changefreq: "weekly", priority: 0.9 },
    { url: `${base}/Services/overview`, lastModified, changefreq: "monthly", priority: 0.8 },
    { url: `${base}/Contact`, lastModified, changefreq: "monthly", priority: 0.7 },
    { url: `${base}/Resume`, lastModified, changefreq: "monthly", priority: 0.6 },
    { url: `${base}/Resources/insight`, lastModified, changefreq: "monthly", priority: 0.5 },
    { url: `${base}/Resources/toolkits`, lastModified, changefreq: "monthly", priority: 0.5 },
    { url: `${base}/Resources/playground`, lastModified, changefreq: "monthly", priority: 0.5 },
    { url: `${base}/Resources/faq`, lastModified, changefreq: "monthly", priority: 0.5 },
  ];
}
