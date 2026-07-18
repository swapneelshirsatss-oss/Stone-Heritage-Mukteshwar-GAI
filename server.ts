import express from 'express';
import path from 'path';
import helmet from 'helmet';
import compression from 'compression';

const app = express();
const PORT = process.env.PORT || 3000;

// Security & Performance
app.use(helmet());
app.use(compression());

const distPath = path.join(process.cwd(), 'dist');
app.use(express.static(distPath, { 
  extensions: ['html'],
  maxAge: '1h',
  etag: false
}));

// Handle 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(distPath, '404.html'));
});

// Global error handler
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err);
  res.status(500).sendFile(path.join(distPath, '500.html'));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
