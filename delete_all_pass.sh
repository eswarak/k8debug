#!/bin/bash
DASH="============================================================================================================================"
echo " "
echo $DASH
echo " "
echo "  Deleting ALL PASSed resources"
echo " "

CWD=$(pwd)

echo "==== delete 01"
echo " "
oc delete -f ${CWD}/deployment/fileout/01_pass_house_all.yaml
echo " "
echo "==== delete 02"
echo " "
oc delete -f ${CWD}/deployment/fileout/02_pass_baker_all.yaml
echo " "
echo "==== delete 03"        
echo " "
oc delete -f ${CWD}/deployment/fileout/03_pass_carbs_all.yaml
echo " "
echo "==== delete 04"        
echo " "
oc delete -f ${CWD}/deployment/fileout/04_pass_doors_all.yaml
echo " "
echo "==== delete 05"        
echo " "
oc delete -f ${CWD}/deployment/fileout/05_pass_eagle_all.yaml
echo " "
echo "==== delete 06"        
echo " "
oc delete -f ${CWD}/deployment/fileout/06_pass_floor_all.yaml
echo " "
echo "==== delete 07"
echo " "
oc delete -f ${CWD}/deployment/fileout/07_pass_gonzo_all.yaml
echo " "
echo "==== delete 08"
echo " "
oc delete -f ${CWD}/deployment/fileout/08_pass_igloo_all.yaml
echo " "
echo "==== delete 09"
echo " "
oc delete -f ${CWD}/deployment/fileout/09_pass_jazzy_all.yaml
echo " "
echo "==== delete 10"
echo " "
oc delete -f ${CWD}/deployment/fileout/10_pass_karma_all.yaml
echo " "
echo "==== delete 11"
echo " "
oc delete -f ${CWD}/deployment/fileout/11_pass_lacey_all.yaml
echo " "
echo "==== delete 12"
echo " "
oc delete -f ${CWD}/deployment/fileout/12_pass_magma_all.yaml
echo " "
echo "==== delete 13"
echo " "
oc delete -f ${CWD}/deployment/fileout/13_pass_offer_all.yaml
echo " "
echo "==== delete 14"
echo " "
oc delete -f ${CWD}/deployment/fileout/14_pass_panda_all.yaml
echo " "
echo "==== delete 15"
echo " "
oc delete -f ${CWD}/deployment/fileout/15_pass_quake_all.yaml
echo " "
echo "==== delete 16"
echo " "
oc delete -f ${CWD}/deployment/fileout/16_pass_rainy_all.yaml
echo " "
echo "==== delete 17"
echo " "
oc delete -f ${CWD}/deployment/fileout/17_pass_salty_all.yaml
echo " "
echo "  Finished deleting ALL PASSed resources"
echo $DASH
echo " "