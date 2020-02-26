#!/bin/bash
#This script is used to prep the student node

echo "=================================================="
echo "= Start of student_prep.sh"
echo "=================================================="

echo " "
echo "= 1. Change to /tmp directory"
echo " "
cd /tmp

echo " "
echo "= 2. Setup NFS directories on this server"
echo " "

sudo mkdir /var/nfsshare
sudo chmod -R 777 /var/nfsshare
sudo chown nfsnobody:nfsnobody /var/nfsshare

echo " "
echo "= 3. Enable and start NFS services on this server"
echo " "

sudo systemctl enable --now rpcbind
sudo systemctl enable --now nfs-server
sudo systemctl enable --now nfs-lock
sudo systemctl enable --now nfs-idmap

echo " "
echo "= 4. Add exports location to /etc/exports"
echo " "

sudo echo '/var/nfsshare    *(rw,sync,no_subtree_check,insecure,no_root_squash)' >> /etc/exports
sudo cat /etc/exports

echo " "
echo "= 5. Restart the NFS services"
echo " "

sudo systemctl restart nfs-server
firewall-cmd --permanent --zone=public --add-service=nfs

echo " "
echo "= 6. Chmod exports to 777"
echo " "

sudo chmod -R 777 /var/nfsshare

echo " "
echo "= 7. Display status of nfs-server"
echo " "

sudo systemctl status nfs-server

echo " "
echo "= 8. YUM update "
echo " "

sudo yum update -y

echo " "
echo "= 9. Install epel "
echo " "

# might need to change if centos version 8 is used
sudo yum -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm

echo " "
echo "= 10. Install Docker and git "
echo " "

sudo yum -y install docker git dig

echo " "
echo "= End of student_prep.sh"
echo "=================================================="

exit 0
