#!/bin/bash

# Script to remove version suffixes from imports (@version)

# Find all .tsx files and remove @version from imports
find . -name "*.tsx" -type f -exec sed -i 's/@[0-9]\+\.[0-9]\+\.[0-9]\+//g' {} \;

echo "Fixed all versioned imports!"
