<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica se os campos do formulário foram preenchidos
    if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"])) {
        // Obter os valores dos campos do formulário
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];


        // Exemplo: Enviar um e-mail
        $to = "italobggdev@gmail.com";
        $subject = "Formulário de Contato";
        $headers = "From: $email";
        $body = "Nome: $name\nE-mail: $email\nMensagem: $message";

        mail($to, $subject, $body, $headers);

        // Redirecionar para uma página de sucesso
/*         header("Location: sucesso.html");
        exit();
    } else { */
        // Se algum campo estiver em branco, redirecionar para uma página de erro
/*         header("Location: erro.html");
        exit(); */
    }
}
?>
