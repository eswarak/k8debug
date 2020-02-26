#!/bin/bash
DASH="============================================================================================================================"
echo " "
echo $DASH
echo " "
echo "  Deleting Collector resources"
echo " "

CWD=$(pwd)

echo "==== delete env_06 Student Services"        
echo " "
oc  delete -f ${CWD}/deployment/fileout/env_06_student_service.yaml    
echo " "
echo "==== delete env_05 Student UI"        
echo " "
oc  delete -f ${CWD}/deployment/fileout/env_05_student_ui.yaml
echo " "
echo "==== delete env_04 Instructor UI & Service"        
echo " "
oc  delete -f ${CWD}/deployment/fileout/env_04_instructor.yaml
echo " "
echo "==== delete env_03 Common app yarns"        
echo " "
oc  delete -f ${CWD}/deployment/fileout/env_03_yarns.yaml
echo " "
echo "==== delete env_02 Teams"            
echo " "
oc  delete -f ${CWD}/deployment/fileout/env_02_teams.yaml
echo " "
echo "==== delete env_01 Instructor Configmap"
echo " "
oc  delete -f ${CWD}/deployment/fileout/env_01_one.yaml
echo " "
echo "  Finished deleting Collector resources"
echo $DASH
echo " "
echo "  Deleting team projects"
echo " "
${CWD}/deployment/fileout/env_00_delete_projects.sh

echo $DASH
