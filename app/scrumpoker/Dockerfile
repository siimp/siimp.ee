FROM chrisns/scrumonline:bundled

RUN apt install nano -y

COPY config.php /scrumonline/src/config.php
COPY home.php /scrumonline/src/templates/home.php 
COPY member.php /scrumonline/src/templates/member.php 
COPY resources /scrumonline/src/resources