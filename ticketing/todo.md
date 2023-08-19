create a stripe secret key

kubectl create secret generic stripe-secret --from-literal STRIPE_KEY=----

---

manual secret creation on digital ocean

kubectl config use-context <digital-ocean-context>

kubectl create secret generic jwt-secret --from-literal=JWT_KEY=<jwt-key>

---

apply ingress-nginx on the hosting platfrom cluster
