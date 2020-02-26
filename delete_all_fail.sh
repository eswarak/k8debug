#!/bin/bash
DASH="============================================================================================================================"
echo " "
echo $DASH
echo " "
echo "  Deleting ALL FAILed resources"
echo " "

CWD=$(pwd)

echo "==== delete 01"
echo " "
oc delete -f ${CWD}/deployment/fileout/01_delete_house_all.yaml
echo " "
echo "==== delete 02"
echo " "
oc delete -f ${CWD}/deployment/fileout/02_fail_baker_all.yaml
echo " "
echo "==== delete 03"        
echo " "
oc delete -f ${CWD}/deployment/fileout/03_fail_carbs_all.yaml
echo " "
echo "==== delete 04"        
echo " "
oc delete -f ${CWD}/deployment/fileout/04_fail_doors_all.yaml
echo " "
echo "==== delete 05"        
echo " "
oc delete -f ${CWD}/deployment/fileout/05_fail_eagle_all.yaml
echo " "
echo "==== delete 06"        
echo " "
oc delete -f ${CWD}/deployment/fileout/06_fail_floor_all.yaml
echo " "
echo "==== delete 07"
echo " "
oc delete -f ${CWD}/deployment/fileout/07_fail_gonzo_all.yaml
echo " "
echo "==== delete 08"
echo " "
oc delete -f ${CWD}/deployment/fileout/08_fail_igloo_all.yaml
echo " "
echo "==== delete 09"
echo " "
oc delete -f ${CWD}/deployment/fileout/09_fail_jazzy_all.yaml
echo " "
echo "==== delete 10"
echo " "
oc delete -f ${CWD}/deployment/fileout/10_fail_karma_all.yaml
echo " "
echo "==== delete 11"
echo " "
oc delete -f ${CWD}/deployment/fileout/11_fail_lacey_all.yaml
echo " "
echo "==== delete 12"
echo " "
oc delete -f ${CWD}/deployment/fileout/12_fail_magma_all.yaml
echo " "
echo "==== delete 13"
echo " "
oc delete -f ${CWD}/deployment/fileout/13_fail_offer_all.yaml
echo " "
echo "==== delete 14"
echo " "
oc delete -f ${CWD}/deployment/fileout/14_fail_panda_all.yaml
echo " "
echo "==== delete 15"
echo " "
oc delete -f ${CWD}/deployment/fileout/15_fail_quake_all.yaml
echo " "
echo "==== delete 16"
echo " "
oc delete -f ${CWD}/deployment/fileout/16_fail_rainy_all.yaml
echo " "
echo "==== delete 17"
echo " "
oc delete -f ${CWD}/deployment/fileout/17_fail_salty_all.yaml
echo " "
echo "  Finished deleting ALL FAILed resources"
echo $DASH
echo " "