#--------------------------------------------------------------------------------------------------------
#
# This file provides user defined values as needed to install OKD in the IBM Cloud using Terraform.
# Provide user values to override the default values as defined in the 000-variables.tf file.  
# 
# The user provided values will override what is defined in the 00-variables.tf file.
#
# REQUIRED PARAMETERS:
#   ibm_api_username
#   ibm_api_key
#   datacenter
#--------------------------------------------------------------------------------------------------------
# IBMCloud / Softlayer related credentals and datacenter parameters 
#
# - API user name and API key.  Obtained from the IBM Cloud browser based user interface.
ibm_api_username = "IBM1676618"
ibm_api_key = "1449b69b99f7c35cb96dc287a49739e1fef1173702041418fc907faffd907f76"

#
# - Datacenter code for the location of where the VM(s) will be deployed.
# - Refer to this link for information regarding all valid datacenter codes:
# - https://cloud.ibm.com/gen1/infrastructure/provision/vs
datacenter = "dal13"

host_base = "cp4i"

os_user = "okdadmin"
os_password = "okd@2019"

compute = {
    nodes                = "6"
    cpu_cores            = "16"
    memory               = "32768"
}

student = {
    nodes                = "2"
}

compute_tag = ["class","okd","compute"]
master_tag  = ["class","okd","master"]
student_tag  = ["class","okd","student"]