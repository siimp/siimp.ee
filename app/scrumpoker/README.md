# Scrumpoker
Simple docker deployment of scrumonline  
More info at https://github.com/Toxantron/scrumonline  

docker build -f Dockerfile --tag scrumpocker:latest . 
docker run -it --rm -p 8080:80 -e HOST="http://localhost:8080" scrumpocker:latest

docker run -d -p 8084:80 -e HOST="http://localhost:8084" chrisns/scrumonline:bundled