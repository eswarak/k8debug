#!/bin/bash
DASH="============================================================================================================================"
echo " "
echo $DASH
echo " "
echo "  Creating ALL PASSed resources"
echo " "

CWD=$(pwd)

echo "==== create 01"
echo " "
oc create -f ${CWD}/deployment/fileout/01_pass_house_all.yaml
echo " "
echo "==== create 02"
echo " "
oc create -f ${CWD}/deployment/fileout/02_pass_baker_all.yaml
echo " "
echo "==== create 03"        
echo " "
oc create -f ${CWD}/deployment/fileout/03_pass_carbs_all.yaml
echo " "
echo "==== create 04"        
echo " "
oc create -f ${CWD}/deployment/fileout/04_pass_doors_all.yaml
echo " "
echo "==== create 05"        
echo " "
oc create -f ${CWD}/deployment/fileout/05_pass_eagle_all.yaml
echo " "
echo "==== create 06"        
echo " "
oc create -f ${CWD}/deployment/fileout/06_pass_floor_all.yaml
echo " "
echo "==== create 07"
echo " "
oc create -f ${CWD}/deployment/fileout/07_pass_gonzo_all.yaml
echo " "
echo "==== create 08"
echo " "
oc create -f ${CWD}/deployment/fileout/08_pass_igloo_all.yaml
echo " "
echo "==== create 09"
echo " "
oc create -f ${CWD}/deployment/fileout/09_pass_jazzy_all.yaml
echo " "
echo "==== create 10"
echo " "
oc create -f ${CWD}/deployment/fileout/10_pass_karma_all.yaml
echo " "
echo "==== create 11"
echo " "
oc create -f ${CWD}/deployment/fileout/11_pass_lacey_all.yaml
echo " "
echo "==== create 12"
echo " "
oc create -f ${CWD}/deployment/fileout/12_pass_magma_all.yaml
echo " "
echo "==== create 13"
echo " "
oc create -f ${CWD}/deployment/fileout/13_pass_offer_all.yaml
echo " "
echo "==== create 14"
echo " "
oc create -f ${CWD}/deployment/fileout/14_pass_panda_all.yaml
echo " "
echo "==== create 15"
echo " "
oc create -f ${CWD}/deployment/fileout/15_pass_quake_all.yaml
echo " "
echo "==== create 16"
echo " "
oc create -f ${CWD}/deployment/fileout/16_pass_rainy_all.yaml
echo " "
echo "==== create 17"
echo " "
oc create -f ${CWD}/deployment/fileout/17_pass_salty_all.yaml
echo " "
echo "  Finished creating ALL PASSed resources"
echo $DASH
echo " "