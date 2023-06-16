document.getElementById("categoryForm").addEventListener("submit", function(event) { // Obtém os elementos da página
  event.preventDefault(); // Evita o envio do formulário  
  
    // Recebe os valores dos campos de entrada
    var name = document.getElementById("name").value;
    var icon = document.getElementById("icon").value;
  
    // Cria um objeto JSON com os valores recebidos
    var categoryData = {
      name: name,
      icon: icon,
      id: ""
    };
  
    // Método POST
    fetch("http://localhost:4000/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(categoryData)
    })
    .then(function(response) {
      if (response.ok) {
        alert("Dados cadastrados com sucesso!");
        document.getElementById("categoryForm").reset(); // Limpa os campos do formulário
        console.log(categoryData);
      } else {
        alert("Erro ao cadastrar os dados");
      }
    })
    .catch(function(error) {
      alert(`Erro ao realizar a solicitação: ${error}`);
      console.log(error);
    });
  });
  