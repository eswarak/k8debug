ssh -o StrictHostKeyChecking=no  -o UserKnownHostsFile=/dev/null -i ./sshkey root@$1 'systemctl enable --now docker'
ssh -o StrictHostKeyChecking=no  -o UserKnownHostsFile=/dev/null -i ./sshkey root@$1 'groupadd docker'
ssh -o StrictHostKeyChecking=no  -o UserKnownHostsFile=/dev/null -i ./sshkey root@$1 'usermod -aG docker okdadmin'