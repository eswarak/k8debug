#!/bin/bash
DASH="============================================================================================================================"
echo " "
echo $DASH
echo " "
echo "  Creating ALL FAILed resources"
echo " "

CWD=$(pwd)

echo "==== create 01"
echo " "
oc create -f ${CWD}/deployment/fileout/01_fail_house_all.yaml
echo " "
echo "==== create 02"
echo " "
oc create -f ${CWD}/deployment/fileout/02_fail_baker_all.yaml
echo " "
echo "==== create 03"        
echo " "
oc create -f ${CWD}/deployment/fileout/03_fail_carbs_all.yaml
echo " "
echo "==== create 04"        
echo " "
oc create -f ${CWD}/deployment/fileout/04_fail_doors_all.yaml
echo " "
echo "==== create 05"        
echo " "
oc create -f ${CWD}/deployment/fileout/05_fail_eagle_all.yaml
echo " "
echo "==== create 06"        
echo " "
oc create -f ${CWD}/deployment/fileout/06_fail_floor_all.yaml
echo " "
echo "==== create 07"
echo " "
oc create -f ${CWD}/deployment/fileout/07_fail_gonzo_all.yaml
echo " "
echo "==== create 08"
echo " "
oc create -f ${CWD}/deployment/fileout/08_fail_igloo_all.yaml
echo " "
echo "==== create 09"
echo " "
oc create -f ${CWD}/deployment/fileout/09_fail_jazzy_all.yaml
echo " "
echo "==== create 10"
echo " "
oc create -f ${CWD}/deployment/fileout/10_fail_karma_all.yaml
echo " "
echo "==== create 11"
echo " "
oc create -f ${CWD}/deployment/fileout/11_fail_lacey_all.yaml
echo " "
echo "==== create 12"
echo " "
oc create -f ${CWD}/deployment/fileout/12_fail_magma_all.yaml
echo " "
echo "==== create 13"
echo " "
oc create -f ${CWD}/deployment/fileout/13_fail_offer_all.yaml
echo " "
echo "==== create 14"
echo " "
oc create -f ${CWD}/deployment/fileout/14_fail_panda_all.yaml
echo " "
echo "==== create 15"
echo " "
oc create -f ${CWD}/deployment/fileout/15_fail_quake_all.yaml
echo " "
echo "==== create 16"
echo " "
oc create -f ${CWD}/deployment/fileout/16_fail_rainy_all.yaml
echo " "
echo "==== create 17"
echo " "
oc create -f ${CWD}/deployment/fileout/17_fail_salty_all.yaml
echo " "
echo "  Finished creating ALL FAILed resources"
echo $DASH
echo " "