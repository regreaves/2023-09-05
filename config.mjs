export const config = {
  notes: [ { content: 'Hello, world!' }, { content: 'Goodbye, world!' } ],
//  notes: [ ],
  port: parseInt(process.env.PORT, 10) || 3000,
  'view engine': process.env.VIEW_ENGINE || 'pug'
};
