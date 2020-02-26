#!/bin/bash
SECONDS=0 
DASH="============================================================================================================================"
echo " "
echo $DASH
echo "  Build and push all Lab Images to repository"


# check if tag is provided
if [ -z "$1" ]; then
    TAG="latest"
    echo "  Using default tag              : $TAG"
else 
    TAG=$1
    echo "  Using provided tag             : $TAG"
fi



# default target docker repository
if [ -z "$2" ]; then
    TR="docker.io/ibmicpcoc"
    echo "  Using default image repository : $TR"
else 
    TR=$2
    echo "  Using provided image repository: $TR"
fi



# Set the current work directory
CWD=$(pwd)

echo " "
echo "========== Switch to build directory: $CWD/labimages/fs-avail/"
echo "========== Avail"
cd $CWD/labimages/fs-avail/
$CWD/labimages/fs-avail/build_push.sh avail ${TAG} ${TR}

echo " "
echo "========== Switch to build directory: $CWD/labimages/fs-baker/"
echo "========== baker"
cd $CWD/labimages/fs-baker/
$CWD/labimages/fs-baker/build_push.sh baker ${TAG} ${TR}

echo " "
echo "========== Switch to build directory: $CWD/labimages/fs-carbs/"
echo "========== Carbs"
cd $CWD/labimages/fs-Carbs/
$CWD/labimages/fs-carbs/build_push.sh carbs ${TAG} ${TR}

echo " "
echo "========== Switch to build directory: $CWD/labimages/fs-doors/"
echo "========== Doors"
cd $CWD/labimages/fs-doors/
$CWD/labimages/fs-doors/build_push.sh doors ${TAG} ${TR}

echo " "
echo "========== Switch to build directory: $CWD/labimages/fs-eagle/"
echo "========== Eagle"
cd $CWD/labimages/fs-eagle/
$CWD/labimages/fs-eagle/build_push.sh eagle ${TAG} ${TR}

echo " "
echo "========== Switch to build directory: $CWD/labimages/fs-floor/"
echo "========== Floor"
cd $CWD/labimages/fs-floor/
$CWD/labimages/fs-floor/build_push.sh floor ${TAG} ${TR}

echo " "
echo "========== Switch to build directory: $CWD/labimages/fs-gonzo/"
echo "========== Gonzo"
cd $CWD/labimages/fs-gonzo/
$CWD/labimages/fs-gonzo/build_push.sh gonzo ${TAG} ${TR}

echo " "
echo "========== Switch to build directory: $CWD/labimages/fs-house/"
echo "========== House"
cd $CWD/labimages/fs-house/
$CWD/labimages/fs-house/build_push.sh house ${TAG} ${TR}

echo " "
echo "========== Switch to build directory: $CWD/labimages/fs-igloo/"
echo "========== Igloo"
cd $CWD/labimages/fs-igloo/
$CWD/labimages/fs-igloo/build_push.sh igloo ${TAG} ${TR}

echo " "
echo "========== Switch to build directory: $CWD/labimages/fs-jazzy/"
echo "========== Jazzy"
cd $CWD/labimages/fs-jazzy/
$CWD/labimages/fs-jazzy/build_push.sh jazzy ${TAG} ${TR}

echo " "
echo "========== Switch to build directory: $CWD/labimages/fs-karma/"
echo "========== Karma"
cd $CWD/labimages/fs-karma/
$CWD/labimages/fs-karma/build_push.sh karma ${TAG} ${TR}

echo " "
echo "========== Switch to build directory: $CWD/labimages/fs-lacey/"
echo "========== Lacey"
cd $CWD/labimages/fs-lacey/
$CWD/labimages/fs-lacey/build_push.sh lacey ${TAG} ${TR}

echo " "
echo "========== Switch to build directory: $CWD/labimages/fs-magma/"
echo "========== Magma"
cd $CWD/labimages/fs-magma/
$CWD/labimages/fs-magma/build_push.sh magma ${TAG} ${TR}

echo " "
echo "========== Naval --- skipped"

echo " "
echo "========== Switch to build directory: $CWD/labimages/fs-offer/"
echo "========== Offer"
cd $CWD/labimages/fs-offer/
$CWD/labimages/fs-offer/build_push.sh offer ${TAG} ${TR}

echo " "
echo "========== Switch to build directory: $CWD/labimages/fs-panda/"
echo "========== Panda"
cd $CWD/labimages/fs-panda/
$CWD/labimages/fs-panda/build_push.sh panda ${TAG} ${TR}

echo " "
echo "========== Switch to build directory: $CWD/labimages/fs-quake/"
echo "========== Quake"
cd $CWD/labimages/fs-quake/
$CWD/labimages/fs-quake/build_push.sh quake ${TAG} ${TR}

echo " "
echo "========== Switch to build directory: $CWD/labimages/fs-rainy/"
echo "========== Rainy"
cd $CWD/labimages/fs-rainy/
$CWD/labimages/fs-rainy/build_push.sh rainy ${TAG} ${TR}

echo " "
echo "========== Switch to build directory: $CWD/labimages/fs-salty/"
echo "========== Salty"
cd $CWD/labimages/fs-salty/
$CWD/labimages/fs-salty/build_push.sh salty ${TAG} ${TR}

echo " "
echo "========== Finished build of Lab Images"
echo " "
echo "========== Switch back to base directory: $CWD"
cd $CWD
echo " "
duration=$SECONDS
echo "========== Build process time: $(($duration / 60)) minutes and $(($duration % 60)) seconds elapsed"
echo " "
echo $DASH