#!/bin/bash

if [ $# -ne 1 ]
then
    echo "Usage: ./link-to-vault.sh <vault-path>"
    exit 1
fi

if [ ! -d "$1" ]
then
    echo "Error: $1 is not a directory"
    exit 2
fi

plugin_name="media-grid"
plugins_dir="$1/.obsidian/plugins"
plugin_dir="$plugins_dir/$plugin_name"
plugin_build_dir="$(pwd)/build"

if [ ! -d "$plugins_dir" ]
then
    echo "Warning: $plugins_dir does not exist"
    echo "Creating $plugins_dir"
    mkdir -p "$plugins_dir"
fi

echo "Linking $plugin_build_dir to $plugin_dir"
ln -s "$plugin_build_dir" "$plugin_dir"

if [ $? -eq 0 ]
then
    echo "Done"
else
    echo "Error: Failed to link $plugin_build_dir to $plugin_dir"
    exit 3
fi