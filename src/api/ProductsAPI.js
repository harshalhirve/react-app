var productsAPI = {
  GetAllProductsUsingCB: function(successcb, errorcb) {
    var url = "http://localhost:8000/products";
    $.getJSON(url)
      .done(data => {
        successcb(data);
      })
      .fail(err => {
        errorcb("Some Error, Cantact Admin...");
      });
  },
  GetAllProducts: function(successcb, errorcb) {
    var url = "http://localhost:8000/products";

    var p = new Promise((resolve, reject) => {
      return fetch(url)
        .then(res => {
          var result = res.json();
          result.then(
            jResult => {
              resolve(jResult);
            },
            err => {
              reject("JSON Parse Error");
            }
          );
        })
        .catch(err => {
          reject("Call Error");
        });
    });
    return p;
  },

  insertProduct: function(p) {
    const request = new Request("http://localhost:8000/products", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(p)
    });

    return fetch(request)
      .then(res => {
        return res.json();
      })
      .catch(error => {
        return error;
      });
  },

  updateProduct: function(p) {
    const request = new Request("http://localhost:8000/products/" + p.id, {
      method: "PUT",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(p)
    });

    return fetch(request)
      .then(res => {
        return res.json();
      })
      .catch(error => {
        return error;
      });
  },

  deleteProduct: function(p) {
    const request = new Request("http://localhost:8000/products/" + p.id, {
      method: "DELETE"
    });

    return fetch(request)
      .then(res => {
        return res.json();
      })
      .catch(error => {
        return error;
      });
  }
};

export default productsAPI;
