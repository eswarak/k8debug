#!/bin/bash
SECONDS=0
DASH="============================================================================================================================"
echo " "
echo $DASH
echo " "
echo "  Building OKD cluster environment in IBM Cloud using Terraform"
echo " "

while true; do
    read -p "  Have you modified the terraform.tfvars file to the desired datacenter and provided credentials? Reply (y/n)? " yn
    case $yn in
        [Yy]* ) ANS="Y"; break;;
        [Nn]* ) echo " ";exit;;
        * ) echo "Please answer yes or no.";;
    esac
done

# Set the current work directory
CWD=$(pwd)


echo " "
echo "========== Switch to terraform directory: $CWD/terraformFiles"
echo " "

cd $CWD/terraformFiles/

echo " "
echo "========== INIT"
echo " "
terraform init
echo " "
echo "========== PLAN"
echo " "
terraform plan

echo " "
while true; do
    read -p "Continue with terraform apply? Reply (y/n)? " yn
    case $yn in
        [Yy]* ) ANS="Y"; break;;
        [Nn]* ) echo " ";exit;;
        * ) echo "Please answer yes or no.";;
    esac
done

echo " "
echo "========== APPLY"
echo " "
terraform apply -auto-approve

echo " "
duration=$SECONDS
echo "========== Terraform process time: $(($duration / 60)) minutes and $(($duration % 60)) seconds elapsed"
echo " "
echo $DASH