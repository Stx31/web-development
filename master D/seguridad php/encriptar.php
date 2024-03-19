<html>
<head>
    
</head>
<body>
    Prueba de encriptaci�n:<br />
    <?php
    if (CRYPT_STD_DES == 1) {
        echo 'Standard DES: ' . crypt('contrase�a de usuario', 'dc') . "<br/>";
    }
    
    if (CRYPT_EXT_DES == 1) {
        echo 'Extendido DES: ' . crypt('contrase�a de usuario', '_G4.uter3') . "<br/>";
    }
    
    if (CRYPT_MD5 == 1) {
        echo 'MD5:          ' . crypt('contrase�a de usuario', '$1$ujdert54$') . "<br/>";
    }
    
    if (CRYPT_BLOWFISH == 1) {
        echo 'Blowfish:     ' . crypt('contrase�a de usuario', '$2a$07$ujfdentredsedwe34ed2sw$') . "<br/>";
    }
    
    if (CRYPT_SHA256 == 1) {
        echo 'SHA-256:      ' . crypt('contrase�a de usuario', '$5$rounds=5000$de4rhfr43ehd5dje$') . "<br/>";
    }
    
    if (CRYPT_SHA512 == 1) {
        echo 'SHA-512:      ' . crypt('contrase�a de usuario', '$6$rounds=5000$de4rhfr43ehd5dje$') . "<br/>";
    }
    ?>
</body>
</html>