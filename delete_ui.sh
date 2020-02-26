#!/bin/bash
DASH="============================================================================================================================"
echo " "
echo $DASH
echo " "
echo "  Deleting UI resources"
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


echo $DASH
