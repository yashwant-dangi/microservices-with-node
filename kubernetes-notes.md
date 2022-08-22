- kubectl apply -f posts.yaml
- kubectl get pods

## common kubernetes command

- kubectl get pods
- kubectl exec -it [pod_name] [cmd]
- kubectl logs [pod_name]
- kubectl delete pod [pod_name]
- kubectl apply -f [config_file_name]
  kubectl apply -f posts-depl.yaml
- kubectl rollout restart deployment <deployment-name> - to restart the deployment
- kubectl describe pod [pod_name]

## kubernetes deployment commands

- kubectl get deployments
- kubectl describe deployment [depl_name]
- kubectl apply -f [config file name]
- kubectl delete deployment [depl_name]

## storing secrets in kubernetes

- kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf
- kubectl get secrets

## get services

> Services provide networking between pods

> Types of Services

1. Cluster IP - sets up an easy-to-remember URL to access a pod. Only exposes pods in a cluster
2. Node Port - Made a pod accessible from outside the cluster. Usually only used for dev purpose.
3. Load Balancer - Make a pod accessiable from outside the cluster, right way to expose pod to outside world
4. External Name - Redirects an in-cluster request to a CNAME url

- kubectl get services
- kubectl get services -n ingress-nginx

## port forwarding

- kubectl port-forward nats-depl-c48f5d4bd-fx998 4222:4222
- kubectl port-forward nats-depl-c48f5d4bd-fx998 8222:8222

## kubernetes context

- kubectl config view
- kubectl config use-context <context_name>
