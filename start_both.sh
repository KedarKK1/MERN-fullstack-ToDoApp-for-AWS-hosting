#!/bin/bash

# Run the client in the background
./start_client.sh &

# Sleep for a few seconds to ensure the client has started
sleep 5

# Run the server in the foreground
./start_server.sh
