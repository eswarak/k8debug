#!/bin/bash
SECONDS=0
DASH="============================================================================================================================"
echo " "
echo $DASH
echo " "
echo "  Build resource files: <lab>.yaml and <lab>_Dockerfile"
echo " "
echo $DASH

# set a work directory
CDIR=$(pwd)

echo "  Creating directory      : ${CDIR}/resourceFiles/dockerfile"
mkdir -p ${CDIR}/resourceFiles/dockerfile
echo "  Creating directory      : ${CDIR}/resourceFiles/failed"
mkdir -p ${CDIR}/resourceFiles/failed
echo "  Creating directory      : ${CDIR}/resourceFiles/passed"
mkdir -p ${CDIR}/resourceFiles/passed
echo $DASH

echo " "
echo "  Processing docker build DOCKERFILE resources"
cp ${CDIR}/labimages/fs-avail/Dockerfile ${CDIR}/resourceFiles/dockerfile/avail_Dockerfile
cp ${CDIR}/labimages/fs-baker/Dockerfile ${CDIR}/resourceFiles/dockerfile/baker_Dockerfile
cp ${CDIR}/labimages/fs-carbs/Dockerfile ${CDIR}/resourceFiles/dockerfile/carbs_Dockerfile
cp ${CDIR}/labimages/fs-doors/Dockerfile ${CDIR}/resourceFiles/dockerfile/doors_Dockerfile
cp ${CDIR}/labimages/fs-eagle/Dockerfile ${CDIR}/resourceFiles/dockerfile/eagle_Dockerfile
cp ${CDIR}/labimages/fs-floor/Dockerfile ${CDIR}/resourceFiles/dockerfile/floor_Dockerfile
cp ${CDIR}/labimages/fs-gonzo/Dockerfile ${CDIR}/resourceFiles/dockerfile/gonzo_Dockerfile
cp ${CDIR}/labimages/fs-house/Dockerfile ${CDIR}/resourceFiles/dockerfile/house_Dockerfile
cp ${CDIR}/labimages/fs-igloo/Dockerfile ${CDIR}/resourceFiles/dockerfile/igloo_Dockerfile
cp ${CDIR}/labimages/fs-jazzy/Dockerfile ${CDIR}/resourceFiles/dockerfile/jazzy_Dockerfile
cp ${CDIR}/labimages/fs-karma/Dockerfile ${CDIR}/resourceFiles/dockerfile/karma_Dockerfile
cp ${CDIR}/labimages/fs-lacey/Dockerfile ${CDIR}/resourceFiles/dockerfile/lacey_Dockerfile
cp ${CDIR}/labimages/fs-magma/Dockerfile ${CDIR}/resourceFiles/dockerfile/magma_Dockerfile
cp ${CDIR}/labimages/fs-naval/Dockerfile ${CDIR}/resourceFiles/dockerfile/naval_Dockerfile
cp ${CDIR}/labimages/fs-offer/Dockerfile ${CDIR}/resourceFiles/dockerfile/offer_Dockerfile
cp ${CDIR}/labimages/fs-panda/Dockerfile ${CDIR}/resourceFiles/dockerfile/panda_Dockerfile
cp ${CDIR}/labimages/fs-quake/Dockerfile ${CDIR}/resourceFiles/dockerfile/quake_Dockerfile
cp ${CDIR}/labimages/fs-rainy/Dockerfile ${CDIR}/resourceFiles/dockerfile/rainy_Dockerfile
cp ${CDIR}/labimages/fs-salty/Dockerfile ${CDIR}/resourceFiles/dockerfile/salty_Dockerfile
echo " "
echo "  Processing yaml files for FAILED deployments"
cp ${CDIR}/deployment/fileout/01_fail_house_all.yaml   ${CDIR}/resourceFiles/failed/house.yaml
cp ${CDIR}/deployment/fileout/02_fail_baker_all.yaml   ${CDIR}/resourceFiles/failed/baker.yaml
cp ${CDIR}/deployment/fileout/03_fail_carbs_all.yaml   ${CDIR}/resourceFiles/failed/carbs.yaml
cp ${CDIR}/deployment/fileout/04_fail_doors_all.yaml   ${CDIR}/resourceFiles/failed/doors.yaml
cp ${CDIR}/deployment/fileout/05_fail_eagle_all.yaml   ${CDIR}/resourceFiles/failed/eagle.yaml
cp ${CDIR}/deployment/fileout/06_fail_floor_all.yaml   ${CDIR}/resourceFiles/failed/floor.yaml
cp ${CDIR}/deployment/fileout/07_fail_gonzo_all.yaml   ${CDIR}/resourceFiles/failed/gonzo.yaml
cp ${CDIR}/deployment/fileout/08_fail_igloo_all.yaml   ${CDIR}/resourceFiles/failed/igloo.yaml
cp ${CDIR}/deployment/fileout/09_fail_jazzy_all.yaml   ${CDIR}/resourceFiles/failed/jazzy.yaml
cp ${CDIR}/deployment/fileout/10_fail_karma_all.yaml   ${CDIR}/resourceFiles/failed/karma.yaml
cp ${CDIR}/deployment/fileout/11_fail_lacey_all.yaml   ${CDIR}/resourceFiles/failed/lacey.yaml
cp ${CDIR}/deployment/fileout/12_fail_magma_all.yaml   ${CDIR}/resourceFiles/failed/magma.yaml
cp ${CDIR}/deployment/fileout/13_fail_offer_all.yaml   ${CDIR}/resourceFiles/failed/offer.yaml
cp ${CDIR}/deployment/fileout/14_fail_panda_all.yaml   ${CDIR}/resourceFiles/failed/panda.yaml
cp ${CDIR}/deployment/fileout/15_fail_quake_all.yaml   ${CDIR}/resourceFiles/failed/quake.yaml
cp ${CDIR}/deployment/fileout/16_fail_rainy_all.yaml   ${CDIR}/resourceFiles/failed/rainy.yaml
cp ${CDIR}/deployment/fileout/17_fail_salty_all.yaml   ${CDIR}/resourceFiles/failed/salty.yaml
echo " "
echo "  Processing yaml files for PASSED deployments"
cp ${CDIR}/deployment/fileout/01_pass_house_all.yaml   ${CDIR}/resourceFiles/passed/house.yaml
cp ${CDIR}/deployment/fileout/02_pass_baker_all.yaml   ${CDIR}/resourceFiles/passed/baker.yaml
cp ${CDIR}/deployment/fileout/03_pass_carbs_all.yaml   ${CDIR}/resourceFiles/passed/carbs.yaml
cp ${CDIR}/deployment/fileout/04_pass_doors_all.yaml   ${CDIR}/resourceFiles/passed/doors.yaml
cp ${CDIR}/deployment/fileout/05_pass_eagle_all.yaml   ${CDIR}/resourceFiles/passed/eagle.yaml
cp ${CDIR}/deployment/fileout/06_pass_floor_all.yaml   ${CDIR}/resourceFiles/passed/floor.yaml
cp ${CDIR}/deployment/fileout/07_pass_gonzo_all.yaml   ${CDIR}/resourceFiles/passed/gonzo.yaml
cp ${CDIR}/deployment/fileout/08_pass_igloo_all.yaml   ${CDIR}/resourceFiles/passed/igloo.yaml
cp ${CDIR}/deployment/fileout/09_pass_jazzy_all.yaml   ${CDIR}/resourceFiles/passed/jazzy.yaml
cp ${CDIR}/deployment/fileout/10_pass_karma_all.yaml   ${CDIR}/resourceFiles/passed/karma.yaml
cp ${CDIR}/deployment/fileout/11_pass_lacey_all.yaml   ${CDIR}/resourceFiles/passed/lacey.yaml
cp ${CDIR}/deployment/fileout/12_pass_magma_all.yaml   ${CDIR}/resourceFiles/passed/magma.yaml
cp ${CDIR}/deployment/fileout/13_pass_offer_all.yaml   ${CDIR}/resourceFiles/passed/offer.yaml
cp ${CDIR}/deployment/fileout/14_pass_panda_all.yaml   ${CDIR}/resourceFiles/passed/panda.yaml
cp ${CDIR}/deployment/fileout/15_pass_quake_all.yaml   ${CDIR}/resourceFiles/passed/quake.yaml
cp ${CDIR}/deployment/fileout/16_pass_rainy_all.yaml   ${CDIR}/resourceFiles/passed/rainy.yaml
cp ${CDIR}/deployment/fileout/17_pass_salty_all.yaml   ${CDIR}/resourceFiles/passed/salty.yaml

echo " "
echo "  Finished generating Resource files"
echo " "
duration=$SECONDS
echo "  Build process time: $(($duration / 60)) minutes and $(($duration % 60)) seconds elapsed"
echo " "
echo $DASH