import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

def enviar_correo(destinatario, asunto, cuerpo):
  
    servidor_smtp = 'smtp.example.com'
    puerto_smtp = 587
    usuario = 'tu_correo@example.com'
    contraseña = 'tu_contraseña'

   
    mensaje = MIMEMultipart()
    mensaje['From'] = usuario
    mensaje['To'] = destinatario
    mensaje['Subject'] = asunto

  
    mensaje.attach(MIMEText(cuerpo, 'plain'))

    servidor = smtplib.SMTP(host=servidor_smtp, port=puerto_smtp)
    servidor.starttls() 

  
    servidor.login(usuario, contraseña)

    
    servidor.sendmail(usuario, destinatario, mensaje.as_string())

 
    servidor.quit()


destinatario = 'destinatario@example.com'
asunto = 'Asunto del correo'
cuerpo = 'Hola,\n\nEste es un ejemplo de correo electrónico desde el sistema de servicios técnicos.'

enviar_correo(destinatario, asunto, cuerpo)
