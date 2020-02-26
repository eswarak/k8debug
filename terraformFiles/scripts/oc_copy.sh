#!/bin/bash

#LOGFILE=/tmp/oc_copy.log
#exec > $LOGFILE 2>&1

echo "=================================================="
echo "= Start of oc_copy.sh"
echo "=================================================="

echo " "
echo "= 1. Get the OC tar.gz"
echo " "
sudo wget -c https://github.com/openshift/origin/releases/download/v3.11.0/openshift-origin-client-tools-v3.11.0-0cbc58b-linux-64bit.tar.gz

echo " "
echo "= 2. Extract the tar.gz"
echo " "
sudo mkdir -p /tmp/oc
sudo tar -xvf openshift-origin-client-tools-v3.11.0-0cbc58b-linux-64bit.tar.gz -C /tmp/oc

echo " "
echo "= 3. Content of extracted tar.gz"
echo " "
sudo cd /tmp/oc/openshift-origin-client-tools-v3.11.0-0cbc58b-linux-64bit
echo "--- contents of /tmp/oc/openshift-origin-client-tools-v3.11.0-0cbc58b-linux-64bit ---"
sudo ls -la /tmp/oc/openshift-origin-client-tools-v3.11.0-0cbc58b-linux-64bit

echo " "
echo "= 4. Copy oc and kubectl to /usr/bin"
echo " "
sudo cp /tmp/oc/openshift-origin-client-tools-v3.11.0-0cbc58b-linux-64bit/kubectl  /usr/bin
sudo cp /tmp/oc/openshift-origin-client-tools-v3.11.0-0cbc58b-linux-64bit/oc  /usr/bin

echo " "
echo "= 5. Did we find oc and what version"
echo " "
sudo oc version

echo "=================================================="
echo "= End of oc_copy.sh"
echo "=================================================="

exit 0
