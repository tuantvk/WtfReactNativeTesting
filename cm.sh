#!/bin/bash

if [ "$1" == "" ]; then
  echo "Missing require name !"
  exit 1
fi

mkdir -p src/"${1^}";

cp template/tem.md src/"${1^}"/"${1^}".js;
cp template/tem.spec.md src/"${1^}"/"${1^}".spec.js;

sed -i 's/Tem/'${1^}'/g' src/"${1^}"/"${1^}".js;
sed -i 's/Tem/'${1^}'/g' src/"${1^}"/"${1^}".spec.js;

echo ">>> Create template done !!!!!"