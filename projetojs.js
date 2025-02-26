<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Receita de Arroz Frito</title>
    <style>
        * {
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            margin: 0;
            background-color: #f4f4f4;
        }

        .header {
            background-color: #ff6600;
            color: white;
            padding: 15px;
            text-align: center;
        }

        .row::after {
            content: "";
            clear: both;
            display: table;
        }

        [class*="col-"] {
            float: left;
            padding: 15px;
            border: 1px solid #ddd;
        }

        .footer {
            text-align: center;
            padding: 15px;
            background-color: #ff6600;
            color: white;
        }

        .col-3 { width: 25%; }
        .col-6 { width: 50%; }
        .col-12 { width: 100%; }

        ul {
            list-style-type: none;
            padding: 0;
        }

        li {
            margin-bottom: 8px;
        }

        h2 {
            color: #ff6600;
        }

        button {
            background-color: #ff6600;
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            border-radius: 5px;
            font-size: 16px;
        }

        button:hover {
            background-color: #cc5200;
        }

        @media only screen and (max-width: 768px) {
            [class*="col-"] {
                width: 100%;
            }
        }
    </style>
</head>

<body>
    <div class="header">
        <h1 id="titulo">Receita de Arroz Frito</h1>
        <button onclick="mudarTexto()">Mudar Texto do Título</button>
    </div>

    <div class="row">
        <div class="col-3">
            <h2>Ingredientes</h2>
            <ul id="ingredientes">
                <li>2 xícaras de arroz cozido</li>
                <li>1 cenoura ralada</li>
                <li>1/2 xícara de ervilhas</li>
                <li>1/2 xícara de milho</li>
                <li>2 ovos</li>
                <li>2 colheres de sopa de molho de soja (shoyu)</li>
                <li>1 colher de sopa de óleo</li>
                <li>1/2 xícara de cebolinha picada</li>
                <li>Sal e pimenta a gosto</li>
            </ul>
            <button onclick="alternarIngredientes()">Ocultar/Exibir Ingredientes</button>
        </div>

        <div class="col-6">
            <h2>Modo de Preparo</h2>
            <ol>
                <li>Em uma frigideira grande, aqueça o óleo e frite os ovos mexidos. Reserve.</li>
                <li>Na mesma frigideira, adicione a cenoura, as ervilhas e o milho. Refogue por alguns minutos.</li>
                <li>Acrescente o arroz cozido e misture bem.</li>
                <li>Adicione o molho de soja, o sal e a pimenta a gosto.</li>
                <li>Junte os ovos mexidos e misture novamente.</li>
                <li>Finalize com a cebolinha picada e sirva quente.</li>
            </ol>
        </div>

        <div class="col-3">
            <h2>Informações Adicionais</h2>
            <p>Receita simples e deliciosa, ideal para acompanhar pratos orientais.</p>
            <h2>Links</h2>
            <button onclick="mudarCorFundo()">Mudar Cor de Fundo</button>
            <p><a href="https://www.tudogostoso.com.br/receita/136588-arroz-frito-estilo-oriental.html" target="_blank">Receita Completa</a></p>
        </div>
    </div>

    <div class="footer">
        <p>Receita de Arroz Frito - Simples e Delicioso!</p>
    </div>

    <script>
        function alternarIngredientes() {
            var ingredientes = document.getElementById("ingredientes");
            ingredientes.style.display = ingredientes.style.display === "none" ? "block" : "none";
        }

        function mudarTexto() {
            document.getElementById("titulo").innerHTML = "Arroz Frito Especial!";
        }

        function mudarCorFundo() {
            document.body.style.backgroundColor = "#FFA500"; // Cor laranja
        }
    </script>
</body>
</html>
