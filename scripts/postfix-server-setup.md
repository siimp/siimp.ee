## postfix mail server for ZONE virtual server with Centos 8
https://www.linuxbabe.com/mail-server/postfix-send-only-smtp-server-centos-8
```bash
sudo hostnamectl siimp.ee
sudo dnf update
sudo dnf install postfix -y
sudo systemctl start postfix
sudo systemctl enable postfix
sudo postconf -e "myhostname = siimp.ee"
sudo postconf -e "mydomain = siimp.ee"
sudo postconf -e "myorigin = siimp.ee"
sudo systemctl restart postfix
sudo dnf install epel-release
sudo dnf install opendkim perl-Getopt-Long -y
sudo nano /etc/opendkim.conf
	change "Mode     v" -> "Mode     sv"
	comment keyFile
	uncomment KeyTable, SigningTable,ExternalIgnoreList,InternalHosts      
sudo nano /etc/opendkim/SigningTable	
	add line to end of the file "*@siimp.ee default._domainkey.siimp.ee"
sudo nano /etc/opendkim/KeyTable
	add line to the end of the file "default._domainkey.siimp.ee siimp.ee:default:/etc/opendkim/keys/siimp.ee/default.private"
sudo nano /etc/opendkim/TrustedHosts
	add line to the end of the file "*.siimp.ee"
sudo mkdir /etc/opendkim/keys/siimp.ee
sudo opendkim-genkey -b 2048 -d siimp.ee -D /etc/opendkim/keys/siimp.ee -s default -v
sudo chown opendkim:opendkim /etc/opendkim/keys/ -R
sudo cat /etc/opendkim/keys/siimp.ee/default.txt
	add TXT record in zone with name default._domainkey
	TXT value is everything in parentahses except quotes,line breaks and spaces
dig -t txt siimp.ee
sudo opendkim-testkey -d siimp.ee -s default -vvv
	must show "key OK"
sudo systemctl start opendkim
sudo systemctl enable opendkim
sudo nano /etc/postfix/main.cf
	add to the end of the file
	# Milter configuration
	milter_default_action = accept
	milter_protocol = 6
	smtpd_milters = inet:127.0.0.1:8891
	non_smtpd_milters = $smtpd_milters
sudo gpasswd -a postfix opendkim
sudo systemctl restart postfix
add TXT record with empty name "" and with value "v=spf1 mx ip4:217.146.78.98 ~all"
sudo nano /etc/postfix/main.cf
	add to the end of the file
	smtp_tls_security_level = may
	smtp_tls_loglevel = 1
sudo systemctl restart postfix
```
score from https://www.mail-tester.com 10/10
	
