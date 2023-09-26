const express = require('express');
const app = express();

const v1Router = require('./v1/routes/allRoutes');
const v1AboutRouter = require('./v1/routes/aboutRoutes');
const v1KnowledgeRouter = require('./v1/routes/knowledgeRoutes');
const v1EducationRouter = require('./v1/routes/educationRoutes');
const v1ExpierienceRouter = require('./v1/routes/expierienceRoutes');
const v1BlogRouter = require('./v1/routes/blogRoutes');
const v1DownloadRouter = require('./v1/routes/downloadRoutes');
const v1ProjectsRouter = require('./v1/routes/projectsRoutes');

const PORT = process.env.PORT || 3001;

// ROUTES
app.use('/v1', v1Router);
app.use('/v1/about', v1AboutRouter);
app.use('/v1/knowledge', v1KnowledgeRouter);
app.use('/v1/education', v1EducationRouter);
app.use('/v1/expierience', v1ExpierienceRouter);
app.use('/v1/blog', v1BlogRouter);
app.use('/v1/download', v1DownloadRouter);
app.use('/v1/projects', v1ProjectsRouter);
app.use('/', (req, res) => res.status(200).send({
  message: 'Welcome to RestFull API',
  v1: '/v1'
}));

// INIT
app.listen(PORT, (err) =>
  console.log(err || `API is listening on port ${PORT}`)
);
