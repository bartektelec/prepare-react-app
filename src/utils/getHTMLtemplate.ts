export default (name: string) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name.replace('-', ' ')}</title>
</head>
<body>
    <div class="root"></div>
    <script type="module" src="../src/index.js"></script>
</body>
</html>`;
};
