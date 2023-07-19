#!/bin/bash

kubectl apply -f ./nestjs-configmap.yaml
kubectl apply -f ./pg-secrets.yaml
kubectl apply -f ./pg-statefulset.yaml
kubectl apply -f ./nestjs-deployment.yaml
kubectl apply -f ./pg-service.yaml
kubectl apply -f ./nestjs-service.yaml

minikube service nestjs-service