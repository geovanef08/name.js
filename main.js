<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Água Potável e Saneamento</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/qrcode@1.5.0/build/qrcode.min.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #e0f7fa;
            color: #004d40;
            margin: 0;
            padding: 20px;
        }
        header {
            text-align: center;
            padding: 40px 20px;
            background: #00796b;
            color: white;
        }
        section {
            max-width: 800px;
            margin: 40px auto;
            padding: 20px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .qrcode {
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }
        .qrcode img {
            width: 150px;
            height: 150px;
        }
    </style>
</head>
<body>
    <header>
        <h1>Água Potável e Saneamento</h1>
        <p>ODS 6 - Garantir disponibilidade e gestão sustentável da água e saneamento para todos</p>
    </header>
    <section>
        <h2>Importância do Acesso à Água Potável</h2>
        <p>
            O acesso à água potável e a sistemas de saneamento básico é essencial para a saúde pública e o desenvolvimento sustentável.
            Em muitas regiões do mundo, milhões de pessoas ainda sofrem pela falta de infraestrutura básica de água e saneamento.
        </p>

        <h2>Como Contribuir</h2>
        <p>
            Você pode contribuir apoiando iniciativas de saneamento, preservando recursos hídricos e educando sobre o uso responsável da água.
        </p>

        <h2>Escaneie o QR Code</h2>
        <p>
            Clique ou escaneie o QR Code abaixo para mais informações sobre o tema e como agir para melhorar o acesso à água potável e saneamento.
        </p>

        <div class="qrcode" id="qrcode"></div>
    </section>

    <script>
        // Gerar QR Code com link para mais informações sobre o tema
        QRCode.toDataURL('https://www.un.org/pt/observances/world-water-day', function (err, url) {
            if (err) throw err;
            var img = new Image();
            img.src = url;
            document.getElementById('qrcode').appendChild(img);
        });
    </script>
</body>
</html>
