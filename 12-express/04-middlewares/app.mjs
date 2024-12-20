import express from 'express';
import morgan from 'morgan';

const app = express();

// const logger = (req, res, next) => {
//   console.log(req.method, req.path);
//   next();
// };

//app.use(logger);

//Midillware functions
//logs info about request
app.use(morgan('tiny'));
//converts JSON to JS object in POST, PUT, PATCH request
app.use(express.json());
// app.use((req, res, next) => {
//   let data = '';
//   req.on('data', (chunk) => (data += chunk));
//   req.on('end', () => {
//     const parsedJson = JSON.parse(data);
//     req.body = parsedJson;
//     next();
//   });
// });

//converts form data to JS Object in Post, Put, Patch requests
app.use(express.urlencoded({ extended: true }));
// app.use((req, res, next) => {
//   if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
//     let data = '';
//     req.on('data', (chunk) => (data += chunk));
//     req.on('end', () => {
//       const parsedFormData = qs.parse(data);
//       req.body = parsedFormData;
//       next();
//     });
//   } else {
//     next();
//   }
// });

app.use((req, res) => {
  console.log(req.body);
  return res.send('This is express server.');
});

app.listen(5000, () => console.log('server is listening at port 5000'));
