# My local kubernetes build

for local computer usage

## start minikube

set default driver: minikube config set driver hyperkit

windows: start with hyperv
minikube start --insecure-registry "10.0.0.0/24" --image-mirror-country='cn'

osx: start with hyperkit
brew install hyperkit
minikube start --driver=hyperkit --insecure-registry "10.0.0.0/24"

---

## DNS

minikube dns
https://minikube.sigs.k8s.io/docs/handbook/addons/ingress-dns/

---

## kube apply with kustomize and helm
kubectl kustomize --enable-helm | kubectl apply -f -
kubectl kustomize --enable-helm | kubectl delete -f -

---

## kube create secret
kubectl create secret generic -n dapr-system dapr-redis-secret \
--from-literal=PASSWORD="redis-test" \
--dry-run=client -o yaml > raw.yaml

---

## minikube build image
minikube image build -t imageName .