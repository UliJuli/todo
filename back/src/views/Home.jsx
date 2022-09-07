const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({title}) {
  return (
    <Layout>
      <div>
        <h2>{title}</h2>
      </div>
    </Layout>
  );
};
