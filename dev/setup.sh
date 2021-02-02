COUNTRY_CODE="IN"
STATE_CODE="KA"
CITY="Bengaluru"
ORG="Localhost"
DEPARTMENT="Blah"
EMAIL="abc@localhost"
COMMON_NAME=$EMAIL

CERT_FILE_NAME=server.cert
KEY_FILE_NAME=server.key


if [ \( ! -e $CERT_FILE_NAME \) -o \( ! -e $KEY_FILE_NAME \) ];
then
    openssl req -nodes -new -x509 -keyout server.key -out server.cert -days 364 -subj "/emailAddress=$EMAIL/C=$COUNTRY_CODE/ST=$STATE_CODE/L=$CITY/O=$ORG/OU=$DEPARTMENT/CN=$COMMON_NAME"
    # for mac 
    sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain $CERT_FILE_NAME
fi
