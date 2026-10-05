const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const chromePath =
  process.env.CHROME_PATH ||
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const jobs = [
  {
    html: "CV_HudsonFerraz_English.html",
    pdf: path.resolve(__dirname, "..", "public", "CV_HudsonFerraz_English.pdf"),
  },
  {
    html: "CV_HudsonFerraz_Portugues.html",
    pdf: path.resolve(__dirname, "..", "public", "CV_HudsonFerraz_Portugues.pdf"),
  },
];

function renderWithChrome(htmlAbsolutePath, pdfAbsolutePath) {
  const userDataDir = fs.mkdtempSync(
    path.join(require("os").tmpdir(), "hudson-cv-chrome-")
  );

  const args = [
    "--headless=new",
    "--disable-gpu",
    `--user-data-dir=${userDataDir}`,
    "--no-pdf-header-footer",
    `--print-to-pdf=${pdfAbsolutePath}`,
    "--print-to-pdf-no-header",
    htmlAbsolutePath,
  ];

  const result = spawnSync(chromePath, args, {
    encoding: "utf8",
    timeout: 60000,
  });

  try {
    fs.rmSync(userDataDir, { recursive: true, force: true });
  } catch {
    // Best-effort cleanup of temporary Chrome profile.
  }

  if (result.status !== 0) {
    throw new Error(
      `Chrome failed for ${htmlAbsolutePath}\nstdout: ${result.stdout}\nstderr: ${result.stderr}`
    );
  }

  if (!fs.existsSync(pdfAbsolutePath)) {
    throw new Error(`PDF was not created: ${pdfAbsolutePath}`);
  }

  console.log(`Wrote ${pdfAbsolutePath}`);
}

for (const job of jobs) {
  const htmlAbsolutePath = path.resolve(__dirname, job.html);
  renderWithChrome(`file:///${htmlAbsolutePath.replace(/\\/g, "/")}`, job.pdf);
}
