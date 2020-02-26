#!/bin/bash
DASH="============================================================================================================================"
echo " "

echo $DASH

CWD=$(pwd)

echo " "
echo "  Creating UI resources"
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
