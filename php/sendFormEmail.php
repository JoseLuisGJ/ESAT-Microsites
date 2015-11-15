<?php

        //////////////////
        // ENVIAR EMAIL //
        //////////////////

        $emailCC='joseluisgj@gmail.com';
        $email=$_POST['_email'];
        $subject = $_POST['_nombre'];
        $apellidos = $_POST['_apellidos'];
        $telefono = $_POST['_telefono'];
        $mensaje = $_POST['_mensaje'];
        $headers = 'From:'. $email . "\r\n"; // Sender's Email
        $headers .= 'Cc:'. $emailCC . "\r\n"; // Carbon copy to Sender        
        //$compuesto = 'Mensaje enviado por: ' . $subject . ' ' +$apellidos . " " . 'Telefono: ' . $telefono . ' email: '. $email . " " . 'Mensaje: ' . $mensaje;
        // Message lines should not exceed 70 characters (PHP rule), so wrap it
        //$compuesto = wordwrap($message, 70);
        // Send Mail By PHP Mail Function
        mail("joseluisgj@gmail.com", $subject, $mensaje, $headers);

        ////////////////////////////
        // ALMACENAR EN MAILCHIMP //
        ////////////////////////////        
        
        $data = [
            'email'     => $email,
            'status'    => 'subscribed',
            'firstname' => $subject,
            'lastname'  => $apellidos
        ];

        syncMailchimp($data);

        function syncMailchimp($data) {
            $apiKey = 'e1d818d11f650c9a701e33e31a0b402b-us8';
            $listId = '4980d0dd4e';

            $memberId = md5(strtolower($data['email']));
            $dataCenter = substr($apiKey,strpos($apiKey,'-')+1);
            $url = 'https://' . $dataCenter . '.api.mailchimp.com/3.0/lists/' . $listId . '/members/' . $memberId;

            $json = json_encode([
                'email_address' => $data['email'],
                'status'        => $data['status'], // "subscribed","unsubscribed","cleaned","pending"
                'merge_fields'  => [
                    'FNAME'     => $data['firstname'],
                    'LNAME'     => $data['lastname']
                ]
            ]);

            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $apiKey);
            curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_TIMEOUT, 10);
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $json);                                                                                                                 

            $result = curl_exec($ch);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);

            return $httpCode;
        }

   
?>