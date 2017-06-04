#!/bin/bash
set -e

if [[ "$*" == npm*start* ]]; then
	if [ ! -e "$GHOST_CONTENT/config.js" ]; then
		cp /config-template.js "$GHOST_CONTENT/config.js"
	fi
fi

docker-entrypoint.sh "$@"