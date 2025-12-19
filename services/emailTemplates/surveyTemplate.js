module.exports = (survey) => {
  // HTML to include in body of emailed survey
  return `
    <html>
      <head>
        <style>
            div.container {
              background-color: #d3eff8ff;
              color: #000000;
              font-family: "Monaco", sans-serif;
            margin: 0 auto;
            padding: 20px 10px 40px 10px;
            text-align: center;
          }
          article div {
            padding: 25px 0 20px 0
          }
          p {
            font-size: 15px;
            font-style: italics;
          }
          a {
            background-color: #17738f;
            border: 1px solid #17738f;
            border-radius: 10px;
            color: white;
            font-weight: bold;
            letter-spacing: 1px;
            margin: 0px 15px;
            padding: 10px 20px;
            text-decoration: none;
          }
          .ii a[href] {
            color: white;
          }  
        </style>
      </head>
      <body>
        <div class="container">
        <header>
          <h1>We'd love your feedback!</h1>
        </header>
          <article>
            <h2>Please answer the following question:</h2>
            <p>${survey.body}</p>
            <div>
              <a href="http://localhost:3000" title="Yes">Yes</a>
              <a href="http://localhost:3000" title="No">No</a>
            </div>
          </article>
        </div>
      </body>
    </html>





  `;
};
