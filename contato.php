<?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtém os dados do formulário
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Verifica se os campos obrigatórios foram preenchidos
    if (empty($name) || empty($email) || empty($message)) {
        echo "Por favor, preencha todos os campos obrigatórios.";
    } else {
        // Configurações para enviar o e-mail
        $to = "italobggdev@gmail.com"; // Substitua pelo seu endereço de e-mail
        $subject = "Novo contato I-GG";
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";

        // Corpo do e-mail
        $email_body = "Nome: $name\n";
        $email_body .= "E-mail: $email\n";
        $email_body .= "Mensagem:\n$message";

        // Tenta enviar o e-mail
        if (mail($to, $subject, $email_body, $headers)) {
            echo "Obrigado por entrar em contato. Sua mensagem foi enviada com sucesso!";
        } else {
            echo "Desculpe, houve um problema ao enviar o e-mail. Por favor, tente novamente mais tarde.";
        }
    }
}
?>
