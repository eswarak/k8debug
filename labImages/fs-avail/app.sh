#!/bin/bash
#
# send output to logfile
LOGFILE=/app/runtime.log
exec > $LOGFILE 2>&1

# default namespace if none provided
ZNS="Student"
echo " "
echo "------ RUNTIME ARGUMENT  ------"
# default app name base if none provided
if [ -z "$1" ]; then
    ZAN="R"$((1 + RANDOM % 1000))
    echo "No app name arg provided!"
    echo "Created name using random value: $ZAN"
else 
    ZAN=$1
    echo "Provided App name arg: $ZAN"
fi

# echo what was provided as environment variables
echo " "
echo "------ PROVIDED RUNTIME ENVIRONMENT VARS ------"
echo "APP_NAME                           : $APP_NAME"
echo "APP_NAMESPACE                      : $APP_NAMESPACE"
echo "COLLECTOR_CONFIG                   : $COLLECTOR_CONFIG"
echo "INSTRUCTOR_CONFIG                  : $INSTRUCTOR_CONFIG"

# validate environment variable, if missing set defaults
# application pod name
echo " "
echo "----- DETERMINING VARIABLES FOR RUNTIME USAGE -----"
if [ -z ${APP_NAME} ]; then
    APP_NAME=$ZNS-$ZAN-$((1 + RANDOM % 10000))
    echo "APP_NAME is using random value     : $APP_NAME"
else 
    echo "APP_NAME                           : $APP_NAME"
fi

# namespace
if [ -z ${APP_NAMESPACE} ]; then
    APP_NAMESPACE=$ZNS
    echo "APP_NAMESPACE is using default     : $APP_NAMESPACE"
else 
    echo "APP_NAMESPACE                      : $APP_NAMESPACE"
fi

# url endpoint for collector, provided via a DEployment using a ConfigMap variable 
if [ -z ${COLLECTOR_CONFIG} ]; then
    COLLECTOR_CONFIG="http://localhost:3000"
    echo "COLLECTOR_CONFIG is using default  : $COLLECTOR_CONFIG"
else 
    echo "COLLECTOR_CONFIG                   : $COLLECTOR_CONFIG"
fi


# url endpoint for collector, provided via a DEployment using a ConfigMap variable 
if [ -z ${INSTRUCTOR_CONFIG} ]; then
    INSTRUCTOR_CONFIG="http://localhost:4200"
    echo "INSTRUCTOR_CONFIG is using default : $INSTRUCTOR_CONFIG"
else 
    echo "INSTRUCTOR_CONFIG                  : $INSTRUCTOR_CONFIG"
fi

echo " "
echo "----- BEGIN PROCESSING -----"
# build target urls for send and ping
STATUS="status"
SLASH="/"
ALIVE="/ping"
SEND_NS=$SLASH$STATUS$SLASH$APP_NAMESPACE
SEND_APP=$SLASH$APP_NAME

SEND_PING=$COLLECTOR_CONFIG$ALIVE
SEND_IPING=$INSTRUCTOR_CONFIG$ALIVE

PING_TEST=$(curl $SEND_PING)
PING_ITEST=$(curl $SEND_IPING)

SEND_FULL=$COLLECTOR_CONFIG$SEND_NS$SEND_APP
SEND_IFULL=$INSTRUCTOR_CONFIG$SEND_NS$SEND_APP

# target url
echo "Full collector target url   : $SEND_FULL"
echo "Full instructor target url  : $SEND_IFULL"

# send initial ping
echo "Initial ping test collector : $PING_TEST"
echo "Initial ping test instructor: $PING_ITEST"

# send forever every 15 seconds 
while true; do
    SEND_RESULT=$(curl $SEND_FULL)
    if [[ ${SEND_RESULT} -ne 'GotIt' ]]; then 
        echo "Send FAILED: $SEND_RESULT"
        FAIL_TEST=$(curl $SEND_PING)
        echo "Fail ping test: $FAIL_TEST"
    fi
    SEND_IRESULT=$(curl $SEND_IFULL)
    if [[ ${SEND_IRESULT} -ne 'GotIt' ]]; then 
        echo "Send FAILED: $SEND_IRESULT"
        FAIL_ITEST=$(curl $SEND_IPING)
        echo "Fail ping test: $FAIL_ITEST"
    fi

    sleep 15
done