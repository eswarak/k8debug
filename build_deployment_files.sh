#!/bin/bash
SECONDS=0
DASH="============================================================================================================================"
echo " "
echo $DASH
echo " "
echo "  Generate Deployment and lab YAML files from templates"

CW=$(pwd)

# Copy teams.json 
if [ -f ./teams.json ]; then
    echo " "
    echo "  Copy teams.json to build directory: $CW/deployment"
    echo " "
    cp $(pwd)/teams.json $(pwd)/deployment/teams.json
    echo "  Copy teams.json to collector directory: $CW/collector"
    echo " "
    cp $(pwd)/teams.json $(pwd)/collector/teams.json
else
    echo " "
    echo "  ERROR: Required file, teams.json is not located in the current directory"
    echo " "
    echo $DASH
    exit 1
fi

# Save current working directory and set 
CDIR=$(pwd)/deployment

echo "  Switched to deployment build directory : $CDIR"
cd $CDIR

# check if the required node modules directory exists
if [ ! -d "${CDIR}/node_modules" ]; then
    # Control will enter here if $DIRECTORY doesn't exist.
    echo " "
    echo "  Installing required node packages"
    echo " "
    npm install
else
    echo " "
    echo "  Located required node packages"
    echo " "
fi

echo "  Generating files"
echo " "
echo $DASH
node generate.js

echo " "
echo $DASH
echo " "
echo "  Changed permissions on shell files to allow execute"
chmod +x ${CDIR}/fileout/*.sh

echo " "
echo "  Switched back to base directory: $CW"
cd $CW

echo " "
echo "  Finished generating Deployment and YAML files"
echo " "
duration=$SECONDS
echo "  Build process time: $(($duration / 60)) minutes and $(($duration % 60)) seconds elapsed"
echo " "
echo $DASH