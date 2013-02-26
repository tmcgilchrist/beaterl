#!/bin/sh
cd ChicagoBoss
make
cd ../beaterl
./init.sh start-standalone
while true; do
	sleep 10
done

