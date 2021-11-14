#!/usr/bin/bash
if [[ ${@} ]];then
    version=$([[ ${@} =~ ([0-9]+[a-zA-Z0-9\.]+) ]] && echo ${BASH_REMATCH[1]})
    cat package.json|sed -e "s/1.0.0/${version}/g"
fi