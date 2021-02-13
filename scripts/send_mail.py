from smtplib import SMTP, SMTPException
import logging

sender = 'info@siimp.ee'
receiver = 'test-a7k99jnxm@srv1.mail-tester.com''

message = f'''From: Info <{sender}>
To: To <{receiver}>
Subject: Test

This is test message.

All the best,
Good tester
'''

try:
   smtp = SMTP('127.0.0.1')
   smtp.sendmail(sender, receiver, message)         
   logging.info(f'Successfully sent email to {receiver}')
except SMTPException:
   logging.exception('Error: unable to send email')
