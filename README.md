# My local kubernetes build

for local computer usage

---
## Install ingress
- User Docker Desktop Kubernetes
- Follow https://kubernetes.github.io/ingress-nginx/deploy/#quick-start

## kube apply with kustomize and helm
kubectl kustomize --enable-helm | kubectl apply --wait -f -

kubectl kustomize --enable-helm | kubectl delete --wait -f -

---

## kube create secret
kubectl create secret generic -n dapr-system dapr-redis-secret \
--from-literal=PASSWORD="redis-test" \
--dry-run=client -o yaml > raw.yaml

---

## minikube build image
minikube image build -t imageName .