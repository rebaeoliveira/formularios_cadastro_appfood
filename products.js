function loadCategories() { // Carrega os dados cadastrados na categoria
    fetch("http://localhost:4000/categories")
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Erro ao carregar os dados");
        }
      })
      .then(function(categories) {
        var categorySelect = document.getElementById("categories");
  
        // Limpa as opções existentes
        categorySelect.innerHTML = "";
  
        // Adiciona as novas opções
        categories.forEach(function(category) {
          var option = document.createElement("option");
          option.value = category._id;
          option.textContent = category.name;
          categorySelect.appendChild(option);
        });
      })
      .catch(function(error) {
        console.log(error);
        alert(`Erro ao carregar os dados: ${error}`);
      });
  }
  
  // Envia o formulário para o banco de dados MongoDB
  document.getElementById("productsForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var formData = new FormData();
    formData.append("name", document.getElementById("name").value);
    formData.append("description", document.getElementById("description").value);
    formData.append("image", document.getElementById("image").files[0]);
    formData.append("price", document.getElementById("price").value);
    formData.append("category", document.getElementById("category").value);

    // Método POST
    fetch("http://localhost:4000/products", {
      method: "POST",
      body: formData
    })
      .then(function(response) {
        if (response.ok) {
          alert("Dados cadastrados com sucesso!");
          document.getElementById("productsForm").reset();
        } else {
          throw new Error("Erro ao cadastrar os dados");
        }
      })
      .catch(function(error) {
        console.log(error);
        alert("Erro ao realizar a solicitação");
      });
  });
  
  // Chama a função para carregar as categorias
  loadCategories();
  