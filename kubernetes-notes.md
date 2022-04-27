- kubectl apply -f posts.yaml
- kubectl get pods

## common kubernetes command

- kubectl get pods
- kubectl exec -it [pod_name] [cmd]
- kubectl logs [pod_name]
- kubectl delete pod [pod_name]
- kubectl apply -f [config_file_name]
- kubectl describe pod [pod_name]

## kubernetes deployment commands

- kubectl get deployments
- kubectl describe deployment [depl_name]
- kubectl apply -f [config file name]
- kubectl delete deployment [depl_name]

## storing secrets in kubernetes

- kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf
- kubectl get secrets
