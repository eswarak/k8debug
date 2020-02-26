#--------------------------------------------------------------------------------------------------------
#---- Modify the /etc/hosts file on each system that has been created
#--------------------------------------------------------------------------------------------------------
resource "null_resource" "student_build" {

  # on each student server in the environment copy and run the prep script
  count = "${var.student["nodes"]}"

  connection {
    host                = "${element(ibm_compute_vm_instance.student.*.ipv4_address, count.index)}"
    user                = "${var.ssh_user}"
    private_key         = "${tls_private_key.ssh.private_key_pem}"
  }

  provisioner "file" {
    source      = "${path.module}/scripts/student_prep.sh"
    destination = "/tmp/student_prep.sh"
  }

  provisioner "remote-exec" {
    inline = [
        "chmod +x /tmp/student_prep.sh","/tmp/student_prep.sh",
      ]
  }
}

resource "null_resource" "student_oc" {
    depends_on = ["null_resource.student_build", "null_resource.okd_build"]
  # on each student server in the environment copy and run the oc command

  # on each host edit the /etc/host file an add new entires
  count =  "${var.student["nodes"]}"

  # using the local.all_ips access each server and modify the host /etc/hosts file
  connection {
    host                = "${element(ibm_compute_vm_instance.student.*.ipv4_address, count.index)}"
    user                = "${var.ssh_user}"
    private_key         = "${tls_private_key.ssh.private_key_pem}"
  }

  provisioner "file" {
    source      = "${path.module}/scripts/oc_copy.sh"
    destination = "/tmp/oc_copy.sh"
  }

  provisioner "remote-exec" {
    inline = [
        "chmod +x /tmp/oc_copy.sh","/tmp/oc_copy.sh"
      ]
  }
}