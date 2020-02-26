#!/bin/bash
SECONDS=0
DASH="============================================================================================================================"
echo " "
echo $DASH
echo "  Build and push Collector Image to repository"

# Set the current work directory
CWD=$(pwd)

# Copy teams.json 
if [ -f ./teams.json ]; then
    echo " "
    echo "========== Copy teams.json to build directory: $CWD/collector"
    echo " "
    cp ./teams.json $CWD/collector/teams.json
else
    echo " "
    echo "========== ERROR: Required file, teams.json is not located in the current directory"
    echo " "
    echo $DASH
    exit 1
fi

echo " "
echo "========== Switch to build directory: $CWD/collector"
echo " "


cd $CWD/collector/
$CWD/collector/build_push.sh collector 

echo " "
echo "========== Finished build of Collector"
echo " "
echo "========== Switch back to base directory: $CWD"
cd $CWD
echo " "
duration=$SECONDS
echo "========== Build process time: $(($duration / 60)) minutes and $(($duration % 60)) seconds elapsed"
echo " "
echo $DASH