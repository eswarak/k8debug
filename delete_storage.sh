#!/bin/bash
DASH="============================================================================================================================"
echo " "
echo $DASH
echo " "
echo "  Deleting storage for panda"
echo " "

CWD=$(pwd)

${CWD}/deployment/fileout/14_storage_panda_cleanup.sh   

echo " "
echo "  Finished deleting storage"
echo $DASH
echo " "