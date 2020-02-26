#!/bin/bash
DASH="============================================================================================================================"
echo " "
echo $DASH

${CWD}/deployment/env_00_projects

CWD=$(pwd)

echo " "
echo "  Creating team projects"
echo " "
${CWD}/deployment/fileout/env_00_create_projects.sh

echo $DASH

echo " "
echo "  Creating Collector resources"
echo " "

echo "==== create env_01 Instructor Configmap"
echo " "
oc  create -f ${CWD}/deployment/fileout/env_01_one.yaml
echo " "
echo "==== create env_02 Teams"           
echo " "
oc  create -f ${CWD}/deployment/fileout/env_02_teams.yaml
echo " "
echo "==== create env_03 Common app yarns"       
echo " "
oc  create -f ${CWD}/deployment/fileout/env_03_yarns.yaml
echo " "
echo "==== create env_04 Instructor UI & Service"          
echo " "
oc  create -f ${CWD}/deployment/fileout/env_04_instructor.yaml
echo " "
echo "==== create env_05 Student UI"     
echo " "
oc  create -f ${CWD}/deployment/fileout/env_05_student_ui.yaml
echo " "
echo "==== create env_06 Student Services"        
echo " "
oc  create -f ${CWD}/deployment/fileout/env_06_student_service.yaml    
echo " "
echo "  Finished creating Collector resources"
echo $DASH
echo " "
