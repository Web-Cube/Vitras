<?php
	require_once 'PHPMailer/class.phpmailer.php';
 
	$mail = new PHPMailer;
	$mail->CharSet = 'UTF-8';
	 
	// От кого
	$mail->setFrom('test@gmail.com', 'Veritas.ru');		
	 
	// Кому
	$mail->addAddress('misha1oboronov@gmail.com', 'Михаил');
	 
	// Тема письма
	if (isset($_POST['prolongation'])) {
		$mail->Subject = 'Заявка на продление';
	} else {
		$mail->Subject = 'Заявка с квиза';
	}
	// Тело письма
	if (isset($_POST['prolongation'])) {
		$body = "Страховая компания: {$_POST['company']}<br> Серия и номер полиса: {$_POST['iin']}<br> Телефон:: {$_POST['phone']}";
	} else {
		$body = "Марка автомобиля: {$_POST['brend']}<br> Модель автомобиля: {$_POST['model']}<br> Год выпуска: {$_POST['year']} <br> Возраст водителя: {$_POST['age']} <br> Стаж вождения: {$_POST['experience']} <br> Характеристики авто: {$_POST['power']} {$_POST['price']} <br> Телефон: {$_POST['phone']}";
	}
	$mail->msgHTML($body);
	 
	$mail->send();
	
?>