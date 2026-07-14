import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

const distPath = path.join(process.cwd(), 'dist');
app.use(express.static(distPath, { extensions: ['html'] }));

// Handle 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(distPath, '404.html'));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
