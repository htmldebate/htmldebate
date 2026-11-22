// Pages that share their address with a folder of pages beneath them (/Demos and /Demos/Logic). GitHub Pages answers
// /Demos with the folder, not Demos.html, so the build copies each section page into its folder as index.html too.
export const sectionPaths: ReadonlyArray<string> = ['/Demos'];
