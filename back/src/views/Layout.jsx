const React = require('react');

module.exports = function Layout({title, children}) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{title ? title : 'Title'}</title>

        {/* <link rel="stylesheet" href="/css/style.css"/>
        <script defer src="/js/application.js"></script> */}

      </head>
      <body>
        <main className='main'>
          <div className='container'>{children}</div>
        </main>
      </body>
    </html>
  );
};
