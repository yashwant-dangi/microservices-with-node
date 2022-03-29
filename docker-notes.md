- docker run hello-world

override

- docker run busybox echo hi there
- docker run busybox ls

list all running containers

- docker ps

list all containers

- docker ps --all

docker run = docker create + docker start

create a container

- docker create image_name

start a container

- docker start container_id
- docker start -a container_id

removing stopped containers

- docker system prune

get logs from a container

- docker logs container_id

stop a container

- docker stop container_id

kill a container

- docker kill container_id

executing command in running containers

- docker exec -it container_id command
  -i stand for input channel
  -t start for pretty output text
  - example - docker exec -it container_id redis-cli
  - example - docker exec -it container_id sh (for full terminal access)
  - example - docker run -it container_id sh (from starting)

# Building a docker image

- docker build .
- docker build -t yashwantdangi/posts .
